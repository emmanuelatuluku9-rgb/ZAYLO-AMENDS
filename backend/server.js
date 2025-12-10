import express from 'express';
import cors from 'cors';
import jsforce from 'jsforce';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

let conn = null;

async function connectToSalesforce() {
  console.log('🔐 Attempting Salesforce connection...');
  
  // Method 1: OAuth with Username-Password Flow
  if (process.env.SF_CLIENT_ID && process.env.SF_CLIENT_SECRET) {
    try {
      console.log('🔑 Using OAuth (Username-Password Flow)...');
      
      conn = new jsforce.Connection({
        oauth2: {
          loginUrl: process.env.SF_INSTANCE_URL || 'https://test.salesforce.com',
          clientId: process.env.SF_CLIENT_ID,
          clientSecret: process.env.SF_CLIENT_SECRET
        }
      });
      
      await conn.login(
        process.env.SF_USERNAME,
        process.env.SF_PASSWORD + (process.env.SF_SECURITY_TOKEN || '')
      );
      
      console.log('✅ Connected to Salesforce via OAuth!');
      console.log('   Instance URL:', conn.instanceUrl);
      console.log('   Access Token:', conn.accessToken ? '✓ Present' : '✗ Missing');
      return true;
    } catch (err) {
      console.log('⚠️ OAuth connection failed:', err.message);
      console.log('   Falling back to standard authentication...');
    }
  }
  
  // Method 2: Standard Username-Password Authentication
  try {
    console.log('🔐 Using standard username-password authentication...');
    
    conn = new jsforce.Connection({
      loginUrl: process.env.SF_INSTANCE_URL || 'https://test.salesforce.com'
    });
    
    await conn.login(
      process.env.SF_USERNAME,
      process.env.SF_PASSWORD + (process.env.SF_SECURITY_TOKEN || '')
    );
    
    console.log('✅ Connected to Salesforce!');
    console.log('   Instance URL:', conn.instanceUrl);
    console.log('   Access Token:', conn.accessToken ? '✓ Present' : '✗ Missing');
    return true;
  } catch (err) {
    console.error('❌ Salesforce connection failed:', err.message);
    return false;
  }
}

// Safe field mappings - only commonly available fields
const safeFieldMappings = {
  Account: 'Id, Name, Type, Industry, Phone, Website, BillingCity, BillingState, BillingCountry, CreatedDate',
  Contact: 'Id, FirstName, LastName, Email, Phone, AccountId, Title, Department, CreatedDate',
  Lead: 'Id, FirstName, LastName, Company, Email, Phone, Status, LeadSource, CreatedDate',
  Opportunity: 'Id, Name, AccountId, Amount, CloseDate, StageName, Probability, Type, CreatedDate',
  Case: 'Id, Subject, Status, Priority, Origin, AccountId, ContactId, CreatedDate',
  Contract: 'Id, AccountId, Status, StartDate, ContractTerm, CreatedDate',
  Product2: 'Id, Name, ProductCode, Description, Family, IsActive, CreatedDate',
  Order: 'Id, AccountId, EffectiveDate, Status, TotalAmount, CreatedDate',
  Quote: 'Id, Name, OpportunityId, Status, GrandTotal, CreatedDate',
  Campaign: 'Id, Name, Type, Status, StartDate, EndDate, CreatedDate',
  Task: 'Id, Subject, Status, Priority, ActivityDate, WhoId, WhatId, CreatedDate',
  Event: 'Id, Subject, Location, ActivityDateTime, DurationInMinutes, WhoId, WhatId, CreatedDate'
};

// Cache for object descriptions
const objectDescribeCache = {};

// Get available fields for an object dynamically
async function getAvailableFields(objectName) {
  // Check cache first
  if (objectDescribeCache[objectName]) {
    return objectDescribeCache[objectName];
  }
  
  try {
    console.log(`   🔍 Describing ${objectName} object...`);
    const describe = await conn.sobject(objectName).describe();
    
    // Get all field names
    const allFields = describe.fields.map(f => f.name);
    
    // Define preferred fields in order of preference
    const preferredFields = ['Id', 'Name', 'Subject', 'FirstName', 'LastName', 'Email', 'Phone', 
                            'AccountId', 'ContactId', 'Status', 'Type', 'Amount', 'CloseDate',
                            'StageName', 'Priority', 'Industry', 'Company', 'Title', 'CreatedDate'];
    
    // Get fields that exist
    const availableFields = preferredFields.filter(field => allFields.includes(field));
    
    // Add some extra common fields if they exist
    const extraFields = allFields.filter(f => 
      !availableFields.includes(f) && 
      (f.endsWith('__c') || ['Website', 'Description'].includes(f))
    ).slice(0, 5);
    
    const finalFields = [...new Set([...availableFields, ...extraFields])];
    
    console.log(`   ✅ Found ${finalFields.length} accessible fields for ${objectName}`);
    
    // Cache it
    objectDescribeCache[objectName] = finalFields.join(', ');
    
    return objectDescribeCache[objectName];
  } catch (err) {
    console.log(`   ⚠️ Could not describe ${objectName}, using safe defaults`);
    return safeFieldMappings[objectName] || 'Id, Name, CreatedDate';
  }
}

// Middleware to check connection
const checkConnection = (req, res, next) => {
  if (!conn || !conn.accessToken) {
    return res.status(503).json({ 
      success: false, 
      error: 'Not connected to Salesforce. Please check server logs.',
      hint: 'Backend is running but Salesforce authentication failed.'
    });
  }
  next();
};

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    connected: !!(conn && conn.accessToken),
    timestamp: new Date().toISOString(),
    instanceUrl: conn ? conn.instanceUrl : null
  });
});

// Get all records or filter by field
app.get('/api/:object', checkConnection, async (req, res) => {
  try {
    const { object } = req.params;
    const { filterField, filterValue } = req.query;
    
    console.log(`📥 GET /api/${object}`, filterField ? `where ${filterField}=${filterValue}` : '');
    
    // Get available fields for this object
    const fields = await getAvailableFields(object);
    
    let query = `SELECT ${fields} FROM ${object}`;
    
    // Add filter if provided
    if (filterField && filterValue) {
      // Escape single quotes in filter value
      const escapedValue = filterValue.replace(/'/g, "\\'");
      query += ` WHERE ${filterField} = '${escapedValue}'`;
    }
    
    // Add order by and limit
    query += ' ORDER BY CreatedDate DESC LIMIT 100';
    
    console.log(`   Query: ${query}`);
    
    const result = await conn.query(query);
    
    console.log(`   ✅ Found ${result.records.length} ${object} records`);
    
    res.json({ 
      success: true, 
      records: result.records,
      totalSize: result.totalSize
    });
  } catch (err) {
    console.error(`   ❌ GET Error:`, err.message);
    console.error(`   Error code:`, err.errorCode || 'UNKNOWN');
    
    // If it's a field error, try with minimal fields
    if (err.errorCode === 'INVALID_FIELD' || err.message.includes('No such column')) {
      console.log(`   🔄 Retrying with minimal fields...`);
      try {
        const minimalQuery = `SELECT Id, Name, CreatedDate FROM ${req.params.object} ORDER BY CreatedDate DESC LIMIT 100`;
        console.log(`   Query: ${minimalQuery}`);
        const result = await conn.query(minimalQuery);
        console.log(`   ✅ Found ${result.records.length} records with minimal fields`);
        
        return res.json({ 
          success: true, 
          records: result.records,
          totalSize: result.totalSize,
          warning: 'Some fields not available, showing limited data'
        });
      } catch (retryErr) {
        console.error(`   ❌ Retry also failed:`, retryErr.message);
      }
    }
    
    res.status(500).json({ 
      success: false, 
      error: err.message,
      errorCode: err.errorCode || 'UNKNOWN_ERROR',
      hint: 'This object might not exist or you may not have permission to access it'
    });
  }
});

// Get single record by ID
app.get('/api/:object/:id', checkConnection, async (req, res) => {
  try {
    const { object, id } = req.params;
    
    console.log(`📥 GET /api/${object}/${id}`);
    
    const fields = await getAvailableFields(object);
    const query = `SELECT ${fields} FROM ${object} WHERE Id = '${id}'`;
    
    console.log(`   Query: ${query}`);
    
    const result = await conn.query(query);
    
    if (result.records.length === 0) {
      return res.status(404).json({ 
        success: false, 
        error: 'Record not found' 
      });
    }
    
    console.log(`   ✅ Found ${object} record`);
    
    res.json({ 
      success: true, 
      record: result.records[0]
    });
  } catch (err) {
    console.error(`   ❌ GET by ID Error:`, err.message);
    res.status(500).json({ 
      success: false, 
      error: err.message 
    });
  }
});

// Create record
app.post('/api/:object', checkConnection, async (req, res) => {
  try {
    const { object } = req.params;
    const data = req.body;
    
    console.log(`📝 POST /api/${object}`);
    console.log(`   Data:`, JSON.stringify(data, null, 2));
    
    const result = await conn.sobject(object).create(data);
    
    if (result.success) {
      console.log(`   ✅ Created ${object}:`, result.id);
      res.json({ 
        success: true, 
        id: result.id 
      });
    } else {
      console.error(`   ❌ Create failed:`, result.errors);
      res.status(400).json({ 
        success: false, 
        errors: result.errors 
      });
    }
  } catch (err) {
    console.error(`   ❌ POST Error:`, err.message);
    res.status(500).json({ 
      success: false, 
      error: err.message 
    });
  }
});

// Update record
app.patch('/api/:object/:id', checkConnection, async (req, res) => {
  try {
    const { object, id } = req.params;
    const data = req.body;
    
    console.log(`✏️ PATCH /api/${object}/${id}`);
    console.log(`   Data:`, JSON.stringify(data, null, 2));
    
    const result = await conn.sobject(object).update({
      Id: id,
      ...data
    });
    
    if (result.success) {
      console.log(`   ✅ Updated ${object}:`, result.id);
      res.json({ 
        success: true, 
        id: result.id 
      });
    } else {
      console.error(`   ❌ Update failed:`, result.errors);
      res.status(400).json({ 
        success: false, 
        errors: result.errors 
      });
    }
  } catch (err) {
    console.error(`   ❌ PATCH Error:`, err.message);
    res.status(500).json({ 
      success: false, 
      error: err.message 
    });
  }
});

// Delete record
app.delete('/api/:object/:id', checkConnection, async (req, res) => {
  try {
    const { object, id } = req.params;
    
    console.log(`🗑️ DELETE /api/${object}/${id}`);
    
    const result = await conn.sobject(object).destroy(id);
    
    if (result.success) {
      console.log(`   ✅ Deleted ${object}:`, result.id);
      res.json({ 
        success: true, 
        id: result.id 
      });
    } else {
      console.error(`   ❌ Delete failed:`, result.errors);
      res.status(400).json({ 
        success: false, 
        errors: result.errors 
      });
    }
  } catch (err) {
    console.error(`   ❌ DELETE Error:`, err.message);
    res.status(500).json({ 
      success: false, 
      error: err.message 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('💥 Unhandled error:', err);
  res.status(500).json({ 
    success: false, 
    error: err.message || 'Internal server error' 
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
  console.log('');
  console.log('🚀 ================================================');
  console.log('🚀 Salesforce Connect Backend Server');
  console.log('🚀 ================================================');
  console.log(`🌐 Server running on http://localhost:${PORT}`);
  console.log(`🔍 Health check: http://localhost:${PORT}/api/health`);
  console.log('');
  
  const connected = await connectToSalesforce();
  
  if (!connected) {
    console.log('⚠️  WARNING: Server is running but NOT connected to Salesforce!');
    console.log('⚠️  API endpoints will return 503 errors until connection succeeds.');
    console.log('');
  } else {
    console.log('');
    console.log('✅ System ready! Backend connected to Salesforce.');
  }
  
  console.log('');
  console.log('📋 Available Endpoints:');
  console.log('  GET    /api/health');
  console.log('  GET    /api/:object');
  console.log('  GET    /api/:object/:id');
  console.log('  POST   /api/:object');
  console.log('  PATCH  /api/:object/:id');
  console.log('  DELETE /api/:object/:id');
  console.log('');
  console.log('✨ Server ready to accept requests!');
  console.log('================================================');
  console.log('');
});

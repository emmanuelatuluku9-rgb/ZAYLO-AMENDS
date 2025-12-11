import express from 'express';
import cors from 'cors';
import jsforce from 'jsforce';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const conn = new jsforce.Connection({
  loginUrl: process.env.SF_INSTANCE_URL || 'https://login.salesforce.com'
});

async function connectToSalesforce() {
  try {
    await conn.login(
      process.env.SF_USERNAME,
      process.env.SF_PASSWORD + (process.env.SF_SECURITY_TOKEN || '')
    );
    console.log('✅ Connected to Salesforce');
  } catch (err) {
    console.error('❌ Salesforce login failed:', err.message);
  }
}

// Field mappings for each object - CORRECTED for custom objects
const objectFields = {
  Account: 'Id, Name, Industry, Phone, Type, Website, BillingCity, BillingState, CreatedDate',
  Contact: 'Id, FirstName, LastName, Email, Phone, Title, Department, AccountId, CreatedDate',
  Lead: 'Id, FirstName, LastName, Company, Email, Phone, Status, Industry, CreatedDate',
  Case: 'Id, Subject, Status, Priority, Type, Origin, AccountId, ContactId, CreatedDate',
  Opportunity: 'Id, Name, StageName, Amount, CloseDate, Probability, Type, AccountId, CreatedDate',
  Contract: 'Id, AccountId, Status, StartDate, ContractTerm, CreatedDate',
  Campaign: 'Id, Name, Type, Status, StartDate, EndDate, CreatedDate',
  Asset: 'Id, Name, SerialNumber, InstallDate, Status, Product2Id, AccountId, CreatedDate',
  WorkOrder: 'Id, WorkOrderNumber, Subject, Status, Priority, AccountId, AssetId, CreatedDate',
  Product2: 'Id, Name, ProductCode, Family, IsActive, Description, CreatedDate',
  Order: 'Id, OrderNumber, Status, TotalAmount, EffectiveDate, AccountId, BillingCity, ShippingCity, CreatedDate',
  Quote: 'Id, Name, Status, GrandTotal, ExpirationDate, OpportunityId, AccountId, CreatedDate',
  
  // Custom objects - with proper field API names
  Invoice__c: 'Id, Name, Invoice_Number__c, Status__c, Total_Amount__c, Invoice_Date__c, Due_Date__c, Order__c, Account__c, CreatedDate',
  Payment__c: 'Id, Name, Amount__c, Payment_Date__c, Payment_Method__c, Status__c, Invoice__c, CreatedDate',
  Inventory__c: 'Id, Name, Product__c, Warehouse_Location__c, Quantity_Available__c, Unit_Cost__c, CreatedDate',
  Shipment__c: 'Id, Name, Order__c, Tracking_Number__c, Carrier__c, Status__c, Shipped_Date__c, CreatedDate'
};

// ⚠️ IMPORTANT: Health endpoint MUST come BEFORE generic :object routes!
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    connected: !!conn.accessToken,
    timestamp: new Date().toISOString()
  });
});

// Create record
app.post('/api/:object', async (req, res) => {
  try {
    const { object } = req.params;
    console.log(`Creating ${object}:`, req.body);
    const result = await conn.sobject(object).create(req.body);
    if (result.success) {
      res.json({ success: true, id: result.id });
    } else {
      res.status(400).json({ success: false, errors: result.errors });
    }
  } catch (err) {
    console.error(`Error creating ${req.params.object}:`, err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get recent records
app.get('/api/:object', async (req, res) => {
  try {
    const { object } = req.params;
    const fields = objectFields[object] || 'Id, Name, CreatedDate';
    console.log(`Fetching ${object} records with fields: ${fields}`);
    
    const records = await conn.sobject(object)
      .select(fields)
      .limit(100)
      .sort({ CreatedDate: -1 })
      .execute();
      
    console.log(`✅ Found ${records.length} ${object} records`);
    res.json({ success: true, records });
  } catch (err) {
    console.error(`Error fetching ${req.params.object}:`, err);
    res.status(500).json({ 
      success: false, 
      error: err.message,
      details: `Failed to fetch ${req.params.object}. Make sure the object exists in your Salesforce org.`
    });
  }
});

// Get single record by ID
app.get('/api/:object/:id', async (req, res) => {
  try {
    const { object, id } = req.params;
    const fields = objectFields[object] || 'Id, Name, CreatedDate';
    console.log(`Fetching ${object} record ${id}...`);
    const record = await conn.sobject(object).retrieve(id);
    console.log(`✅ Found ${object} record`);
    res.json({ success: true, record });
  } catch (err) {
    console.error(`Error fetching ${req.params.object}/${req.params.id}:`, err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Update record
app.patch('/api/:object/:id', async (req, res) => {
  try {
    const { object, id } = req.params;
    console.log(`Updating ${object} ${id}:`, req.body);
    
    // Remove all read-only fields from update payload
    const readOnlyFields = ['Id', 'CreatedDate', 'CreatedById', 'LastModifiedDate', 'LastModifiedById', 'SystemModstamp', 'IsDeleted'];
    const updateData = { ...req.body };
    readOnlyFields.forEach(field => delete updateData[field]);
    
    console.log(`Cleaned data for update:`, updateData);
    
    const result = await conn.sobject(object).update({
      Id: id,
      ...updateData
    });
    
    if (result.success) {
      console.log(`✅ Updated ${object} ${id}`);
      res.json({ success: true, id: result.id });
    } else {
      console.error(`Failed to update ${object} ${id}:`, result.errors);
      res.status(400).json({ success: false, errors: result.errors });
    }
  } catch (err) {
    console.error(`Error updating ${req.params.object}/${req.params.id}:`, err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Delete record
app.delete('/api/:object/:id', async (req, res) => {
  try {
    const { object, id } = req.params;
    console.log(`Deleting ${object} ${id}...`);
    const result = await conn.sobject(object).destroy(id);
    
    if (result.success) {
      console.log(`✅ Deleted ${object} ${id}`);
      res.json({ success: true, id: result.id });
    } else {
      console.error(`Failed to delete ${object} ${id}:`, result.errors);
      res.status(400).json({ success: false, errors: result.errors });
    }
  } catch (err) {
    console.error(`Error deleting ${req.params.object}/${req.params.id}:`, err);
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
  await connectToSalesforce();
});

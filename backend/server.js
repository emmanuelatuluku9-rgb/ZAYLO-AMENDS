import express from "express";
import cors from "cors";
import jsforce from "jsforce";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" })); // Increased limit for CSV data

const conn = new jsforce.Connection({
  loginUrl: process.env.SF_INSTANCE_URL || "https://login.salesforce.com",
});

async function connectToSalesforce() {
  try {
    await conn.login(
      process.env.SF_USERNAME,
      process.env.SF_PASSWORD + (process.env.SF_SECURITY_TOKEN || "")
    );
    console.log("✅ Connected to Salesforce");
  } catch (err) {
    console.error("❌ Salesforce login failed:", err.message);
  }
}

// Field mappings for each object
const objectFields = {
  Account:
    "Id, Name, Industry, Phone, Type, Website, BillingCity, BillingState, CreatedDate",
  Contact:
    "Id, FirstName, LastName, Email, Phone, Title, Department, AccountId, CreatedDate",
  Lead: "Id, FirstName, LastName, Company, Email, Phone, Status, Industry, CreatedDate",
  Case: "Id, Subject, Status, Priority, Type, Origin, AccountId, ContactId, AI_Chatbot__c, AI_Response__c, CaseNumber, MilestoneStatus, Time_Spent__c, Chatbot_Response__c, CreatedDate",
  Opportunity:
    "Id, Name, StageName, Amount, CloseDate, Probability, Type, AccountId, CreatedDate",
  Contract: "Id, AccountId, Status, StartDate, ContractTerm, CreatedDate",
  Campaign: "Id, Name, Type, Status, StartDate, EndDate, CreatedDate",
  Asset:
    "Id, Name, SerialNumber, InstallDate, Status, Product2Id, AccountId, CreatedDate",
  WorkOrder:
    "Id, WorkOrderNumber, Subject, Status, Priority, AccountId, AssetId, CreatedDate",
  //Product2: "Id, Name, ProductCode, Family, IsActive, Description, CreatedDate",
  Order:
    "Id, OrderNumber, Status, TotalAmount, EffectiveDate, AccountId, BillingCity, ShippingCity, CreatedDate",
  Quote:
    "Id, Name, Status, GrandTotal, ExpirationDate, OpportunityId, AccountId, CreatedDate",

  // Custom objects
   //Invoice__c:
    //"Id, Name, Invoice_Number__c, Status__c, Total_Amount__c, Invoice_Date__c, Due_Date__c, Order__c, Account__c, CreatedDate",
  Payment__c:
    "Id, Name, Amount__c, Payment_Date__c, Payment_Method__c, Status__c, Invoice__c, CreatedDate",
  Inventory__c:
    "Id, Name, Product__c, Warehouse_Location__c, Quantity_Available__c, Unit_Cost__c, CreatedDate",
  ShipmentSC__c:
    "Id, Name, OrderSC__c, Actual_Delivery_Date__c, Shipment_Number__c, Estimated_Delivery_Date__c, Shipment_Status__c, Shipped_Date__c, CreatedDate",
  Sales_LineSC__c:
    "Id, Name, Line_Amount__c, OrderSC__c, Product__c, Quantity__c, Sale_Date__c, CreatedDate",
  ProductSC__c:
    "Id, Name, Category__c, Is_Active__c, Product_Code__c, CreatedDate",
  InvoiceSC__c:
    "Id,	Account__c, Name, Invoice_Number__c, Amount__c, Paid_Amount__c, Due_Date__c, OrderSC__c, Status__c, CreatedDate",
  CRM_DealSC__c:
    "Id, Name, Amount__c, Close_Date__c, Source_System__c, Stage__c, Account__c, CreatedDate",
  PaymentSC__c:
    "Id, Name, Payment_Reference__c, Amount__c, Payment_Date__c, Payment_Method__c, Status__c, CreatedDate",
  OrderSC__c:
    "Id, Order_Number__c, Account__c, Contact__c, Product_Name__c, Quantity__c, CreatedDate",
};

// Read-only fields that should be filtered out
const readOnlyFields = [
  "Id",
  "CreatedDate",
  "CreatedById",
  "LastModifiedDate",
  "LastModifiedById",
  "SystemModstamp",
  "IsDeleted",
];

// Helper function to clean data
function cleanRecordData(data) {
  const cleaned = { ...data };
  readOnlyFields.forEach((field) => delete cleaned[field]);
  return cleaned;
}

// ⚠️ IMPORTANT: Health endpoint MUST come BEFORE generic :object routes!
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    connected: !!conn.accessToken,
    timestamp: new Date().toISOString(),
  });
});

// CSV BULK IMPORT ENDPOINT - NEW!
app.post("/api/:object/import", async (req, res) => {
  try {
    const { object } = req.params;
    const { records } = req.body;

    console.log(`📥 Bulk importing ${records.length} ${object} records...`);

    if (!records || !Array.isArray(records) || records.length === 0) {
      return res.status(400).json({
        success: false,
        error: "No records provided for import",
      });
    }

    // Clean all records (remove read-only fields)
    const cleanedRecords = records.map((record) => cleanRecordData(record));

    console.log(`🧹 Cleaned ${cleanedRecords.length} records for import`);

    // Salesforce bulk create (handles up to 200 records per batch automatically)
    const results = await conn.sobject(object).create(cleanedRecords);

    // Process results
    const successes = [];
    const errors = [];

    results.forEach((result, index) => {
      if (result.success) {
        successes.push({
          index,
          id: result.id,
          record: records[index],
        });
      } else {
        errors.push({
          index,
          record: records[index],
          errors: result.errors,
        });
      }
    });

    console.log(
      `✅ Import complete: ${successes.length} success, ${errors.length} errors`
    );

    res.json({
      success: true,
      totalRecords: records.length,
      successCount: successes.length,
      errorCount: errors.length,
      successes: successes.slice(0, 10), // Return first 10 for preview
      errors: errors.slice(0, 10), // Return first 10 errors
      message: `Successfully imported ${successes.length} of ${records.length} records`,
    });
  } catch (err) {
    console.error(`❌ Bulk import error for ${req.params.object}:`, err);
    res.status(500).json({
      success: false,
      error: err.message,
      details:
        "Failed to import records. Please check your data format and try again.",
    });
  }
});

// Create record
app.post("/api/:object", async (req, res) => {
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
app.get("/api/:object", async (req, res) => {
  try {
    const { object } = req.params;
    const fields = objectFields[object] || "Id, Name, CreatedDate";
    console.log(`Fetching ${object} records with fields: ${fields}`);

    const records = await conn
      .sobject(object)
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
      details: `Failed to fetch ${req.params.object}. Make sure the object exists in your Salesforce org.`,
    });
  }
});

// Get single record by ID
app.get("/api/:object/:id", async (req, res) => {
  try {
    const { object, id } = req.params;
    const fields = objectFields[object] || "Id, Name, CreatedDate";
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
app.patch("/api/:object/:id", async (req, res) => {
  try {
    const { object, id } = req.params;
    console.log(`Updating ${object} ${id}:`, req.body);

    const updateData = cleanRecordData(req.body);
    console.log(`Cleaned data for update:`, updateData);

    const result = await conn.sobject(object).update({
      Id: id,
      ...updateData,
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
app.delete("/api/:object/:id", async (req, res) => {
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
  console.log(`📥 CSV Import: POST /api/:object/import`);
  await connectToSalesforce();
});
// salesforceConfig.js - Import this into your App.jsx
// Add this at the top of your App.jsx: import { navItems, relationships, formConfigs } from './salesforceConfig';

import { Home, Building2, Users, Target, FileText, DollarSign, Package, Warehouse, ShoppingCart, Truck, Receipt, CreditCard, ShoppingBag, Briefcase, Calendar, Activity } from 'lucide-react';

// Navigation items - Organized by category
export const navItems = [
  { id: 'Home', icon: Home, label: 'Home', category: 'Home' },
  
  // Sales & CRM
  { id: 'Account', icon: Building2, label: 'Accounts', category: 'Sales' },
  { id: 'Contact', icon: Users, label: 'Contacts', category: 'Sales' },
  { id: 'Lead', icon: Target, label: 'Leads', category: 'Sales' },
  { id: 'Opportunity', icon: DollarSign, label: 'Opportunities', category: 'Sales' },
  { id: 'Quote', icon: FileText, label: 'Quotes', category: 'Sales' },
  { id: 'Campaign', icon: Activity, label: 'Campaigns', category: 'Marketing' },
  
  // Service & Support
  { id: 'Case', icon: FileText, label: 'Cases', category: 'Service' },
  { id: 'Contract', icon: Briefcase, label: 'Contracts', category: 'Service' },
  { id: 'Asset', icon: Package, label: 'Assets', category: 'Service' },
  { id: 'WorkOrder', icon: Activity, label: 'Work Orders', category: 'Service' },
  
  // Products & Commerce
  { id: 'Product2', icon: Package, label: 'Products', category: 'Products' },
  { id: 'Order', icon: ShoppingCart, label: 'Orders', category: 'Commerce' },
  { id: 'Invoice__c', icon: Receipt, label: 'Invoices', category: 'Commerce' },
  { id: 'Payment__c', icon: CreditCard, label: 'Payments', category: 'Commerce' },
  
  // Logistics
  { id: 'Inventory__c', icon: Warehouse, label: 'Inventory', category: 'Logistics' },
  { id: 'Shipment__c', icon: Truck, label: 'Shipments', category: 'Logistics' },
];

// Comprehensive relationships
export const relationships = {
  Account: [
    { object: 'Contact', field: 'AccountId', label: 'Contacts' },
    { object: 'Opportunity', field: 'AccountId', label: 'Opportunities' },
    { object: 'Case', field: 'AccountId', label: 'Cases' },
    { object: 'Contract', field: 'AccountId', label: 'Contracts' },
    { object: 'Order', field: 'AccountId', label: 'Orders' },
    { object: 'Asset', field: 'AccountId', label: 'Assets' },
    { object: 'WorkOrder', field: 'AccountId', label: 'Work Orders' },
    { object: 'Invoice__c', field: 'Account__c', label: 'Invoices' }
  ],
  Contact: [
    { object: 'Account', field: 'AccountId', label: 'Account', single: true },
    { object: 'Case', field: 'ContactId', label: 'Cases' },
    { object: 'Opportunity', field: 'ContactId', label: 'Opportunities' },
    { object: 'Asset', field: 'ContactId', label: 'Assets' },
    { object: 'WorkOrder', field: 'ContactId', label: 'Work Orders' },
    { object: 'Quote', field: 'ContactId', label: 'Quotes' }
  ],
  Opportunity: [
    { object: 'Account', field: 'AccountId', label: 'Account', single: true },
    { object: 'Quote', field: 'OpportunityId', label: 'Quotes' }
  ],
  Case: [
    { object: 'Account', field: 'AccountId', label: 'Account', single: true },
    { object: 'Contact', field: 'ContactId', label: 'Contact', single: true }
  ],
  Contract: [
    { object: 'Account', field: 'AccountId', label: 'Account', single: true }
  ],
  Product2: [
    { object: 'Inventory__c', field: 'Product__c', label: 'Inventory Records' }
  ],
  Order: [
    { object: 'Account', field: 'AccountId', label: 'Account', single: true },
    { object: 'Shipment__c', field: 'Order__c', label: 'Shipments' },
    { object: 'Invoice__c', field: 'Order__c', label: 'Invoices' }
  ],
  Quote: [
    { object: 'Opportunity', field: 'OpportunityId', label: 'Opportunity', single: true },
    { object: 'Account', field: 'AccountId', label: 'Account', single: true }
  ],
  Asset: [
    { object: 'Product2', field: 'Product2Id', label: 'Product', single: true },
    { object: 'Account', field: 'AccountId', label: 'Account', single: true }
  ],
  WorkOrder: [
    { object: 'Account', field: 'AccountId', label: 'Account', single: true },
    { object: 'Asset', field: 'AssetId', label: 'Asset', single: true }
  ],
  Invoice__c: [
    { object: 'Order', field: 'Order__c', label: 'Order', single: true },
    { object: 'Account', field: 'Account__c', label: 'Account', single: true },
    { object: 'Payment__c', field: 'Invoice__c', label: 'Payments' }
  ],
  Shipment__c: [
    { object: 'Order', field: 'Order__c', label: 'Order', single: true }
  ],
  Inventory__c: [
    { object: 'Product2', field: 'Product__c', label: 'Product', single: true }
  ],
  Payment__c: [
    { object: 'Invoice__c', field: 'Invoice__c', label: 'Invoice', single: true }
  ]
};

// Form configurations with comprehensive fields
export const formConfigs = {
  Account: [
    { name: 'Name', label: 'Account Name', required: true },
    { name: 'Type', label: 'Type', type: 'select', options: ['Prospect', 'Customer - Direct', 'Customer - Channel', 'Partner'] },
    { name: 'Industry', label: 'Industry', type: 'select', options: ['Agriculture', 'Banking', 'Biotechnology', 'Chemicals', 'Technology', 'Retail', 'Healthcare', 'Manufacturing', 'Other'] },
    { name: 'Phone', label: 'Phone', type: 'tel' },
    { name: 'Website', label: 'Website', type: 'url' },
    { name: 'BillingStreet', label: 'Billing Street' },
    { name: 'BillingCity', label: 'Billing City' },
    { name: 'BillingState', label: 'Billing State' },
    { name: 'Description', label: 'Description' }
  ],
  Contact: [
    { name: 'FirstName', label: 'First Name' },
    { name: 'LastName', label: 'Last Name', required: true },
    { name: 'Title', label: 'Title' },
    { name: 'Email', label: 'Email', type: 'email' },
    { name: 'Phone', label: 'Phone', type: 'tel' },
    { name: 'AccountId', label: 'Account', lookup: 'Account' },
    { name: 'Department', label: 'Department' },
    { name: 'MailingCity', label: 'City' },
    { name: 'MailingState', label: 'State' }
  ],
  Lead: [
    { name: 'FirstName', label: 'First Name' },
    { name: 'LastName', label: 'Last Name', required: true },
    { name: 'Company', label: 'Company', required: true },
    { name: 'Email', label: 'Email', type: 'email' },
    { name: 'Phone', label: 'Phone', type: 'tel' },
    { name: 'Status', label: 'Status', type: 'select', options: ['Open - Not Contacted', 'Working - Contacted', 'Closed - Converted', 'Closed - Not Converted'], required: true },
    { name: 'Industry', label: 'Industry', type: 'select', options: ['Agriculture', 'Banking', 'Technology', 'Retail', 'Healthcare', 'Other'] }
  ],
  Opportunity: [
    { name: 'Name', label: 'Opportunity Name', required: true },
    { name: 'AccountId', label: 'Account', lookup: 'Account', required: true },
    { name: 'Amount', label: 'Amount', type: 'number' },
    { name: 'CloseDate', label: 'Close Date', type: 'date', required: true },
    { name: 'StageName', label: 'Stage', required: true, type: 'select', options: ['Prospecting', 'Qualification', 'Needs Analysis', 'Proposal/Price Quote', 'Negotiation/Review', 'Closed Won', 'Closed Lost'] },
    { name: 'Probability', label: 'Probability (%)', type: 'number' },
    { name: 'Type', label: 'Type', type: 'select', options: ['New Customer', 'Existing Customer - Upgrade', 'Existing Customer - Replacement'] }
  ],
  Case: [
    { name: 'Subject', label: 'Subject', required: true },
    { name: 'Status', label: 'Status', type: 'select', options: ['New', 'Working', 'Escalated', 'Closed'], required: true },
    { name: 'Priority', label: 'Priority', type: 'select', options: ['Low', 'Medium', 'High', 'Critical'], required: true },
    { name: 'Type', label: 'Type', type: 'select', options: ['Question', 'Problem', 'Feature Request'] },
    { name: 'Origin', label: 'Origin', type: 'select', options: ['Phone', 'Email', 'Web'] },
    { name: 'AccountId', label: 'Account', lookup: 'Account' },
    { name: 'ContactId', label: 'Contact', lookup: 'Contact' },
    { name: 'Description', label: 'Description' }
  ],
  Contract: [
    { name: 'AccountId', label: 'Account', lookup: 'Account', required: true },
    { name: 'Status', label: 'Status', type: 'select', options: ['Draft', 'In Approval', 'Activated', 'Expired'] },
    { name: 'StartDate', label: 'Start Date', type: 'date', required: true },
    { name: 'ContractTerm', label: 'Term (months)', type: 'number', required: true }
  ],
  Product2: [
    { name: 'Name', label: 'Product Name', required: true },
    { name: 'ProductCode', label: 'Product Code' },
    { name: 'Family', label: 'Family', type: 'select', options: ['Hardware', 'Software', 'Consulting', 'Support'] },
    { name: 'IsActive', label: 'Active', type: 'checkbox' },
    { name: 'Description', label: 'Description' }
  ],
  Order: [
    { name: 'AccountId', label: 'Account', lookup: 'Account', required: true },
    { name: 'EffectiveDate', label: 'Order Date', type: 'date', required: true },
    { name: 'Status', label: 'Status', type: 'select', options: ['Draft', 'Activated', 'Shipped', 'Delivered'] },
    { name: 'Type', label: 'Type', type: 'select', options: ['New', 'Renewal'] },
    { name: 'BillingCity', label: 'Billing City' },
    { name: 'ShippingCity', label: 'Shipping City' }
  ],
  Quote: [
    { name: 'Name', label: 'Quote Name', required: true },
    { name: 'OpportunityId', label: 'Opportunity', lookup: 'Opportunity', required: true },
    { name: 'AccountId', label: 'Account', lookup: 'Account' },
    { name: 'Status', label: 'Status', type: 'select', options: ['Draft', 'In Review', 'Approved', 'Presented', 'Accepted'] },
    { name: 'ExpirationDate', label: 'Expiration Date', type: 'date' }
  ],
  Asset: [
    { name: 'Name', label: 'Asset Name', required: true },
    { name: 'Product2Id', label: 'Product', lookup: 'Product2', required: true },
    { name: 'SerialNumber', label: 'Serial Number' },
    { name: 'Status', label: 'Status', type: 'select', options: ['Purchased', 'Shipped', 'Installed', 'Registered'] },
    { name: 'AccountId', label: 'Account', lookup: 'Account' },
    { name: 'InstallDate', label: 'Install Date', type: 'date' }
  ],
  Campaign: [
    { name: 'Name', label: 'Campaign Name', required: true },
    { name: 'Type', label: 'Type', type: 'select', options: ['Conference', 'Webinar', 'Email', 'Advertisement'] },
    { name: 'Status', label: 'Status', type: 'select', options: ['Planned', 'In Progress', 'Completed'] },
    { name: 'StartDate', label: 'Start Date', type: 'date' },
    { name: 'EndDate', label: 'End Date', type: 'date' }
  ],
  WorkOrder: [
    { name: 'Subject', label: 'Subject', required: true },
    { name: 'Status', label: 'Status', type: 'select', options: ['New', 'In Progress', 'Completed', 'Cancelled'] },
    { name: 'Priority', label: 'Priority', type: 'select', options: ['Low', 'Medium', 'High'] },
    { name: 'AccountId', label: 'Account', lookup: 'Account' },
    { name: 'AssetId', label: 'Asset', lookup: 'Asset' }
  ],
  Inventory__c: [
    { name: 'Name', label: 'Inventory Name', required: true },
    { name: 'Product__c', label: 'Product', lookup: 'Product2', required: true },
    { name: 'Warehouse_Location__c', label: 'Warehouse Location' },
    { name: 'Quantity_Available__c', label: 'Quantity Available', type: 'number' },
    { name: 'Unit_Cost__c', label: 'Unit Cost', type: 'number' }
  ],
  Shipment__c: [
    { name: 'Name', label: 'Shipment Name', required: true },
    { name: 'Order__c', label: 'Order', lookup: 'Order', required: true },
    { name: 'Tracking_Number__c', label: 'Tracking Number' },
    { name: 'Carrier__c', label: 'Carrier', type: 'select', options: ['FedEx', 'UPS', 'USPS', 'DHL'] },
    { name: 'Status__c', label: 'Status', type: 'select', options: ['Preparing', 'Shipped', 'In Transit', 'Delivered'] },
    { name: 'Shipped_Date__c', label: 'Shipped Date', type: 'date' }
  ],
  Invoice__c: [
    { name: 'Name', label: 'Invoice Name', required: true },
    { name: 'Invoice_Number__c', label: 'Invoice Number' },
    { name: 'Order__c', label: 'Order', lookup: 'Order', required: true },
    { name: 'Account__c', label: 'Account', lookup: 'Account', required: true },
    { name: 'Invoice_Date__c', label: 'Invoice Date', type: 'date', required: true },
    { name: 'Due_Date__c', label: 'Due Date', type: 'date' },
    { name: 'Status__c', label: 'Status', type: 'select', options: ['Draft', 'Sent', 'Paid', 'Overdue'] },
    { name: 'Total_Amount__c', label: 'Total Amount', type: 'number' }
  ],
  Payment__c: [
    { name: 'Name', label: 'Payment Name', required: true },
    { name: 'Invoice__c', label: 'Invoice', lookup: 'Invoice__c', required: true },
    { name: 'Payment_Date__c', label: 'Payment Date', type: 'date', required: true },
    { name: 'Amount__c', label: 'Amount', type: 'number', required: true },
    { name: 'Payment_Method__c', label: 'Payment Method', type: 'select', options: ['Credit Card', 'Check', 'Wire Transfer', 'Cash'] },
    { name: 'Status__c', label: 'Status', type: 'select', options: ['Pending', 'Completed', 'Failed'] }
  ]
};

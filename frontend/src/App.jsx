import { useState, useEffect } from "react";
import {
  Menu,
  Home,
  Building2,
  Users,
  Target,
  FileText,
  DollarSign,
  Search,
  Bell,
  Settings,
  ChevronDown,
  Plus,
  X,
  Check,
  AlertCircle,
  Loader2,
  Upload,
  Eye,
  Edit,
  Trash2,
  LogOut,
  Download,
  CheckCircle,
  XCircle,
  FileSpreadsheet,
  Package,
  CreditCard,
  Truck,
  Receipt,
  ClipboardList,
  ShoppingCart,
  TrendingUp,
  Box,
  List,
  BarChart3,
  PieChart,
  LineChart,
  TrendingDown,
  Award,
  Zap,
  Calendar,
  Filter,
  MessageSquare,
  Send,
  Bot,
  Sparkles,
  RefreshCw,
  ArrowUpDown,
  Columns,
  Sigma,
  ChevronRight,
  Save,
  Play,
  Clock,
  Share2,
  Mail,
} from "lucide-react";

const API = import.meta.env.VITE_API_URL || "http://localhost:3001/api";



// ============================================
// NAVIGATION - ALL OBJECTS INCLUDING CUSTOM
// ============================================
const navItems = [
  { id: "Home", icon: Home, label: "Home" },

  // Standard Objects
  { id: "Account", icon: Building2, label: "Accounts" },
  { id: "Contact", icon: Users, label: "Contacts" },
  { id: "Lead", icon: Target, label: "Leads" },
  { id: "Task", icon: ClipboardList, label: "Tasks" },
  { id: "CaseSC__c", icon: FileText, label: "Cases" },
  { id: "Opportunity", icon: DollarSign, label: "Opportunities" },
  { id: "Contract", icon: FileText, label: "Contracts" },
 // { id: "Product2", icon: Package, label: "Products" },
  //{ id: 'Order', icon: FileSpreadsheet, label: 'Orders' },

  // Custom Objects
  { id: "OrderSC__c", icon: ShoppingCart, label: "Orders" },
  { id: "InvoiceSC__c", icon: Receipt, label: "Invoices" },
  { id: "PaymentSC__c", icon: CreditCard, label: "Payments" },
  { id: "Inventory__c", icon: Package, label: "Inventory" },
  { id: "ShipmentSC__c", icon: Truck, label: "Shipments" },
  { id: "CRM_DealSC__c", icon: TrendingUp, label: "CRM Deals" },
  { id: "ProductSC__c", icon: Box, label: "Product Catalog" },
  { id: "Sales_LineSC__c", icon: List, label: "Sales Lines" },

  // Advanced Features
  { id: "Reports", icon: BarChart3, label: "Reports", special: true },
];

// ============================================
// FORM CONFIGS - ALL FIELDS FOR ALL OBJECTS
// ============================================
const formConfigs = {
  // Standard Objects
  Account: [
    { name: "Name", label: "Account Name", required: true },
    {
      name: "Industry",
      label: "Industry",
      type: "select",
      options: [
        "Agriculture",
        "Apparel",
        "Banking",
        "Biotechnology",
        "Chemicals",
        "Communications",
        "Construction",
        "Consulting",
        "Education",
        "Electronics",
        "Energy",
        "Engineering",
        "Entertainment",
        "Environmental",
        "Finance",
        "Food & Beverage",
        "Government",
        "Healthcare",
        "Hospitality",
        "Insurance",
        "Machinery",
        "Manufacturing",
        "Media",
        "Not For Profit",
        "Other",
        "Recreation",
        "Retail",
        "Shipping",
        "Technology",
        "Telecommunications",
        "Transportation",
        "Utilities",
      ],
    },
    { name: "Phone", label: "Phone", type: "tel" },
    {
      name: "Type",
      label: "Type",
      type: "select",
      options: ["Customer", "Partner", "Prospect", "Other"],
    },
    { name: "Website", label: "Website", type: "url" },
    { name: "BillingCity", label: "Billing City" },
    { name: "BillingState", label: "Billing State" },
  ],

  Contact: [
    { name: "FirstName", label: "First Name" },
    { name: "LastName", label: "Last Name", required: true },
    { name: "Email", label: "Email", type: "email" },
    { name: "Phone", label: "Phone", type: "tel" },
    { name: "Title", label: "Job Title" },
    { name: "Department", label: "Department" },
    { name: "AccountId", label: "Account ID" },
  ],

  Lead: [
    { name: "FirstName", label: "First Name" },
    { name: "LastName", label: "Last Name", required: true },
    { name: "Company", label: "Company", required: true },
    { name: "Email", label: "Email", type: "email" },
    { name: "Phone", label: "Phone", type: "tel" },
    {
      name: "Status",
      label: "Status",
      type: "select",
      options: ["New", "Working", "Qualified", "Unqualified"],
    },
    { name: "Industry", label: "Industry" },
  ],

  CaseSC__c: [
    { name: "Name", label: "Cases", required: true },
    { name: "Escalation_Reason__c", label: "Escalation Reason", type: "select", options: ["None", "Installation issue", "Complex functionality", "Existing problems", "Instructions not clear", "Performance", "Others"] },
    {
      name: "Status__c",
      label: "Status",
      type: "select",
      options: ["None", "New", "Working", "Escalated", "Closed", "Reopened", "Reply received", "Pending customer reply", "On Hold", "Resolved"],
    },
    {
      name: "Priority__c",
      label: "Priority",
      type: "select",
      options: ["Low", "Medium", "High"],
    },
    
     {
      name: "Origin__c",
      label: "Origin",
      type: "select",
      options: ["Phone", "Email", "Web", "Chat"],
    },
    { name: "AccountId__c", label: "Account ID" },
    { name: "ContactId__c", label: "Contact ID" },
        ,
    {
      name: "Case_Number__c",
      label: "Case Number",
    },
    {name: "Resolution_Summary__c",
      label: "Resolution Summary",
   
    },
    {
      name: "CreatedDate__c",
      label: "Created Date", 
      type: "date",
      typeAttributes: {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    }
    },
    {
      name: "SLA_Breached__c",
      label: "SLA Breached",
      type: "checkbox"
    },
     {
      name: "Risk_Flag__c",
      label: "Risk Flag",
      type: "checkbox"
    },
    {
      name: "Subject__c",
      label: "Subject",
    },
    {
      name: "ClosedDate__c",
      label: "Closed Date", 
      type: "date",
      typeAttributes: {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    }
    },

    {
      name: "Customer_Impact__c",
      label: "Customer Impact",
      type: "select",
      options: ["Critical", "Major", "Minor", "Cosmetic", "Others", ],
    },
      {name: "Description__c",
      label: "Description",
   
    },
  ],

  Opportunity: [
    { name: "Name", label: "Opportunity Name", required: true },
    { name: "AccountId", label: "Account ID", required: true },
    {
      name: "StageName",
      label: "Stage",
      required: true,
      type: "select",
      options: [
        "Prospecting",
        "Qualification",
        "Proposal",
        "Negotiation",
        "Closed Won",
        "Closed Lost",
      ],
    },
    { name: "Amount", label: "Amount", type: "number" },
    { name: "CloseDate", label: "Close Date", type: "date", required: true },
    { name: "Probability", label: "Probability %", type: "number" },
    {
      name: "Type",
      label: "Type",
      type: "select",
      options: ["New Customer", "Existing Customer", "Upgrade", "Renewal"],
    },
  ],

  Contract: [
    { name: "Name", label: "Name", required: true },
    { name: "AccountId", label: "Account ID", required: true },
    {
      name: "Status",
      label: "Status",
      type: "select",
      options: ["Draft", "In Approval Process", "Activated", "Expired"],
    },
    { name: "StartDate", label: "Start Date", type: "date", required: true },
    {
      name: "ContractTerm",
      label: "Contract Term (months)",
      type: "number",
      required: true,
    },
  ],

 /* Product2: [
    { name: "Name", label: "Product Name", required: true },
    { name: "ProductCode", label: "Product Code" },
    { name: "Family", label: "Product Family" },
    { name: "IsActive", label: "Active", type: "checkbox" },
    { name: "Description", label: "Description" },
  ], */

  Order: [
    { name: "OrderNumber", label: "Order Number" },
    { name: "AccountId", label: "Account ID", required: true },
    { name: "ContactId", label: "Contact ID" },
    {
      name: "Status",
      label: "Status",
      type: "select",
      options: ["Draft", "Activated", "Approved", "Cancelled"],
    },
    {
      name: "EffectiveDate",
      label: "Effective Date",
      type: "date",
      required: true,
    },
    { name: "ProductName__c", label: "Product Name" },
    { name: "Quantity__c", label: "Quantity", type: "number" },
    { name: "Amount__c", label: "Amount", type: "number" },
    {
      name: "ExpectedDeliveryDate__c",
      label: "Expected Delivery Date",
      type: "date",
    },
    {
      name: "ActualDeliveryDate__c",
      label: "Actual Delivery Date",
      type: "date",
    },
    {
      name: "PaymentStatus__c",
      label: "Payment Status",
      type: "select",
      options: ["Pending", "Partial", "Paid", "Overdue"],
    },
    { name: "RiskFlag__c", label: "Risk Flag", type: "checkbox" },
    { name: "DelayReason__c", label: "Delay Reason" },
    { name: "BillingCity", label: "Billing City" },
    { name: "ShippingCity", label: "Shipping City" },
  ],

  // Custom Objects
  InvoiceSC__c: [
   { name: 'Name', label: 'Invoice Name', required: true },
   { name: "Account__c", label: "Account ID", required: true },
    { name: "Invoice_Number__c", label: "Invoice Number", required: true },
    //{ name: 'Status__c', label: 'Status', type: 'select', options: ['Draft', 'Sent', 'Paid', 'Cancelled', 'Overdue'] },
    {
      name: "Amount__c",
      label: "Total Amount",
      type: "number",
      required: true,
    },
    { name: "Paid_Amount__c", label: "Amount Paid", type: "number" },
    // { name: 'Invoice_Date__c', label: 'Invoice Date', type: 'date', required: true },
    { name: "Due_Date__c", label: "Due Date", type: "date" },
    { name: "OrderSC__c", label: "Order ID" },
   
  ],

  PaymentSC__c: [
    {
      name: "Name",
      label: "Name",
      required: true,
    },
    {
      name: "Amount__c",
      label: "Amount",
      type: "Currency",
      required: true,
    },
    {
      name: "Payment_Date__c",
      label: "Payment Date",
      type: "date",
      required: true,
    },
    {
      name: "Payment_Method__c",
      label: "Payment Method",
      type: "select",
      options: ["Credit Card", "Bank Transfer", "Cash", "Check", "PayPal"],
    },
    {
      name: "Status__c",
      label: "Status",
      type: "select",
      options: ["Pending", "Completed", "Failed", "Refunded"],
    },
    { name: "InvoiceSC__c", label: "Invoice ID" },
  ],

  Inventory__c: [
    { name: "Product__c", label: "Product ID", required: true },
    {
      name: "Warehouse_Location__c",
      label: "Warehouse Location",
      required: true,
    },
    {
      name: "Quantity_Available__c",
      label: "Quantity Available",
      type: "number",
      required: true,
    },
    { name: "Unit_Cost__c", label: "Unit Cost", type: "number" },
  ],

  ShipmentSC__c: [
    { name: "Name", label: "Name", required: true },
    { name: "Shipment_Number__c", label: "Shipment Number", required: false },
    { name: "OrderSC__c", label: "Order ID", required: true },
    { name: "Shipment_Status__c",
      label: "Status",
      type: "select",
      options: ["Pending", "In Transit", "Delivered", "Cancelled"],
    },
    { name: "Shipped_Date__c", label: "Shipped Date", type: "date" },
    { name: "Estimated_Delivery_Date__c", label: "Estimated delivery Date", type: "date" },
    { name: "Actual_Delivery_Date__c", label: "Actual_Delivery_Date__c", type: "date" },
    { name: "Delay_Reason__c", label: "Delay Reason" },
  ],

  // NEW OBJECTS FROM DATA DIRECTORY

  Task: [
    { name: "Subject", label: "Subject", required: true },
    {
      name: "Status",
      label: "Status",
      type: "select",
      options: [
        "Not Started",
        "In Progress",
        "Completed",
        "Waiting",
        "Deferred",
      ],
    },
    {
      name: "Priority",
      label: "Priority",
      type: "select",
      options: ["High", "Normal", "Low"],
    },
    { name: "ActivityDate", label: "Due Date", type: "date" },
    { name: "WhoId", label: "Related To (Contact/Lead)" },
    { name: "WhatId", label: "Related To (Account/Opportunity)" },
  ],

  OrderSC__c: [
   // { name: "Name", label: "Name", required: true },
    { name: "Order_Number__c", label: "Order Number", required: true },
    { name: "Account__c", label: "Account ID", required: true },
    { name: "Contact__c", label: "Contact ID" },
    { name: "Product_Name__c", label: "Product Name" },
    { name: "Quantity__c", label: "Quantity", type: "number" },
    { name: "Order_Amount__c", label: "Order Amount", type: "number" },
    {
      name: "Status__c",
      label: "Status",
      type: "select",
      options: [
        "Draft",
        "Submitted",
        "Approved",
        "In Progress",
        "Shipped",
        "Delivered",
        "Cancelled",
      ],
    },
    {
      name: "Expected_Delivery_Date__c",
      label: "Expected Delivery Date",
      type: "date",
    },
    {
      name: "Actual_Delivery_Date__c",
      label: "Actual Delivery Date",
      type: "date",
    },
    {
      name: "Payment_Status__c",
      label: "Payment Status",
      type: "select",
      options: ["Pending", "Partial", "Paid", "Overdue"],
    },
    { name: "Risk_Flag__c", label: "Risk Flag", type: "checkbox" },
    { name: "Delay_Reason__c", label: "Delay Reason" },
  ],

  CRM_DealSC__c: [
    { name: "Name", label: "Deal Name", required: true },
    { name: "Account__c", label: "Account ID", required: true },
    { name: "Amount__c", label: "Amount", type: "number" },
    {
      name: "Stage__c",
      label: "Stage",
      type: "select",
      options: [
        "Prospecting",
        "Qualification",
        "Needs Analysis",
        "Value Proposition",
        "Proposal",
        "Negotiation",
        "Closed Won",
        "Closed Lost",
      ],
    },
    { name: "Close_Date__c", label: "Close Date", type: "date" },
    { name: "Owner__c", label: "Owner ID" },
    { name: "Source_System__c", label: "Source System" },
  ],

  ProductSC__c: [
    { name: "Name", label: "Product Name", required: true },
    { name: "Product_Code__c", label: "Product Code", required: true },
    { name: "Category__c", label: "Category" },
    { name: "Is_Active__c", label: "Active", type: "checkbox" },
  ],

  Sales_LineSC__c: [
    { name: "Name", label: "Name", required: true },
    { name: "OrderSC__c", label: "Order ID", required: true },
    { name: "Product__c", label: "Product ID", required: true },
    { name: "Quantity__c", label: "Quantity", type: "number", required: true },
    { name: "Line_Amount__c", label: "Line Amount", type: "number" },
    { name: "Sale_Date__c", label: "Sale Date", type: "date" },
  ],
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("Home");
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({});
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchingRecords, setFetchingRecords] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user));
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (activeTab !== "Home" && isAuthenticated) fetchRecords();
  }, [activeTab, isAuthenticated]);

  const fetchRecords = async () => {
    setFetchingRecords(true);
    try {
      const res = await fetch(`${API}/${activeTab}`);
      const data = await res.json();
      if (data.success) {
        console.log(data.records);
        setRecords(data.records);
        console.log(`✅ Loaded ${data.records.length} ${activeTab} records`);
      }
    } catch (err) {
      setToast({ message: "Failed to fetch records", type: "error" });
    } finally {
      setFetchingRecords(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/${activeTab}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setToast({
          message: `${activeTab} created successfully!`,
          type: "success",
        });
        setFormData({});
        setShowForm(false);
        fetchRecords();
      } else {
        setToast({
          message: data.error || "Failed to create record",
          type: "error",
        });
      }
    } catch (err) {
      setToast({ message: err.message || "An error occurred", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("currentUser");
    setActiveTab("Home");
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} setToast={setToast} />;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#020617",
        color: "#e2e8f0",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <style>{`
        * { box-sizing: border-box; }
        @keyframes slideIn { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-slide { animation: slideIn 0.3s ease; }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-fade { animation: fadeIn 0.3s ease; }
        button:hover { opacity: 0.9; }
        input:focus, select:focus { outline: 2px solid #8b5cf6; outline-offset: 2px; }
        .table-row:hover { background-color: rgba(30, 41, 59, 0.5); }
      `}</style>

      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
      {showImportModal && (
        <ImportModal
          activeTab={activeTab}
          onClose={() => setShowImportModal(false)}
          onSuccess={() => {
            setShowImportModal(false);
            fetchRecords();
            setToast({
              message: "Import completed successfully!",
              type: "success",
            });
          }}
          setToast={setToast}
        />
      )}
      {showChatbot && (
        <SlavoChatbot
          onClose={() => setShowChatbot(false)}
          setToast={setToast}
        />
      )}

      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentUser={currentUser}
        onLogout={handleLogout}
      />
      <Sidebar
        sidebarOpen={sidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setFormData={setFormData}
        setShowForm={setShowForm}
      />

      {/* Floating Chatbot Button */}
      {!showChatbot && (
        <button
          onClick={() => setShowChatbot(true)}
          style={{
            position: "fixed",
            bottom: "32px",
            right: "32px",
            width: "64px",
            height: "64px",
            background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
            border: "none",
            borderRadius: "50%",
            boxShadow:
              "0 8px 24px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 40,
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow =
              "0 12px 32px rgba(139, 92, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 8px 24px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)";
          }}
        >
          <Bot size={32} color="#fff" />
        </button>
      )}

      <main
        style={{
          paddingTop: "80px",
          marginLeft: sidebarOpen ? "256px" : "80px",
          transition: "margin-left 0.3s",
        }}
      >
        <div style={{ padding: "32px" }}>
          {activeTab === "Home" ? (
            <DashboardView
              records={records}
              setShowImportModal={setShowImportModal}
              setToast={setToast}
            />
          ) : activeTab === "Reports" ? (
            <AdvancedReportsView setToast={setToast} />
          ) : (
            <ObjectView
              objectName={activeTab}
              records={records}
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              loading={loading}
              fetchingRecords={fetchingRecords}
              showForm={showForm}
              setShowForm={setShowForm}
              setShowImportModal={setShowImportModal}
              fetchRecords={fetchRecords}
              setToast={setToast}
            />
          )}
        </div>
      </main>
    </div>
  );
}

// ============================================
// ADVANCED REPORTS VIEW
// ============================================
function AdvancedReportsView({ setToast }) {
  const [activeTab, setActiveTab] = useState("builder");
  const [savedReports, setSavedReports] = useState([]);
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Report Builder State
  const [reportConfig, setReportConfig] = useState({
    name: "",
    object: "Account",
    columns: [],
    filters: [],
    groupBy: null,
    sortBy: null,
    sortOrder: "asc",
    chartType: "table",
    dateRange: "all",
  });

  useEffect(() => {
    loadSavedReports();
  }, []);

  const loadSavedReports = () => {
    const saved = JSON.parse(localStorage.getItem("savedReports") || "[]");
    setSavedReports(saved);
  };

  const saveReport = () => {
    if (!reportConfig.name) {
      setToast({ message: "Please enter a report name", type: "error" });
      return;
    }

    const newReport = {
      ...reportConfig,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      createdBy: "Current User",
    };

    const updated = [...savedReports, newReport];
    localStorage.setItem("savedReports", JSON.stringify(updated));
    setSavedReports(updated);
    setToast({ message: "Report saved successfully!", type: "success" });
  };

  const runReport = async (config = reportConfig) => {
    setLoading(true);
    try {
      // Fetch data from API
      const res = await fetch(`${API}/${config.object}`);
      const data = await res.json();

      if (!data.success) {
        throw new Error("Failed to fetch data");
      }

      let records = data.records;

      // Apply filters
      if (config.filters.length > 0) {
        records = records.filter((record) => {
          return config.filters.every((filter) => {
            const value = record[filter.field];
            const filterValue = filter.value;

            switch (filter.operator) {
              case "equals":
                return value == filterValue;
              case "notEquals":
                return value != filterValue;
              case "contains":
                return String(value || "")
                  .toLowerCase()
                  .includes(String(filterValue).toLowerCase());
              case "greaterThan":
                return Number(value) > Number(filterValue);
              case "lessThan":
                return Number(value) < Number(filterValue);
              case "startsWith":
                return String(value || "")
                  .toLowerCase()
                  .startsWith(String(filterValue).toLowerCase());
              default:
                return true;
            }
          });
        });
      }

      // Apply date range
      if (config.dateRange !== "all") {
        const now = new Date();
        const cutoff = new Date();

        switch (config.dateRange) {
          case "today":
            cutoff.setHours(0, 0, 0, 0);
            break;
          case "week":
            cutoff.setDate(now.getDate() - 7);
            break;
          case "month":
            cutoff.setMonth(now.getMonth() - 1);
            break;
          case "quarter":
            cutoff.setMonth(now.getMonth() - 3);
            break;
          case "year":
            cutoff.setFullYear(now.getFullYear() - 1);
            break;
        }

        records = records.filter((r) => new Date(r.CreatedDate) >= cutoff);
      }

      // Apply sorting
      if (config.sortBy) {
        records.sort((a, b) => {
          const aVal = a[config.sortBy];
          const bVal = b[config.sortBy];
          const order = config.sortOrder === "asc" ? 1 : -1;

          if (typeof aVal === "string") {
            return aVal.localeCompare(bVal) * order;
          }
          return (aVal - bVal) * order;
        });
      }

      // Apply grouping
      let processedData = records;
      if (config.groupBy) {
        const grouped = {};
        records.forEach((record) => {
          const key = record[config.groupBy] || "Unknown";
          if (!grouped[key]) {
            grouped[key] = [];
          }
          grouped[key].push(record);
        });
        processedData = grouped;
      }

      setReportData({
        records: processedData,
        totalRecords: records.length,
        config,
      });
    } catch (error) {
      setToast({
        message: "Failed to run report: " + error.message,
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteReport = (reportId) => {
    if (confirm("Delete this report?")) {
      const updated = savedReports.filter((r) => r.id !== reportId);
      localStorage.setItem("savedReports", JSON.stringify(updated));
      setSavedReports(updated);
      setToast({ message: "Report deleted", type: "success" });
    }
  };

  const exportReport = () => {
    if (!reportData) {
      setToast({ message: "Run the report first", type: "error" });
      return;
    }

    const records = Array.isArray(reportData.records)
      ? reportData.records
      : Object.values(reportData.records).flat();
    const columns =
      reportConfig.columns.length > 0
        ? reportConfig.columns
        : Object.keys(records[0] || {});

    let csv = columns.join(",") + "\n";
    records.forEach((record) => {
      const row = columns.map((col) => {
        const value = record[col];
        if (value === null || value === undefined) return "";
        const strValue = String(value).replace(/"/g, '""');
        return strValue.includes(",") ? `"${strValue}"` : strValue;
      });
      csv += row.join(",") + "\n";
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${reportConfig.name || "report"}-${
      new Date().toISOString().split("T")[0]
    }.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    setToast({ message: "Report exported successfully!", type: "success" });
  };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "32px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "8px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(139, 92, 246, 0.4)",
            }}
          >
            <BarChart3 size={24} color="#fff" />
          </div>
          <div>
            <h1
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#fff",
                margin: 0,
              }}
            >
              Advanced Reports
            </h1>
            <p style={{ color: "#94a3b8", margin: 0 }}>
              Build custom reports with filters, grouping, and charts
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "24px",
          borderBottom: "1px solid rgba(51, 65, 85, 0.5)",
          paddingBottom: "12px",
        }}
      >
        <TabButton
          active={activeTab === "builder"}
          onClick={() => setActiveTab("builder")}
          icon={Columns}
          label="Report Builder"
        />
        <TabButton
          active={activeTab === "saved"}
          onClick={() => setActiveTab("saved")}
          icon={Save}
          label={`Saved Reports (${savedReports.length})`}
        />
        <TabButton
          active={activeTab === "scheduled"}
          onClick={() => setActiveTab("scheduled")}
          icon={Clock}
          label="Scheduled"
        />
      </div>

      {/* Content */}
      {activeTab === "builder" && (
        <ReportBuilder
          config={reportConfig}
          setConfig={setReportConfig}
          onRun={runReport}
          onSave={saveReport}
          onExport={exportReport}
          loading={loading}
          reportData={reportData}
        />
      )}

      {activeTab === "saved" && (
        <SavedReports
          reports={savedReports}
          onRun={(config) => {
            setReportConfig(config);
            runReport(config);
            setActiveTab("builder");
          }}
          onDelete={deleteReport}
        />
      )}

      {activeTab === "scheduled" && <ScheduledReports />}
    </div>
  );
}

// Tab Button Component
function TabButton({ active, onClick, icon: Icon, label }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 20px",
        background: active ? "rgba(139, 92, 246, 0.2)" : "transparent",
        border: active
          ? "1px solid rgba(139, 92, 246, 0.4)"
          : "1px solid transparent",
        borderRadius: "8px",
        color: active ? "#fff" : "#94a3b8",
        fontSize: "14px",
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.2s",
      }}
    >
      <Icon size={18} />
      {label}
    </button>
  );
}

// Report Builder Component
function ReportBuilder({
  config,
  setConfig,
  onRun,
  onSave,
  onExport,
  loading,
  reportData,
}) {
  const [availableFields, setAvailableFields] = useState([]);
  const [showAddFilter, setShowAddFilter] = useState(false);

  const objects = [
    { value: "Account", label: "Accounts" },
    { value: "Contact", label: "Contacts" },
    { value: "Lead", label: "Leads" },
    { value: "Opportunity", label: "Opportunities" },
    { value: "Case", label: "Cases" },
    { value: "Contract", label: "Contracts" },
  ];

  const fieldsByObject = {
    Account: [
      "Id",
      "Name",
      "Industry",
      "Phone",
      "AnnualRevenue",
      "CreatedDate",
    ],
    Contact: ["Id", "FirstName", "LastName", "Email", "Phone", "CreatedDate"],
    Lead: [
      "Id",
      "FirstName",
      "LastName",
      "Company",
      "Email",
      "Status",
      "CreatedDate",
    ],
    Opportunity: [
      "Id",
      "Name",
      "StageName",
      "Amount",
      "CloseDate",
      "CreatedDate",
    ],
    Case: ["Id", "Subject", "Status", "Priority", "CreatedDate"],
    Contract: ["Id", "Status", "StartDate", "ContractTerm", "CreatedDate"],
  };

  useEffect(() => {
    setAvailableFields(fieldsByObject[config.object] || []);
    setConfig({ ...config, columns: [] });
  }, [config.object]);

  const addColumn = (field) => {
    if (!config.columns.includes(field)) {
      setConfig({ ...config, columns: [...config.columns, field] });
    }
  };

  const removeColumn = (field) => {
    setConfig({
      ...config,
      columns: config.columns.filter((c) => c !== field),
    });
  };

  const addFilter = (filter) => {
    setConfig({ ...config, filters: [...config.filters, filter] });
    setShowAddFilter(false);
  };

  const removeFilter = (index) => {
    setConfig({
      ...config,
      filters: config.filters.filter((_, i) => i !== index),
    });
  };

  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "400px 1fr", gap: "24px" }}
    >
      {/* Configuration Panel */}
      <div
        style={{
          backgroundColor: "rgba(15, 23, 42, 0.5)",
          border: "1px solid rgba(51, 65, 85, 0.5)",
          borderRadius: "16px",
          padding: "24px",
          height: "fit-content",
          position: "sticky",
          top: "96px",
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          Report Configuration
        </h3>

        {/* Report Name */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontSize: "13px",
              fontWeight: 600,
              color: "#e2e8f0",
              marginBottom: "8px",
            }}
          >
            Report Name
          </label>
          <input
            type="text"
            value={config.name}
            onChange={(e) => setConfig({ ...config, name: e.target.value })}
            placeholder="My Custom Report"
            style={{
              width: "100%",
              padding: "10px 14px",
              backgroundColor: "rgba(30, 41, 59, 0.5)",
              border: "1px solid rgba(51, 65, 85, 0.5)",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "14px",
            }}
          />
        </div>

        {/* Object Selection */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontSize: "13px",
              fontWeight: 600,
              color: "#e2e8f0",
              marginBottom: "8px",
            }}
          >
            Object
          </label>
          <select
            value={config.object}
            onChange={(e) => setConfig({ ...config, object: e.target.value })}
            style={{
              width: "100%",
              padding: "10px 14px",
              backgroundColor: "rgba(30, 41, 59, 0.5)",
              border: "1px solid rgba(51, 65, 85, 0.5)",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "14px",
            }}
          >
            {objects.map((obj) => (
              <option key={obj.value} value={obj.value}>
                {obj.label}
              </option>
            ))}
          </select>
        </div>

        {/* Columns */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontSize: "13px",
              fontWeight: 600,
              color: "#e2e8f0",
              marginBottom: "8px",
            }}
          >
            Columns to Display
          </label>
          <div style={{ marginBottom: "8px" }}>
            <select
              onChange={(e) => {
                addColumn(e.target.value);
                e.target.value = "";
              }}
              style={{
                width: "100%",
                padding: "10px 14px",
                backgroundColor: "rgba(30, 41, 59, 0.5)",
                border: "1px solid rgba(51, 65, 85, 0.5)",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "14px",
              }}
            >
              <option value="">+ Add Column</option>
              {availableFields
                .filter((f) => !config.columns.includes(f))
                .map((field) => (
                  <option key={field} value={field}>
                    {field}
                  </option>
                ))}
            </select>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {config.columns.map((col) => (
              <div
                key={col}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "rgba(139, 92, 246, 0.2)",
                  border: "1px solid rgba(139, 92, 246, 0.4)",
                  borderRadius: "6px",
                  fontSize: "12px",
                  color: "#e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {col}
                <X
                  size={14}
                  onClick={() => removeColumn(col)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <label
              style={{ fontSize: "13px", fontWeight: 600, color: "#e2e8f0" }}
            >
              Filters
            </label>
            <button
              onClick={() => setShowAddFilter(!showAddFilter)}
              style={{
                padding: "4px 10px",
                backgroundColor: "rgba(139, 92, 246, 0.2)",
                border: "1px solid rgba(139, 92, 246, 0.4)",
                borderRadius: "6px",
                color: "#e2e8f0",
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              + Add Filter
            </button>
          </div>

          {showAddFilter && (
            <FilterBuilder
              availableFields={availableFields}
              onAdd={addFilter}
              onCancel={() => setShowAddFilter(false)}
            />
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              marginTop: "8px",
            }}
          >
            {config.filters.map((filter, idx) => (
              <div
                key={idx}
                style={{
                  padding: "8px 12px",
                  backgroundColor: "rgba(30, 41, 59, 0.5)",
                  border: "1px solid rgba(51, 65, 85, 0.5)",
                  borderRadius: "6px",
                  fontSize: "12px",
                  color: "#e2e8f0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>
                  {filter.field} {filter.operator} "{filter.value}"
                </span>
                <X
                  size={14}
                  onClick={() => removeFilter(idx)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Date Range */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontSize: "13px",
              fontWeight: 600,
              color: "#e2e8f0",
              marginBottom: "8px",
            }}
          >
            Date Range
          </label>
          <select
            value={config.dateRange}
            onChange={(e) =>
              setConfig({ ...config, dateRange: e.target.value })
            }
            style={{
              width: "100%",
              padding: "10px 14px",
              backgroundColor: "rgba(30, 41, 59, 0.5)",
              border: "1px solid rgba(51, 65, 85, 0.5)",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "14px",
            }}
          >
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="week">Last 7 Days</option>
            <option value="month">Last 30 Days</option>
            <option value="quarter">Last 90 Days</option>
            <option value="year">Last Year</option>
          </select>
        </div>

        {/* Group By */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontSize: "13px",
              fontWeight: 600,
              color: "#e2e8f0",
              marginBottom: "8px",
            }}
          >
            Group By (Optional)
          </label>
          <select
            value={config.groupBy || ""}
            onChange={(e) =>
              setConfig({ ...config, groupBy: e.target.value || null })
            }
            style={{
              width: "100%",
              padding: "10px 14px",
              backgroundColor: "rgba(30, 41, 59, 0.5)",
              border: "1px solid rgba(51, 65, 85, 0.5)",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "14px",
            }}
          >
            <option value="">None</option>
            {availableFields.map((field) => (
              <option key={field} value={field}>
                {field}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontSize: "13px",
              fontWeight: 600,
              color: "#e2e8f0",
              marginBottom: "8px",
            }}
          >
            Sort By
          </label>
          <div style={{ display: "flex", gap: "8px" }}>
            <select
              value={config.sortBy || ""}
              onChange={(e) =>
                setConfig({ ...config, sortBy: e.target.value || null })
              }
              style={{
                flex: 1,
                padding: "10px 14px",
                backgroundColor: "rgba(30, 41, 59, 0.5)",
                border: "1px solid rgba(51, 65, 85, 0.5)",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "14px",
              }}
            >
              <option value="">None</option>
              {availableFields.map((field) => (
                <option key={field} value={field}>
                  {field}
                </option>
              ))}
            </select>
            <select
              value={config.sortOrder}
              onChange={(e) =>
                setConfig({ ...config, sortOrder: e.target.value })
              }
              style={{
                width: "100px",
                padding: "10px 14px",
                backgroundColor: "rgba(30, 41, 59, 0.5)",
                border: "1px solid rgba(51, 65, 85, 0.5)",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "14px",
              }}
            >
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </select>
          </div>
        </div>

        {/* Chart Type */}
        <div style={{ marginBottom: "24px" }}>
          <label
            style={{
              display: "block",
              fontSize: "13px",
              fontWeight: 600,
              color: "#e2e8f0",
              marginBottom: "8px",
            }}
          >
            Chart Type
          </label>
          <select
            value={config.chartType}
            onChange={(e) =>
              setConfig({ ...config, chartType: e.target.value })
            }
            style={{
              width: "100%",
              padding: "10px 14px",
              backgroundColor: "rgba(30, 41, 59, 0.5)",
              border: "1px solid rgba(51, 65, 85, 0.5)",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "14px",
            }}
          >
            <option value="table">Table</option>
            <option value="bar">Bar Chart</option>
            <option value="pie">Pie Chart</option>
            <option value="line">Line Chart</option>
          </select>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button
            onClick={() => onRun()}
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {loading ? (
              <>
                <Loader2 className="animate-pulse" size={16} /> Running...
              </>
            ) : (
              <>
                <Play size={16} /> Run Report
              </>
            )}
          </button>
          <button
            onClick={onSave}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "rgba(16, 185, 129, 0.2)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              borderRadius: "8px",
              color: "#10b981",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <Save size={16} /> Save Report
          </button>
          {reportData && (
            <button
              onClick={onExport}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                border: "1px solid rgba(59, 130, 246, 0.4)",
                borderRadius: "8px",
                color: "#3b82f6",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <Download size={16} /> Export CSV
            </button>
          )}
        </div>
      </div>

      {/* Results Panel */}
      <div>
        {loading ? (
          <div
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.5)",
              border: "1px solid rgba(51, 65, 85, 0.5)",
              borderRadius: "16px",
              padding: "48px",
              textAlign: "center",
            }}
          >
            <Loader2
              className="animate-pulse"
              size={48}
              color="#8b5cf6"
              style={{ margin: "0 auto 16px" }}
            />
            <p style={{ color: "#94a3b8", margin: 0 }}>Running report...</p>
          </div>
        ) : reportData ? (
          <ReportResults data={reportData} />
        ) : (
          <div
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.5)",
              border: "1px solid rgba(51, 65, 85, 0.5)",
              borderRadius: "16px",
              padding: "48px",
              textAlign: "center",
            }}
          >
            <BarChart3
              size={48}
              color="#475569"
              style={{ margin: "0 auto 16px" }}
            />
            <p
              style={{ color: "#94a3b8", margin: "0 0 4px 0", fontWeight: 500 }}
            >
              No report data yet
            </p>
            <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>
              Configure your report and click "Run Report" to see results
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Filter Builder Component
function FilterBuilder({ availableFields, onAdd, onCancel }) {
  const [filter, setFilter] = useState({
    field: "",
    operator: "equals",
    value: "",
  });

  const operators = [
    { value: "equals", label: "Equals" },
    { value: "notEquals", label: "Not Equals" },
    { value: "contains", label: "Contains" },
    { value: "startsWith", label: "Starts With" },
    { value: "greaterThan", label: "Greater Than" },
    { value: "lessThan", label: "Less Than" },
  ];

  return (
    <div
      style={{
        padding: "12px",
        backgroundColor: "rgba(30, 41, 59, 0.5)",
        border: "1px solid rgba(51, 65, 85, 0.5)",
        borderRadius: "8px",
        marginBottom: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginBottom: "8px",
        }}
      >
        <select
          value={filter.field}
          onChange={(e) => setFilter({ ...filter, field: e.target.value })}
          style={{
            width: "100%",
            padding: "8px 12px",
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            border: "1px solid rgba(51, 65, 85, 0.5)",
            borderRadius: "6px",
            color: "#fff",
            fontSize: "13px",
          }}
        >
          <option value="">Select Field</option>
          {availableFields.map((field) => (
            <option key={field} value={field}>
              {field}
            </option>
          ))}
        </select>
        <select
          value={filter.operator}
          onChange={(e) => setFilter({ ...filter, operator: e.target.value })}
          style={{
            width: "100%",
            padding: "8px 12px",
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            border: "1px solid rgba(51, 65, 85, 0.5)",
            borderRadius: "6px",
            color: "#fff",
            fontSize: "13px",
          }}
        >
          {operators.map((op) => (
            <option key={op.value} value={op.value}>
              {op.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={filter.value}
          onChange={(e) => setFilter({ ...filter, value: e.target.value })}
          placeholder="Value"
          style={{
            width: "100%",
            padding: "8px 12px",
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            border: "1px solid rgba(51, 65, 85, 0.5)",
            borderRadius: "6px",
            color: "#fff",
            fontSize: "13px",
          }}
        />
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={() => filter.field && filter.value && onAdd(filter)}
          disabled={!filter.field || !filter.value}
          style={{
            flex: 1,
            padding: "6px 12px",
            background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
            border: "none",
            borderRadius: "6px",
            color: "#fff",
            fontSize: "12px",
            fontWeight: 600,
            cursor: !filter.field || !filter.value ? "not-allowed" : "pointer",
            opacity: !filter.field || !filter.value ? 0.5 : 1,
          }}
        >
          Add
        </button>
        <button
          onClick={onCancel}
          style={{
            flex: 1,
            padding: "6px 12px",
            backgroundColor: "rgba(30, 41, 59, 0.5)",
            border: "1px solid rgba(51, 65, 85, 0.5)",
            borderRadius: "6px",
            color: "#e2e8f0",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

// Report Results Component
function ReportResults({ data }) {
  const { records, totalRecords, config } = data;
  const displayRecords = Array.isArray(records)
    ? records
    : Object.values(records).flat();
  const columns =
    config.columns.length > 0
      ? config.columns
      : Object.keys(displayRecords[0] || {});

  if (config.chartType === "table") {
    return (
      <div
        style={{
          backgroundColor: "rgba(15, 23, 42, 0.5)",
          border: "1px solid rgba(51, 65, 85, 0.5)",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid rgba(51, 65, 85, 0.5)",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 4px 0",
            }}
          >
            {config.name || "Report Results"}
          </h3>
          <p style={{ fontSize: "13px", color: "#94a3b8", margin: 0 }}>
            {totalRecords} records
          </p>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "rgba(30, 41, 59, 0.5)" }}>
                {columns.map((col, idx) => (
                  <th
                    key={idx}
                    style={{
                      padding: "14px 16px",
                      textAlign: "left",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#94a3b8",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayRecords.slice(0, 100).map((record, idx) => (
                <tr
                  key={idx}
                  style={{ borderBottom: "1px solid rgba(51, 65, 85, 0.3)" }}
                >
                  {columns.map((col, colIdx) => (
                    <td
                      key={colIdx}
                      style={{
                        padding: "12px 16px",
                        fontSize: "14px",
                        color: "#e2e8f0",
                      }}
                    >
                      {record[col] !== null && record[col] !== undefined
                        ? String(record[col])
                        : "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {displayRecords.length > 100 && (
          <div
            style={{
              padding: "16px",
              textAlign: "center",
              borderTop: "1px solid rgba(51, 65, 85, 0.5)",
              fontSize: "13px",
              color: "#94a3b8",
            }}
          >
            Showing first 100 of {displayRecords.length} records
          </div>
        )}
      </div>
    );
  }

  // Grouped data visualization
  if (config.groupBy && typeof records === "object") {
    const chartData = Object.entries(records).map(([key, values]) => ({
      label: key,
      count: values.length,
    }));

    return (
      <div
        style={{
          backgroundColor: "rgba(15, 23, 42, 0.5)",
          border: "1px solid rgba(51, 65, 85, 0.5)",
          borderRadius: "16px",
          padding: "24px",
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          {config.name || "Report Results"}
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {chartData.map((item, idx) => (
            <div
              key={idx}
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
              <div
                style={{
                  minWidth: "120px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#e2e8f0",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  flex: 1,
                  height: "32px",
                  backgroundColor: "rgba(30, 41, 59, 0.5)",
                  borderRadius: "6px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${
                      (item.count /
                        Math.max(...chartData.map((d) => d.count))) *
                      100
                    }%`,
                    background:
                      "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "12px",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  {item.count}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

// Saved Reports Component
function SavedReports({ reports, onRun, onDelete }) {
  if (reports.length === 0) {
    return (
      <div
        style={{
          backgroundColor: "rgba(15, 23, 42, 0.5)",
          border: "1px solid rgba(51, 65, 85, 0.5)",
          borderRadius: "16px",
          padding: "48px",
          textAlign: "center",
        }}
      >
        <Save size={48} color="#475569" style={{ margin: "0 auto 16px" }} />
        <p style={{ color: "#94a3b8", margin: "0 0 4px 0", fontWeight: 500 }}>
          No saved reports yet
        </p>
        <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>
          Build and save your first custom report to see it here
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "20px",
      }}
    >
      {reports.map((report) => (
        <div
          key={report.id}
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            border: "1px solid rgba(51, 65, 85, 0.5)",
            borderRadius: "16px",
            padding: "20px",
          }}
        >
          <div style={{ marginBottom: "12px" }}>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#fff",
                margin: "0 0 4px 0",
              }}
            >
              {report.name}
            </h4>
            <p style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>
              {report.object} •{" "}
              {new Date(report.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div
            style={{
              marginBottom: "16px",
              paddingBottom: "16px",
              borderBottom: "1px solid rgba(51, 65, 85, 0.5)",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                color: "#94a3b8",
                margin: "0 0 8px 0",
              }}
            >
              <strong>{report.columns.length}</strong> columns •{" "}
              <strong>{report.filters.length}</strong> filters
            </p>
            {report.groupBy && (
              <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
                Grouped by: <strong>{report.groupBy}</strong>
              </p>
            )}
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => onRun(report)}
              style={{
                flex: 1,
                padding: "8px 12px",
                background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              <Play size={14} /> Run
            </button>
            <button
              onClick={() => onDelete(report.id)}
              style={{
                padding: "8px 12px",
                backgroundColor: "rgba(239, 68, 68, 0.2)",
                border: "1px solid rgba(239, 68, 68, 0.4)",
                borderRadius: "8px",
                color: "#ef4444",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              <Trash2 size={14} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// Scheduled Reports Component
function ScheduledReports() {
  return (
    <div
      style={{
        backgroundColor: "rgba(15, 23, 42, 0.5)",
        border: "1px solid rgba(51, 65, 85, 0.5)",
        borderRadius: "16px",
        padding: "48px",
        textAlign: "center",
      }}
    >
      <Clock size={48} color="#475569" style={{ margin: "0 auto 16px" }} />
      <p style={{ color: "#94a3b8", margin: "0 0 4px 0", fontWeight: 500 }}>
        Scheduled Reports Coming Soon
      </p>
      <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>
        Automatically run and email reports on a schedule
      </p>
    </div>
  );
}

// SLAVO AI CHATBOT COMPONENT
function SlavoChatbot({ onClose, setToast }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content:
        "👋 Hi! I'm **Slavo**, your AI-powered Salesforce assistant. I can help you:\n\n• Query your CRM data\n• Create records via natural language\n• Provide insights and analytics\n• Answer questions about your business\n\nWhat would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useState(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const processUserQuery = async (query) => {
    const lowerQuery = query.toLowerCase();

    // Query patterns
    const patterns = {
      count: /how many|count|total number of|number of/i,
      list: /show|list|get|find|display/i,
      create: /create|add|new|insert/i,
      analytics:
        /analytics|insights|report|summary|performance|win rate|conversion|revenue/i,
      top: /top|best|highest|most/i,
      search: /search for|find|look for|where/i,
    };

    try {
      // ANALYTICS QUERIES
      if (patterns.analytics.test(query)) {
        return await handleAnalyticsQuery(query);
      }

      // COUNT QUERIES
      if (patterns.count.test(query)) {
        return await handleCountQuery(query);
      }

      // TOP CUSTOMERS
      if (patterns.top.test(query) && /customer|account|client/i.test(query)) {
        return await handleTopCustomersQuery(query);
      }

      // LIST QUERIES
      if (patterns.list.test(query)) {
        return await handleListQuery(query);
      }

      // CREATE QUERIES
      if (patterns.create.test(query)) {
        return await handleCreateQuery(query);
      }

      // SEARCH QUERIES
      if (patterns.search.test(query)) {
        return await handleSearchQuery(query);
      }

      // DEFAULT: General help
      return `I understand you're asking about: "${query}"\n\nI can help you with:\n\n**📊 Analytics**\n• "Show me analytics"\n• "What's our win rate?"\n• "Revenue summary"\n\n**🔢 Counts**\n• "How many accounts do we have?"\n• "Count open opportunities"\n\n**📋 Lists**\n• "Show me recent contacts"\n• "List all leads"\n\n**🏆 Top Performers**\n• "Top 5 customers by revenue"\n\n**➕ Create Records**\n• "Create a new contact named John Doe"\n• "Add an account called Acme Corp"\n\nWhat would you like me to do?`;
    } catch (error) {
      console.error("Query processing error:", error);
      return `❌ Sorry, I encountered an error processing your request: ${error.message}\n\nPlease try rephrasing your question or ask for help.`;
    }
  };

  const handleAnalyticsQuery = async (query) => {
    setIsTyping(true);
    try {
      const [oppsRes, leadsRes, accountsRes] = await Promise.all([
        fetch(`${API}/Opportunity`),
        fetch(`${API}/Lead`),
        fetch(`${API}/Account`),
      ]);

      const [oppsData, leadsData, accountsData] = await Promise.all([
        oppsRes.json(),
        leadsRes.json(),
        accountsRes.json(),
      ]);

      const opportunities = oppsData.success ? oppsData.records : [];
      const leads = leadsData.success ? leadsData.records : [];
      const accounts = accountsData.success ? accountsData.records : [];

      const closedWon = opportunities.filter(
        (o) => o.StageName === "Closed Won"
      );
      const closedLost = opportunities.filter(
        (o) => o.StageName === "Closed Lost"
      );
      const totalClosed = closedWon.length + closedLost.length;
      const winRate =
        totalClosed > 0
          ? ((closedWon.length / totalClosed) * 100).toFixed(1)
          : 0;

      const qualified = leads.filter((l) => l.Status === "Qualified");
      const conversionRate =
        leads.length > 0
          ? ((qualified.length / leads.length) * 100).toFixed(1)
          : 0;

      const totalRevenue = closedWon.reduce(
        (sum, o) => sum + (parseFloat(o.Amount) || 0),
        0
      );
      const avgDeal =
        closedWon.length > 0 ? totalRevenue / closedWon.length : 0;

      return `📊 **Analytics Summary**\n\n**Sales Performance:**\n• Win Rate: **${winRate}%** (${
        closedWon.length
      } won / ${totalClosed} closed)\n• Total Revenue: **$${totalRevenue.toLocaleString()}**\n• Average Deal Size: **$${Math.round(
        avgDeal
      ).toLocaleString()}**\n\n**Pipeline:**\n• Active Opportunities: **${
        opportunities.filter(
          (o) => !["Closed Won", "Closed Lost"].includes(o.StageName)
        ).length
      }**\n• Total Opportunities: **${
        opportunities.length
      }**\n\n**Leads:**\n• Conversion Rate: **${conversionRate}%**\n• Total Leads: **${
        leads.length
      }**\n• Qualified Leads: **${
        qualified.length
      }**\n\n**Customers:**\n• Total Accounts: **${
        accounts.length
      }**\n\nWould you like more details on any metric?`;
    } finally {
      setIsTyping(false);
    }
  };

  const handleCountQuery = async (query) => {
    const objectMap = {
      account: "Account",
      contact: "Contact",
      lead: "Lead",
      opportunity: "Opportunity",
      case: "Case",
      contract: "Contract",
      order: "OrderSC__c",
    };

    for (const [keyword, objectName] of Object.entries(objectMap)) {
      if (query.toLowerCase().includes(keyword)) {
        const res = await fetch(`${API}/${objectName}`);
        const data = await res.json();
        const count = data.success ? data.records.length : 0;

        return `📊 You have **${count}** ${keyword}${
          count !== 1 ? "s" : ""
        } in your CRM.\n\nWould you like to see the list or get more details?`;
      }
    }

    return `I can count Accounts, Contacts, Leads, Opportunities, Cases, Contracts, or Orders.\n\nExample: "How many accounts do we have?"`;
  };

  const handleTopCustomersQuery = async (query) => {
    setIsTyping(true);
    try {
      const [accountsRes, oppsRes] = await Promise.all([
        fetch(`${API}/Account`),
        fetch(`${API}/Opportunity`),
      ]);

      const [accountsData, oppsData] = await Promise.all([
        accountsRes.json(),
        oppsRes.json(),
      ]);

      const accounts = accountsData.success ? accountsData.records : [];
      const opportunities = oppsData.success ? oppsData.records : [];

      const closedWon = opportunities.filter(
        (o) => o.StageName === "Closed Won"
      );

      const accountRevenue = {};
      closedWon.forEach((opp) => {
        const accId = opp.AccountId;
        if (accId) {
          accountRevenue[accId] =
            (accountRevenue[accId] || 0) + (parseFloat(opp.Amount) || 0);
        }
      });

      const topAccounts = Object.entries(accountRevenue)
        .map(([id, revenue]) => {
          const account = accounts.find((a) => a.Id === id);
          return {
            name: account?.Name || "Unknown",
            industry: account?.Industry || "N/A",
            revenue,
            deals: closedWon.filter((o) => o.AccountId === id).length,
          };
        })
        .sort((a, b) => b.revenue - a.revenue)
        .slice(0, 5);

      if (topAccounts.length === 0) {
        return `No customer revenue data found yet.\n\nCreate some Opportunities with StageName "Closed Won" to see top customers!`;
      }

      let response = `🏆 **Top 5 Customers by Revenue**\n\n`;
      topAccounts.forEach((acc, idx) => {
        const medal =
          idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : "🏅";
        response += `${medal} **#${idx + 1} - ${acc.name}**\n`;
        response += `   💰 Revenue: $${acc.revenue.toLocaleString()}\n`;
        response += `   📊 Deals: ${acc.deals}\n`;
        response += `   🏢 Industry: ${acc.industry}\n\n`;
      });

      return response;
    } finally {
      setIsTyping(false);
    }
  };

  const handleListQuery = async (query) => {
    const objectMap = {
      account: "Account",
      contact: "Contact",
      lead: "Lead",
      opportunity: "Opportunity",
      case: "Case",
    };

    for (const [keyword, objectName] of Object.entries(objectMap)) {
      if (query.toLowerCase().includes(keyword)) {
        const res = await fetch(`${API}/${objectName}`);
        const data = await res.json();

        if (!data.success || data.records.length === 0) {
          return `No ${keyword}s found in your CRM.`;
        }

        const records = data.records.slice(0, 5);
        let response = `📋 **Recent ${
          keyword.charAt(0).toUpperCase() + keyword.slice(1)
        }s** (showing ${records.length} of ${data.records.length}):\n\n`;

        records.forEach((record, idx) => {
          const name =
            record.Name ||
            `${record.FirstName || ""} ${record.LastName || ""}`.trim() ||
            record.Subject ||
            "Unnamed";
          response += `${idx + 1}. **${name}**\n`;

          if (record.Industry)
            response += `   🏢 Industry: ${record.Industry}\n`;
          if (record.Email) response += `   📧 Email: ${record.Email}\n`;
          if (record.Phone) response += `   📞 Phone: ${record.Phone}\n`;
          if (record.Status) response += `   📊 Status: ${record.Status}\n`;
          if (record.StageName)
            response += `   📈 Stage: ${record.StageName}\n`;
          if (record.Amount)
            response += `   💰 Amount: $${parseFloat(
              record.Amount
            ).toLocaleString()}\n`;
          response += "\n";
        });

        if (data.records.length > 5) {
          response += `\n_Showing first 5 of ${data.records.length} records_`;
        }

        return response;
      }
    }

    return `I can list Accounts, Contacts, Leads, Opportunities, or Cases.\n\nExample: "Show me recent contacts"`;
  };

  const handleCreateQuery = async (query) => {
    // Extract entity type and name
    if (/contact/i.test(query)) {
      const nameMatch = query.match(
        /(?:named|called)\s+([A-Za-z]+(?:\s+[A-Za-z]+)?)/i
      );
      const firstName = nameMatch ? nameMatch[1].split(" ")[0] : "John";
      const lastName = nameMatch ? nameMatch[1].split(" ")[1] || "Doe" : "Doe";

      return `To create a contact named **${firstName} ${lastName}**, I'll need:\n\n1. Email address\n2. Phone number (optional)\n3. Job Title (optional)\n\nPlease provide these details, or navigate to Contacts → "+ New Contact" to create manually.`;
    }

    if (/account|company/i.test(query)) {
      const nameMatch = query.match(/(?:named|called)\s+([A-Za-z0-9\s]+)/i);
      const name = nameMatch ? nameMatch[1] : "Acme Corp";

      return `To create an account named **${name}**, I'll need:\n\n1. Industry\n2. Phone number (optional)\n\nPlease provide these details, or navigate to Accounts → "+ New Account" to create manually.`;
    }

    if (/opportunity|deal/i.test(query)) {
      return `To create an opportunity, I'll need:\n\n1. Opportunity Name\n2. Account ID (which customer?)\n3. Amount\n4. Close Date\n5. Stage Name\n\nPlease provide these details, or navigate to Opportunities → "+ New Opportunity" to create manually.`;
    }

    return `I can help create:\n• Contacts\n• Accounts\n• Opportunities\n• Leads\n\nExample: "Create a new contact named Jane Smith"\n\nOr navigate to the specific section and click "+ New" to create records manually.`;
  };

  const handleSearchQuery = async (query) => {
    return `🔍 **Search Feature**\n\nTo search for specific records:\n1. Use the search bar in the header\n2. Navigate to the object (Accounts, Contacts, etc.)\n3. Scroll through the list\n\nOr ask me:\n• "Show me accounts"\n• "List recent contacts"\n• "Find opportunities"\n\nWhat would you like to find?`;
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await processUserQuery(input);

      setTimeout(() => {
        const botMessage = {
          id: messages.length + 2,
          type: "bot",
          content: response,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      }, 800);
    } catch (error) {
      const errorMessage = {
        id: messages.length + 2,
        type: "bot",
        content: `❌ Sorry, I encountered an error: ${error.message}`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      setIsTyping(false);
    }
  };

  const quickActions = [
    { label: "Show Analytics", query: "Show me analytics" },
    { label: "Top Customers", query: "Top 5 customers by revenue" },
    { label: "Count Accounts", query: "How many accounts do we have?" },
    { label: "List Opportunities", query: "Show me opportunities" },
  ];

  return (
    <div
      className="animate-fade"
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        width: "420px",
        height: "680px",
        backgroundColor: "rgba(15, 23, 42, 0.98)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(139, 92, 246, 0.5)",
        borderRadius: "24px",
        boxShadow:
          "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "20px 24px",
          borderBottom: "1px solid rgba(139, 92, 246, 0.3)",
          background:
            "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
              }}
            >
              <Bot size={28} color="#fff" />
            </div>
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 2px 0",
                }}
              >
                Slavo AI
              </h3>
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#10b981",
                    borderRadius: "50%",
                    animation: "pulse 2s infinite",
                  }}
                ></div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#10b981",
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  Online & Ready
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              padding: "8px",
              background: "rgba(30, 41, 59, 0.5)",
              border: "1px solid rgba(51, 65, 85, 0.5)",
              borderRadius: "8px",
              color: "#94a3b8",
              cursor: "pointer",
            }}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
              animation: "slideIn 0.3s ease",
            }}
          >
            {msg.type === "bot" && (
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background:
                    "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Bot size={18} color="#fff" />
              </div>
            )}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <div
                style={{
                  padding: "12px 16px",
                  backgroundColor:
                    msg.type === "bot"
                      ? "rgba(139, 92, 246, 0.1)"
                      : "rgba(59, 130, 246, 0.2)",
                  border: `1px solid ${
                    msg.type === "bot"
                      ? "rgba(139, 92, 246, 0.3)"
                      : "rgba(59, 130, 246, 0.3)"
                  }`,
                  borderRadius:
                    msg.type === "bot"
                      ? "8px 16px 16px 16px"
                      : "16px 8px 16px 16px",
                  marginLeft: msg.type === "user" ? "auto" : "0",
                  maxWidth: "85%",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    color: "#e2e8f0",
                    margin: 0,
                    whiteSpace: "pre-wrap",
                    lineHeight: "1.6",
                  }}
                >
                  {msg.content.split("**").map((part, i) =>
                    i % 2 === 0 ? (
                      part
                    ) : (
                      <strong key={i} style={{ color: "#fff" }}>
                        {part}
                      </strong>
                    )
                  )}
                </p>
              </div>
              <p
                style={{
                  fontSize: "10px",
                  color: "#64748b",
                  margin: "0 0 0 12px",
                  fontWeight: 500,
                }}
              >
                {msg.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Bot size={18} color="#fff" />
            </div>
            <div
              style={{
                padding: "12px 16px",
                backgroundColor: "rgba(139, 92, 246, 0.1)",
                border: "1px solid rgba(139, 92, 246, 0.3)",
                borderRadius: "8px 16px 16px 16px",
              }}
            >
              <div style={{ display: "flex", gap: "4px" }}>
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#8b5cf6",
                    borderRadius: "50%",
                    animation: "pulse 1s infinite",
                  }}
                ></div>
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#8b5cf6",
                    borderRadius: "50%",
                    animation: "pulse 1s infinite 0.2s",
                  }}
                ></div>
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#8b5cf6",
                    borderRadius: "50%",
                    animation: "pulse 1s infinite 0.4s",
                  }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      {messages.length === 1 && (
        <div style={{ padding: "0 20px 16px" }}>
          <p
            style={{
              fontSize: "12px",
              color: "#94a3b8",
              marginBottom: "8px",
              fontWeight: 600,
            }}
          >
            Quick Actions:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px",
            }}
          >
            {quickActions.map((action, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInput(action.query);
                  setTimeout(() => handleSendMessage(), 100);
                }}
                style={{
                  padding: "8px 12px",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  borderRadius: "8px",
                  color: "#e2e8f0",
                  fontSize: "12px",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div
        style={{
          padding: "16px 20px",
          borderTop: "1px solid rgba(139, 92, 246, 0.3)",
          background: "rgba(15, 23, 42, 0.5)",
        }}
      >
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Ask Slavo anything..."
            style={{
              flex: 1,
              padding: "12px 16px",
              backgroundColor: "rgba(30, 41, 59, 0.5)",
              border: "1px solid rgba(139, 92, 246, 0.3)",
              borderRadius: "12px",
              color: "#fff",
              fontSize: "14px",
              outline: "none",
            }}
          />
          <button
            onClick={handleSendMessage}
            disabled={!input.trim()}
            style={{
              padding: "12px 16px",
              background: input.trim()
                ? "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)"
                : "rgba(30, 41, 59, 0.5)",
              border: "none",
              borderRadius: "12px",
              cursor: input.trim() ? "pointer" : "not-allowed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Send size={18} color="#fff" />
          </button>
        </div>
        <p
          style={{ fontSize: "10px", color: "#64748b", margin: "8px 0 0 4px" }}
        >
          <Sparkles
            size={10}
            style={{ display: "inline", marginRight: "4px" }}
          />
          Powered by AI • Connected to your CRM
        </p>
      </div>
    </div>
  );
}

// Login Page Component
function LoginPage({ onLogin, setToast }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setToast({ message: "Please fill in all fields", type: "error" });
      return;
    }

    if (!email.includes("@")) {
      setToast({
        message: "Please enter a valid email address",
        type: "error",
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      onLogin({
        name: "SalesforceConnect",
        email: email,
        role: "Administrator",
      });
      setToast({ message: "Login successful!", type: "success" });
      setLoading(false);
    }, 1000);
  };

  const handleQuickDemo = () => {
    onLogin({
      name: "SalesforceConnect",
      email: "demo@zaylo.com",
      role: "Administrator",
    });
    setToast({ message: "Quick demo login successful!", type: "success" });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          backgroundColor: "rgba(15, 23, 42, 0.8)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(51, 65, 85, 0.5)",
          borderRadius: "24px",
          padding: "48px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              boxShadow: "0 0 40px rgba(139, 92, 246, 0.4)",
            }}
          >
            <span style={{ color: "#fff", fontWeight: 700, fontSize: "36px" }}>
              Z
            </span>
          </div>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 8px 0",
            }}
          >
            Welcome Back
          </h1>
          <p style={{ fontSize: "14px", color: "#94a3b8", margin: 0 }}>
            Sign in to Zaylo
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: 500,
                color: "#e2e8f0",
                marginBottom: "8px",
              }}
            >
              Email Address <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                backgroundColor: "rgba(30, 41, 59, 0.5)",
                border: "1px solid rgba(51, 65, 85, 0.5)",
                borderRadius: "12px",
                color: "#fff",
                fontSize: "14px",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: 500,
                color: "#e2e8f0",
                marginBottom: "8px",
              }}
            >
              Password <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                backgroundColor: "rgba(30, 41, 59, 0.5)",
                border: "1px solid rgba(51, 65, 85, 0.5)",
                borderRadius: "12px",
                color: "#fff",
                fontSize: "14px",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px 24px",
              background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {loading ? (
              <>
                <Loader2 className="animate-pulse" size={20} /> Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div style={{ marginTop: "20px" }}>
          <button
            onClick={handleQuickDemo}
            style={{
              width: "100%",
              padding: "12px 24px",
              backgroundColor: "rgba(30, 41, 59, 0.5)",
              color: "#e2e8f0",
              border: "1px solid rgba(51, 65, 85, 0.5)",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Quick Demo Login
          </button>
        </div>

        <div
          style={{
            marginTop: "24px",
            textAlign: "center",
            fontSize: "14px",
            color: "#64748b",
          }}
        >
          <p style={{ margin: 0 }}>Demo Mode: Use any email and password</p>
        </div>
      </div>
    </div>
  );
}

// CSV IMPORT MODAL WITH REAL FUNCTIONALITY
function ImportModal({ activeTab, onClose, onSuccess, setToast }) {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [parsedData, setParsedData] = useState(null);
  const [columnMapping, setColumnMapping] = useState({});
  const [step, setStep] = useState(1);
  const [importing, setImporting] = useState(false);
  const [importResults, setImportResults] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (selectedFile) => {
    if (!selectedFile.name.endsWith(".csv")) {
      setToast({ message: "Only CSV files are supported", type: "error" });
      return;
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      setToast({ message: "File size must be less than 10MB", type: "error" });
      return;
    }

    setFile(selectedFile);
    parseCSV(selectedFile);
  };

  const parseCSV = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;

      // Split by newline and filter out completely empty lines
      let lines = text
        .split(/\r?\n/)
        .filter((line) => line.trim() && line.replace(/,/g, "").trim());

      if (lines.length < 2) {
        setToast({
          message: "CSV file must have at least a header row and one data row",
          type: "error",
        });
        return;
      }

      // Parse first line to get potential headers
      let headerLine = lines[0];
      let headers = headerLine
        .split(",")
        .map((h) => h.trim().replace(/^"|"$/g, ""));

      // Remove empty leading/trailing columns
      while (headers.length > 0 && !headers[0]) {
        headers.shift();
        // Also shift the values in all lines
        lines = lines.map((line) => {
          const values = line.split(",");
          values.shift();
          return values.join(",");
        });
      }

      while (headers.length > 0 && !headers[headers.length - 1]) {
        headers.pop();
      }

      // Re-parse headers after trimming
      headerLine = lines[0];
      headers = headerLine
        .split(",")
        .map((h) => h.trim().replace(/^"|"$/g, ""))
        .filter((h) => h);

      if (headers.length === 0) {
        setToast({ message: "CSV file has no valid headers", type: "error" });
        return;
      }

      // Parse data rows
      const rows = [];
      for (let i = 1; i < Math.min(lines.length, 101); i++) {
        let values = lines[i]
          .split(",")
          .map((v) => v.trim().replace(/^"|"$/g, ""));

        // Remove leading empty values to match header trimming
        while (values.length > headers.length && !values[0]) {
          values.shift();
        }

        const row = {};
        headers.forEach((header, index) => {
          row[header] = values[index] || "";
        });
        rows.push(row);
      }

      // Auto-mapping
      const mapping = {};
      const fieldConfig = formConfigs[activeTab] || [];

      headers.forEach((csvHeader) => {
        const normalizedCsvHeader = csvHeader
          .toLowerCase()
          .replace(/[^a-z0-9]/g, "");
        const matchedField = fieldConfig.find((field) => {
          const normalizedFieldName = field.name
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "");
          const normalizedFieldLabel = field.label
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "");
          return (
            normalizedFieldName === normalizedCsvHeader ||
            normalizedFieldLabel === normalizedCsvHeader
          );
        });

        if (matchedField) {
          mapping[csvHeader] = matchedField.name;
        } else {
          mapping[csvHeader] = ""; // Default to skip if no match
        }
      });

      setParsedData({ headers, rows, totalRows: lines.length - 1 });
      setColumnMapping(mapping);
      setStep(2);
    };
    reader.readAsText(file);
  };

  const handleImport = async () => {
    setImporting(true);
    setStep(3);

    try {
      const records = parsedData.rows.map((row) => {
        const record = {};
        Object.keys(row).forEach((csvColumn) => {
          const salesforceField = columnMapping[csvColumn];
          if (salesforceField && row[csvColumn]) {
            record[salesforceField] = row[csvColumn];
          }
        });
        return record;
      });

      console.log(
        `📤 Sending ${records.length} records to ${API}/${activeTab}/import`
      );

      const res = await fetch(`${API}/${activeTab}/import`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ records }),
      });

      const data = await res.json();

      if (data.success) {
        setImportResults(data);
        setToast({
          message: `Successfully imported ${data.successCount} of ${data.totalRecords} records`,
          type: "success",
        });

        setTimeout(() => {
          onSuccess();
        }, 2000);
      } else {
        setToast({ message: data.error || "Import failed", type: "error" });
        setImporting(false);
        setStep(2);
      }
    } catch (err) {
      console.error("Import error:", err);
      setToast({ message: err.message || "Import failed", type: "error" });
      setImporting(false);
      setStep(2);
    }
  };

  return (
    <div
      className="animate-fade"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: step === 2 ? "800px" : "500px",
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(51, 65, 85, 0.5)",
          borderRadius: "20px",
          padding: "32px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#fff",
              margin: 0,
            }}
          >
            Import {activeTab}s {step === 2 && "- Preview & Map"}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#94a3b8",
              cursor: "pointer",
              padding: "4px",
            }}
          >
            <X size={24} />
          </button>
        </div>

        {step === 1 && (
          <>
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              style={{
                border: `2px dashed ${
                  dragActive ? "#8b5cf6" : "rgba(51, 65, 85, 0.5)"
                }`,
                borderRadius: "16px",
                padding: "40px",
                textAlign: "center",
                marginBottom: "24px",
                backgroundColor: dragActive
                  ? "rgba(139, 92, 246, 0.1)"
                  : "rgba(30, 41, 59, 0.3)",
                transition: "all 0.2s",
              }}
            >
              <Upload
                size={48}
                color={dragActive ? "#8b5cf6" : "#64748b"}
                style={{ margin: "0 auto 16px" }}
              />
              <p
                style={{
                  color: "#e2e8f0",
                  marginBottom: "8px",
                  fontWeight: 500,
                }}
              >
                {file ? file.name : "Drop your CSV file here"}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#64748b",
                  marginBottom: "16px",
                }}
              >
                or
              </p>
              <label
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  background:
                    "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                  color: "#fff",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Browse Files
                <input
                  type="file"
                  accept=".csv"
                  onChange={(e) => handleFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </label>
              <p
                style={{
                  fontSize: "12px",
                  color: "#64748b",
                  marginTop: "12px",
                  margin: "12px 0 0 0",
                }}
              >
                CSV only • Max 10MB • Up to 1000 records
              </p>
            </div>

            <button
              onClick={onClose}
              style={{
                width: "100%",
                padding: "12px 24px",
                backgroundColor: "rgba(30, 41, 59, 0.5)",
                color: "#e2e8f0",
                border: "1px solid rgba(51, 65, 85, 0.5)",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </>
        )}

        {step === 2 && parsedData && (
          <>
            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                  padding: "16px",
                  backgroundColor: "rgba(30, 41, 59, 0.5)",
                  borderRadius: "12px",
                }}
              >
                <div>
                  <p
                    style={{
                      color: "#e2e8f0",
                      fontWeight: 600,
                      margin: "0 0 4px 0",
                    }}
                  >
                    File: {file.name}
                  </p>
                  <p style={{ fontSize: "14px", color: "#94a3b8", margin: 0 }}>
                    {parsedData.totalRows} records • {parsedData.headers.length}{" "}
                    columns
                  </p>
                </div>
                <CheckCircle size={24} color="#10b981" />
              </div>

              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#e2e8f0",
                  marginBottom: "12px",
                }}
              >
                Preview (First 5 rows)
              </h3>
              <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                <table
                  style={{
                    width: "100%",
                    fontSize: "12px",
                    borderCollapse: "collapse",
                  }}
                >
                  <thead>
                    <tr style={{ backgroundColor: "rgba(30, 41, 59, 0.5)" }}>
                      {parsedData.headers.map((header, idx) => (
                        <th
                          key={idx}
                          style={{
                            padding: "8px",
                            textAlign: "left",
                            color: "#94a3b8",
                            borderBottom: "1px solid rgba(51, 65, 85, 0.5)",
                          }}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {parsedData.rows.slice(0, 5).map((row, rowIdx) => (
                      <tr
                        key={rowIdx}
                        style={{
                          borderBottom: "1px solid rgba(51, 65, 85, 0.3)",
                        }}
                      >
                        {parsedData.headers.map((header, colIdx) => (
                          <td
                            key={colIdx}
                            style={{ padding: "8px", color: "#e2e8f0" }}
                          >
                            {row[header] || "-"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#e2e8f0",
                  marginBottom: "12px",
                }}
              >
                Column Mapping
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                {parsedData.headers.map((header, idx) => (
                  <div
                    key={`mapping-${idx}-${header}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        padding: "10px",
                        backgroundColor: "rgba(30, 41, 59, 0.3)",
                        borderRadius: "8px",
                        color: "#e2e8f0",
                        fontSize: "14px",
                      }}
                    >
                      {header}
                    </div>
                    <span style={{ color: "#64748b" }}>→</span>
                    <select
                      value={columnMapping[header] || ""}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        setColumnMapping((prevMapping) => ({
                          ...prevMapping,
                          [header]: newValue,
                        }));
                      }}
                      style={{
                        flex: 1,
                        padding: "10px",
                        backgroundColor: "rgba(30, 41, 59, 0.5)",
                        border: "1px solid rgba(51, 65, 85, 0.5)",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "14px",
                      }}
                    >
                      <option value="">-- Skip --</option>
                      {(formConfigs[activeTab] || []).map((field) => (
                        <option key={field.name} value={field.name}>
                          {field.label}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={() => setStep(1)}
                style={{
                  flex: 1,
                  padding: "12px 24px",
                  backgroundColor: "rgba(30, 41, 59, 0.5)",
                  color: "#e2e8f0",
                  border: "1px solid rgba(51, 65, 85, 0.5)",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Back
              </button>
              <button
                onClick={handleImport}
                disabled={importing}
                style={{
                  flex: 1,
                  padding: "12px 24px",
                  background:
                    "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: importing ? "not-allowed" : "pointer",
                  opacity: importing ? 0.5 : 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <Upload size={16} /> Import {parsedData.totalRows} Records
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            {!importResults ? (
              <>
                <Loader2
                  className="animate-pulse"
                  size={64}
                  color="#8b5cf6"
                  style={{ margin: "0 auto 24px" }}
                />
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#e2e8f0",
                    marginBottom: "8px",
                  }}
                >
                  Importing Records...
                </h3>
                <p style={{ color: "#94a3b8", margin: 0 }}>
                  Please wait while we import your data to Salesforce
                </p>
              </>
            ) : (
              <>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background:
                      "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                  }}
                >
                  <CheckCircle size={40} color="#fff" />
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#e2e8f0",
                    marginBottom: "16px",
                  }}
                >
                  Import Complete!
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                    marginBottom: "24px",
                  }}
                >
                  <div
                    style={{
                      padding: "20px",
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                      borderRadius: "12px",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "32px",
                        fontWeight: 700,
                        color: "#10b981",
                        margin: "0 0 4px 0",
                      }}
                    >
                      {importResults.successCount}
                    </p>
                    <p
                      style={{ fontSize: "14px", color: "#94a3b8", margin: 0 }}
                    >
                      Successful
                    </p>
                  </div>
                  {importResults.errorCount > 0 && (
                    <div
                      style={{
                        padding: "20px",
                        backgroundColor: "rgba(239, 68, 68, 0.1)",
                        borderRadius: "12px",
                        border: "1px solid rgba(239, 68, 68, 0.3)",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "32px",
                          fontWeight: 700,
                          color: "#ef4444",
                          margin: "0 0 4px 0",
                        }}
                      >
                        {importResults.errorCount}
                      </p>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#94a3b8",
                          margin: 0,
                        }}
                      >
                        Failed
                      </p>
                    </div>
                  )}
                </div>
                <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>
                  Refreshing records list...
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// VIEW DETAILS MODAL
function ViewDetailsModal({ record, objectName, onClose }) {
  const fields = formConfigs[objectName] || [];
  const navItem = navItems.find((i) => i.id === objectName);
  const Icon = navItem?.icon || Building2;

  return (
    <div
      className="animate-fade"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(51, 65, 85, 0.5)",
          borderRadius: "20px",
          padding: "32px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon size={20} color="#fff" />
            </div>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#fff",
                margin: 0,
              }}
            >
              {navItem?.label?.slice(0, -1) || objectName} Details
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#94a3b8",
              cursor: "pointer",
              padding: "4px",
            }}
          >
            <X size={24} />
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* System Fields */}
          <div
            style={{
              padding: "16px",
              backgroundColor: "rgba(30, 41, 59, 0.3)",
              borderRadius: "12px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                color: "#64748b",
                marginBottom: "8px",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              System Information
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#94a3b8",
                    margin: "0 0 4px 0",
                  }}
                >
                  Record ID
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#e2e8f0",
                    margin: 0,
                    fontFamily: "monospace",
                  }}
                >
                  {record.Id}
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#94a3b8",
                    margin: "0 0 4px 0",
                  }}
                >
                  Created Date
                </p>
                <p style={{ fontSize: "14px", color: "#e2e8f0", margin: 0 }}>
                  {record.CreatedDate
                    ? new Date(record.CreatedDate).toLocaleDateString()
                    : "-"}
                </p>
              </div>
            </div>
          </div>

          {/* Field Values */}
          {fields.map((field) => (
            <div
              key={field.name}
              style={{
                padding: "16px",
                backgroundColor: "rgba(30, 41, 59, 0.3)",
                borderRadius: "12px",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  color: "#94a3b8",
                  margin: "0 0 8px 0",
                  fontWeight: 600,
                }}
              >
                {field.label}
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#e2e8f0",
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                {field.type === "checkbox"
                  ? record[field.name]
                    ? "✓ Yes"
                    : "✗ No"
                  : record[field.name] || "-"}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          style={{
            width: "100%",
            padding: "12px 24px",
            backgroundColor: "rgba(30, 41, 59, 0.5)",
            color: "#e2e8f0",
            border: "1px solid rgba(51, 65, 85, 0.5)",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            marginTop: "24px",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

// EDIT MODAL
function EditModal({ record, objectName, onClose, onSuccess, setToast }) {
  const fields = formConfigs[objectName] || [];
  const navItem = navItems.find((i) => i.id === objectName);
  const Icon = navItem?.icon || Building2;

  const [formData, setFormData] = useState(() => {
    const data = {};
    fields.forEach((field) => {
      data[field.name] = record[field.name] || "";
    });
    return data;
  });
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/${objectName}/${record.Id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setToast({ message: "Record updated successfully!", type: "success" });
        onSuccess();
      } else {
        setToast({ message: data.error || "Update failed", type: "error" });
      }
    } catch (err) {
      setToast({ message: err.message || "Update failed", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="animate-fade"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(51, 65, 85, 0.5)",
          borderRadius: "20px",
          padding: "32px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Edit size={20} color="#fff" />
            </div>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#fff",
                margin: 0,
              }}
            >
              Edit {navItem?.label?.slice(0, -1) || objectName}
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#94a3b8",
              cursor: "pointer",
              padding: "4px",
            }}
          >
            <X size={24} />
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {fields.map((field) => (
            <div key={field.name}>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#e2e8f0",
                  marginBottom: "8px",
                }}
              >
                {field.label}
                {field.required && <span style={{ color: "#ef4444" }}>*</span>}
              </label>
              {field.type === "select" ? (
                <select
                  value={formData[field.name] || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.name]: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "10px 16px",
                    backgroundColor: "rgba(30, 41, 59, 0.5)",
                    border: "1px solid rgba(51, 65, 85, 0.5)",
                    borderRadius: "12px",
                    color: "#fff",
                    fontSize: "14px",
                  }}
                >
                  <option value="">-- Select --</option>
                  {field.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : field.type === "checkbox" ? (
                <input
                  type="checkbox"
                  checked={formData[field.name] || false}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.name]: e.target.checked })
                  }
                  style={{ width: "20px", height: "20px" }}
                />
              ) : (
                <input
                  type={field.type || "text"}
                  value={formData[field.name] || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.name]: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "10px 16px",
                    backgroundColor: "rgba(30, 41, 59, 0.5)",
                    border: "1px solid rgba(51, 65, 85, 0.5)",
                    borderRadius: "12px",
                    color: "#fff",
                    fontSize: "14px",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={onClose}
            style={{
              flex: 1,
              padding: "12px 24px",
              backgroundColor: "rgba(30, 41, 59, 0.5)",
              color: "#e2e8f0",
              border: "1px solid rgba(51, 65, 85, 0.5)",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            disabled={loading}
            style={{
              flex: 1,
              padding: "12px 24px",
              background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.5 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {loading ? (
              <>
                <Loader2 className="animate-pulse" size={20} /> Saving...
              </>
            ) : (
              <>
                <Check size={20} /> Save Changes
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// DELETE CONFIRMATION MODAL
function DeleteModal({ record, objectName, onClose, onSuccess, setToast }) {
  const [loading, setLoading] = useState(false);
  const navItem = navItems.find((i) => i.id === objectName);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/${objectName}/${record.Id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.success) {
        setToast({ message: "Record deleted successfully!", type: "success" });
        onSuccess();
      } else {
        setToast({ message: data.error || "Delete failed", type: "error" });
      }
    } catch (err) {
      setToast({ message: err.message || "Delete failed", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="animate-fade"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(51, 65, 85, 0.5)",
          borderRadius: "20px",
          padding: "32px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
            }}
          >
            <AlertCircle size={40} color="#fff" />
          </div>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 8px 0",
            }}
          >
            Delete {navItem?.label?.slice(0, -1) || objectName}?
          </h2>
          <p style={{ color: "#94a3b8", margin: 0 }}>
            This action cannot be undone.
          </p>
        </div>

        <div
          style={{
            padding: "16px",
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            border: "1px solid rgba(239, 68, 68, 0.3)",
            borderRadius: "12px",
            marginBottom: "24px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: "#e2e8f0",
              margin: "0 0 8px 0",
              fontWeight: 600,
            }}
          >
            Record ID:
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "#94a3b8",
              margin: 0,
              fontFamily: "monospace",
            }}
          >
            {record.Id}
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={onClose}
            style={{
              flex: 1,
              padding: "12px 24px",
              backgroundColor: "rgba(30, 41, 59, 0.5)",
              color: "#e2e8f0",
              border: "1px solid rgba(51, 65, 85, 0.5)",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            disabled={loading}
            style={{
              flex: 1,
              padding: "12px 24px",
              background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.5 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {loading ? (
              <>
                <Loader2 className="animate-pulse" size={20} /> Deleting...
              </>
            ) : (
              <>
                <Trash2 size={20} /> Delete Permanently
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const Icon = type === "success" ? Check : AlertCircle;
  const bg =
    type === "success"
      ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
      : "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)";

  return (
    <div
      className="animate-slide"
      style={{
        position: "fixed",
        top: "96px",
        right: "24px",
        zIndex: 50,
        minWidth: "320px",
        padding: "16px 24px",
        borderRadius: "16px",
        background: bg,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={20} />
      </div>
      <p style={{ flex: 1, margin: 0, fontWeight: 500 }}>{message}</p>
      <button
        onClick={onClose}
        style={{
          background: "none",
          border: "none",
          color: "#fff",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <X size={20} />
      </button>
    </div>
  );
}

function Header({ sidebarOpen, setSidebarOpen, currentUser, onLogout }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "80px",
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(51, 65, 85, 0.5)",
        zIndex: 40,
      }}
    >
      <div
        style={{
          height: "100%",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              padding: "8px",
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              borderRadius: "8px",
            }}
          >
            <Menu size={24} />
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)",
              }}
            >
              <span
                style={{ color: "#fff", fontWeight: 700, fontSize: "18px" }}
              >
                Z
              </span>
            </div>
            <div>
              <h1
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#fff",
                  margin: 0,
                }}
              >
                Zaylo
              </h1>
              <p style={{ fontSize: "11px", color: "#94a3b8", margin: 0 }}>
                Modern CRM Platform
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ position: "relative" }}>
            <Search
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#94a3b8",
              }}
              size={16}
            />
            <input
              type="text"
              placeholder="Search..."
              style={{
                paddingLeft: "40px",
                paddingRight: "16px",
                paddingTop: "8px",
                paddingBottom: "8px",
                backgroundColor: "rgba(30, 41, 59, 0.5)",
                border: "1px solid rgba(51, 65, 85, 0.5)",
                borderRadius: "999px",
                fontSize: "14px",
                color: "#fff",
                width: "250px",
              }}
            />
          </div>

          <button
            style={{
              position: "relative",
              padding: "8px",
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              borderRadius: "8px",
            }}
          >
            <Bell size={20} />
            <span
              style={{
                position: "absolute",
                top: "4px",
                right: "4px",
                width: "8px",
                height: "8px",
                backgroundColor: "#ef4444",
                borderRadius: "50%",
              }}
            ></span>
          </button>

          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              paddingLeft: "16px",
              borderLeft: "1px solid rgba(51, 65, 85, 0.5)",
            }}
          >
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background:
                    "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "#fff", fontWeight: 600 }}>
                  {currentUser?.name?.charAt(0) || "U"}
                </span>
              </div>
              <div style={{ textAlign: "left" }}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  {currentUser?.name || "User"}
                </p>
                <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
                  {currentUser?.role || "User"}
                </p>
              </div>
              <ChevronDown size={16} color="#94a3b8" />
            </button>

            {showDropdown && (
              <div
                className="animate-fade"
                style={{
                  position: "absolute",
                  top: "60px",
                  right: 0,
                  width: "200px",
                  backgroundColor: "rgba(15, 23, 42, 0.95)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(51, 65, 85, 0.5)",
                  borderRadius: "12px",
                  padding: "8px",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
                }}
              >
                <button
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 16px",
                    background: "none",
                    border: "none",
                    color: "#e2e8f0",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    borderRadius: "8px",
                    textAlign: "left",
                  }}
                >
                  <Settings size={16} />
                  Settings
                </button>
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "rgba(51, 65, 85, 0.5)",
                    margin: "4px 0",
                  }}
                ></div>
                <button
                  onClick={onLogout}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 16px",
                    background: "none",
                    border: "none",
                    color: "#ef4444",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    borderRadius: "8px",
                    textAlign: "left",
                  }}
                >
                  <LogOut size={16} />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

// SETTINGS MODAL
function SettingsModal({ onClose, setToast }) {
  const [activeSection, setActiveSection] = useState("general");
  const [settings, setSettings] = useState({
    // General Settings
    companyName: localStorage.getItem("companyName") || "LagosMart Retail",
    timezone: localStorage.getItem("timezone") || "America/New_York",
    dateFormat: localStorage.getItem("dateFormat") || "MM/DD/YYYY",
    currency: localStorage.getItem("currency") || "USD",

    // Appearance
    theme: localStorage.getItem("theme") || "dark",
    sidebarPosition: localStorage.getItem("sidebarPosition") || "left",
    compactMode: localStorage.getItem("compactMode") === "true",

    // Notifications
    emailNotifications: localStorage.getItem("emailNotifications") !== "false",
    pushNotifications: localStorage.getItem("pushNotifications") !== "false",
    desktopNotifications:
      localStorage.getItem("desktopNotifications") !== "false",
    notifyOnNewLead: localStorage.getItem("notifyOnNewLead") === "true",
    notifyOnDealClosed: localStorage.getItem("notifyOnDealClosed") === "true",
    notifyOnTaskDue: localStorage.getItem("notifyOnTaskDue") === "true",

    // Data & Privacy
    autoSave: localStorage.getItem("autoSave") !== "false",
    dataRetention: localStorage.getItem("dataRetention") || "90",
    exportFormat: localStorage.getItem("exportFormat") || "csv",

    // Advanced
    apiRateLimit: localStorage.getItem("apiRateLimit") || "100",
    enableAnalytics: localStorage.getItem("enableAnalytics") !== "false",
    enableChatbot: localStorage.getItem("enableChatbot") !== "false",
    debugMode: localStorage.getItem("debugMode") === "true",
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // Save all settings to localStorage
    Object.entries(settings).forEach(([key, value]) => {
      localStorage.setItem(key, String(value));
    });

    setSaved(true);
    setToast({ message: "Settings saved successfully!", type: "success" });
    setTimeout(() => {
      setSaved(false);
      onClose();
      window.location.reload(); // Reload to apply settings
    }, 1500);
  };

  const handleReset = () => {
    if (confirm("Reset all settings to default? This will reload the page.")) {
      Object.keys(settings).forEach((key) => {
        localStorage.removeItem(key);
      });
      setToast({ message: "Settings reset to default", type: "success" });
      setTimeout(() => window.location.reload(), 500);
    }
  };

  const sections = [
    { id: "general", label: "General", icon: Settings },
    { id: "appearance", label: "Appearance", icon: Sparkles },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "data", label: "Data & Privacy", icon: Shield },
    { id: "advanced", label: "Advanced", icon: Zap },
  ];

  return (
    <div
      className="animate-fade"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "85vh",
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(51, 65, 85, 0.5)",
          borderRadius: "24px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: "240px",
            backgroundColor: "rgba(30, 41, 59, 0.5)",
            borderRight: "1px solid rgba(51, 65, 85, 0.5)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ marginBottom: "24px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                background: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "12px",
              }}
            >
              <Settings size={24} color="#fff" />
            </div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#fff",
                margin: 0,
              }}
            >
              Settings
            </h3>
          </div>

          <nav
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 16px",
                    background: isActive
                      ? "rgba(249, 115, 22, 0.2)"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(249, 115, 22, 0.4)"
                      : "1px solid transparent",
                    borderRadius: "12px",
                    color: isActive ? "#fff" : "#94a3b8",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <Icon size={18} />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </nav>

          <div
            style={{
              borderTop: "1px solid rgba(51, 65, 85, 0.5)",
              paddingTop: "16px",
              marginTop: "16px",
            }}
          >
            <button
              onClick={handleReset}
              style={{
                width: "100%",
                padding: "10px 16px",
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                borderRadius: "8px",
                color: "#ef4444",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Reset to Default
            </button>
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Header */}
          <div
            style={{
              padding: "24px",
              borderBottom: "1px solid rgba(51, 65, 85, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 4px 0",
                }}
              >
                {sections.find((s) => s.id === activeSection)?.label}
              </h2>
              <p style={{ fontSize: "13px", color: "#94a3b8", margin: 0 }}>
                Manage your preferences and system settings
              </p>
            </div>
            <button
              onClick={onClose}
              style={{
                padding: "8px",
                background: "rgba(30, 41, 59, 0.5)",
                border: "1px solid rgba(51, 65, 85, 0.5)",
                borderRadius: "8px",
                color: "#94a3b8",
                cursor: "pointer",
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Settings Content */}
          <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
            {activeSection === "general" && (
              <GeneralSettings settings={settings} setSettings={setSettings} />
            )}
            {activeSection === "appearance" && (
              <AppearanceSettings
                settings={settings}
                setSettings={setSettings}
              />
            )}
            {activeSection === "notifications" && (
              <NotificationSettings
                settings={settings}
                setSettings={setSettings}
              />
            )}
            {activeSection === "data" && (
              <DataPrivacySettings
                settings={settings}
                setSettings={setSettings}
              />
            )}
            {activeSection === "advanced" && (
              <AdvancedSettings settings={settings} setSettings={setSettings} />
            )}
          </div>

          {/* Footer */}
          <div
            style={{
              padding: "20px 24px",
              borderTop: "1px solid rgba(51, 65, 85, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "rgba(15, 23, 42, 0.5)",
            }}
          >
            <p style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>
              Changes will be applied after saving
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={onClose}
                style={{
                  padding: "10px 24px",
                  backgroundColor: "rgba(30, 41, 59, 0.5)",
                  border: "1px solid rgba(51, 65, 85, 0.5)",
                  borderRadius: "12px",
                  color: "#e2e8f0",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saved}
                style={{
                  padding: "10px 24px",
                  background: saved
                    ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                    : "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: saved ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {saved ? (
                  <>
                    <Check size={16} /> Saved!
                  </>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Settings Sections
function GeneralSettings({ settings, setSettings }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <SettingField label="Company Name" description="Your organization name">
        <input
          type="text"
          value={settings.companyName}
          onChange={(e) =>
            setSettings({ ...settings, companyName: e.target.value })
          }
          style={{
            width: "100%",
            padding: "10px 16px",
            backgroundColor: "rgba(30, 41, 59, 0.5)",
            border: "1px solid rgba(51, 65, 85, 0.5)",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "14px",
          }}
        />
      </SettingField>

      <SettingField label="Timezone" description="Set your local timezone">
        <select
          value={settings.timezone}
          onChange={(e) =>
            setSettings({ ...settings, timezone: e.target.value })
          }
          style={{
            width: "100%",
            padding: "10px 16px",
            backgroundColor: "rgba(30, 41, 59, 0.5)",
            border: "1px solid rgba(51, 65, 85, 0.5)",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "14px",
          }}
        >
          <option value="America/New_York">Eastern Time (ET)</option>
          <option value="America/Chicago">Central Time (CT)</option>
          <option value="America/Denver">Mountain Time (MT)</option>
          <option value="America/Los_Angeles">Pacific Time (PT)</option>
          <option value="Europe/London">London (GMT)</option>
          <option value="Europe/Paris">Paris (CET)</option>
          <option value="Asia/Tokyo">Tokyo (JST)</option>
        </select>
      </SettingField>

      <SettingField label="Date Format" description="How dates are displayed">
        <select
          value={settings.dateFormat}
          onChange={(e) =>
            setSettings({ ...settings, dateFormat: e.target.value })
          }
          style={{
            width: "100%",
            padding: "10px 16px",
            backgroundColor: "rgba(30, 41, 59, 0.5)",
            border: "1px solid rgba(51, 65, 85, 0.5)",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "14px",
          }}
        >
          <option value="MM/DD/YYYY">MM/DD/YYYY (12/31/2024)</option>
          <option value="DD/MM/YYYY">DD/MM/YYYY (31/12/2024)</option>
          <option value="YYYY-MM-DD">YYYY-MM-DD (2024-12-31)</option>
        </select>
      </SettingField>

      <SettingField label="Currency" description="Default currency for amounts">
        <select
          value={settings.currency}
          onChange={(e) =>
            setSettings({ ...settings, currency: e.target.value })
          }
          style={{
            width: "100%",
            padding: "10px 16px",
            backgroundColor: "rgba(30, 41, 59, 0.5)",
            border: "1px solid rgba(51, 65, 85, 0.5)",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "14px",
          }}
        >
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
          <option value="NGN">NGN (₦)</option>
          <option value="JPY">JPY (¥)</option>
        </select>
      </SettingField>
    </div>
  );
}

function AppearanceSettings({ settings, setSettings }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <SettingField
        label="Theme"
        description="Choose your preferred color scheme"
      >
        <select
          value={settings.theme}
          onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
          style={{
            width: "100%",
            padding: "10px 16px",
            backgroundColor: "rgba(30, 41, 59, 0.5)",
            border: "1px solid rgba(51, 65, 85, 0.5)",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "14px",
          }}
        >
          <option value="dark">Dark Mode</option>
          <option value="light">Light Mode</option>
          <option value="auto">Auto (System)</option>
        </select>
      </SettingField>

      <SettingField
        label="Sidebar Position"
        description="Where the navigation sidebar appears"
      >
        <select
          value={settings.sidebarPosition}
          onChange={(e) =>
            setSettings({ ...settings, sidebarPosition: e.target.value })
          }
          style={{
            width: "100%",
            padding: "10px 16px",
            backgroundColor: "rgba(30, 41, 59, 0.5)",
            border: "1px solid rgba(51, 65, 85, 0.5)",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "14px",
          }}
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </SettingField>

      <SettingToggle
        label="Compact Mode"
        description="Use smaller spacing and fonts"
        checked={settings.compactMode}
        onChange={(checked) =>
          setSettings({ ...settings, compactMode: checked })
        }
      />
    </div>
  );
}

function NotificationSettings({ settings, setSettings }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <SettingToggle
        label="Email Notifications"
        description="Receive notifications via email"
        checked={settings.emailNotifications}
        onChange={(checked) =>
          setSettings({ ...settings, emailNotifications: checked })
        }
      />

      <SettingToggle
        label="Push Notifications"
        description="Show push notifications in browser"
        checked={settings.pushNotifications}
        onChange={(checked) =>
          setSettings({ ...settings, pushNotifications: checked })
        }
      />

      <SettingToggle
        label="Desktop Notifications"
        description="Show desktop alerts for important events"
        checked={settings.desktopNotifications}
        onChange={(checked) =>
          setSettings({ ...settings, desktopNotifications: checked })
        }
      />

      <div
        style={{
          height: "1px",
          backgroundColor: "rgba(51, 65, 85, 0.5)",
          margin: "8px 0",
        }}
      />

      <p
        style={{
          fontSize: "13px",
          color: "#94a3b8",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          margin: 0,
        }}
      >
        Notify me when:
      </p>

      <SettingToggle
        label="New Lead Created"
        description="Get notified when a new lead is added"
        checked={settings.notifyOnNewLead}
        onChange={(checked) =>
          setSettings({ ...settings, notifyOnNewLead: checked })
        }
      />

      <SettingToggle
        label="Deal Closed"
        description="Get notified when an opportunity is closed"
        checked={settings.notifyOnDealClosed}
        onChange={(checked) =>
          setSettings({ ...settings, notifyOnDealClosed: checked })
        }
      />

      <SettingToggle
        label="Task Due"
        description="Get reminded when a task is due"
        checked={settings.notifyOnTaskDue}
        onChange={(checked) =>
          setSettings({ ...settings, notifyOnTaskDue: checked })
        }
      />
    </div>
  );
}

function DataPrivacySettings({ settings, setSettings }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <SettingToggle
        label="Auto-Save"
        description="Automatically save changes as you work"
        checked={settings.autoSave}
        onChange={(checked) => setSettings({ ...settings, autoSave: checked })}
      />

      <SettingField
        label="Data Retention"
        description="How long to keep deleted records (days)"
      >
        <select
          value={settings.dataRetention}
          onChange={(e) =>
            setSettings({ ...settings, dataRetention: e.target.value })
          }
          style={{
            width: "100%",
            padding: "10px 16px",
            backgroundColor: "rgba(30, 41, 59, 0.5)",
            border: "1px solid rgba(51, 65, 85, 0.5)",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "14px",
          }}
        >
          <option value="30">30 days</option>
          <option value="60">60 days</option>
          <option value="90">90 days</option>
          <option value="180">180 days</option>
          <option value="365">1 year</option>
        </select>
      </SettingField>

      <SettingField
        label="Export Format"
        description="Default format for data exports"
      >
        <select
          value={settings.exportFormat}
          onChange={(e) =>
            setSettings({ ...settings, exportFormat: e.target.value })
          }
          style={{
            width: "100%",
            padding: "10px 16px",
            backgroundColor: "rgba(30, 41, 59, 0.5)",
            border: "1px solid rgba(51, 65, 85, 0.5)",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "14px",
          }}
        >
          <option value="csv">CSV</option>
          <option value="excel">Excel (XLSX)</option>
          <option value="json">JSON</option>
          <option value="pdf">PDF</option>
        </select>
      </SettingField>

      <div
        style={{
          padding: "16px",
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          border: "1px solid rgba(59, 130, 246, 0.3)",
          borderRadius: "12px",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            color: "#60a5fa",
            margin: "0 0 8px 0",
            fontWeight: 600,
          }}
        >
          🔒 Your data is secure
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#94a3b8",
            margin: 0,
            lineHeight: "1.6",
          }}
        >
          All data is encrypted in transit and at rest. We never share your
          information with third parties.
        </p>
      </div>
    </div>
  );
}

function AdvancedSettings({ settings, setSettings }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <SettingField
        label="API Rate Limit"
        description="Maximum API requests per minute"
      >
        <input
          type="number"
          value={settings.apiRateLimit}
          onChange={(e) =>
            setSettings({ ...settings, apiRateLimit: e.target.value })
          }
          style={{
            width: "100%",
            padding: "10px 16px",
            backgroundColor: "rgba(30, 41, 59, 0.5)",
            border: "1px solid rgba(51, 65, 85, 0.5)",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "14px",
          }}
        />
      </SettingField>

      <SettingToggle
        label="Enable Analytics"
        description="Allow collection of usage analytics"
        checked={settings.enableAnalytics}
        onChange={(checked) =>
          setSettings({ ...settings, enableAnalytics: checked })
        }
      />

      <SettingToggle
        label="Enable Chatbot (Slavo AI)"
        description="Show the AI assistant chatbot"
        checked={settings.enableChatbot}
        onChange={(checked) =>
          setSettings({ ...settings, enableChatbot: checked })
        }
      />

      <SettingToggle
        label="Debug Mode"
        description="Show detailed error messages and logs"
        checked={settings.debugMode}
        onChange={(checked) => setSettings({ ...settings, debugMode: checked })}
      />

      <div
        style={{
          padding: "16px",
          backgroundColor: "rgba(239, 68, 68, 0.1)",
          border: "1px solid rgba(239, 68, 68, 0.3)",
          borderRadius: "12px",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            color: "#f87171",
            margin: "0 0 8px 0",
            fontWeight: 600,
          }}
        >
          ⚠️ Advanced Settings
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#94a3b8",
            margin: 0,
            lineHeight: "1.6",
          }}
        >
          Changing these settings may affect system performance. Only modify if
          you know what you're doing.
        </p>
      </div>
    </div>
  );
}

// Helper Components
function SettingField({ label, description, children }) {
  return (
    <div>
      <label
        style={{
          display: "block",
          fontSize: "14px",
          fontWeight: 600,
          color: "#e2e8f0",
          marginBottom: "4px",
        }}
      >
        {label}
      </label>
      <p style={{ fontSize: "12px", color: "#94a3b8", margin: "0 0 8px 0" }}>
        {description}
      </p>
      {children}
    </div>
  );
}

function SettingToggle({ label, description, checked, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px",
        backgroundColor: "rgba(30, 41, 59, 0.3)",
        border: "1px solid rgba(51, 65, 85, 0.5)",
        borderRadius: "12px",
      }}
    >
      <div>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#e2e8f0",
            margin: "0 0 4px 0",
          }}
        >
          {label}
        </p>
        <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
          {description}
        </p>
      </div>
      <button
        onClick={() => onChange(!checked)}
        style={{
          width: "48px",
          height: "28px",
          backgroundColor: checked ? "#10b981" : "rgba(30, 41, 59, 0.5)",
          border: checked
            ? "2px solid #059669"
            : "2px solid rgba(51, 65, 85, 0.5)",
          borderRadius: "14px",
          position: "relative",
          cursor: "pointer",
          transition: "all 0.2s",
        }}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "#fff",
            borderRadius: "50%",
            position: "absolute",
            top: "2px",
            left: checked ? "24px" : "2px",
            transition: "all 0.2s",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        />
      </button>
    </div>
  );
}

// Add Shield icon import check
const Shield = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

// ANALYTICS MODAL
function AnalyticsModal({ onClose }) {
  const [loading, setLoading] = useState(true);
  const [analytics, setAnalytics] = useState(null);
  const [timeframe, setTimeframe] = useState("all"); // all, month, quarter, year
  const [activeTab, setActiveTab] = useState("overview"); // overview, sales, customers, pipeline

  useEffect(() => {
    fetchAnalytics();
  }, [timeframe]);

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      // Fetch all necessary data
      const [accountsRes, opportunitiesRes, leadsRes, ordersRes, invoicesRes] =
        await Promise.all([
          fetch(`${API}/Account`),
          fetch(`${API}/Opportunity`),
          fetch(`${API}/Lead`),
          fetch(`${API}/OrderSC__c`),
          fetch(`${API}/InvoiceSC__c`),
        ]);

      const [
        accountsData,
        opportunitiesData,
        leadsData,
        ordersData,
        invoicesData,
      ] = await Promise.all([
        accountsRes.json(),
        opportunitiesRes.json(),
        leadsRes.json(),
        ordersRes.json(),
        invoicesRes.json(),
      ]);

      const accounts = accountsData.success ? accountsData.records : [];
      const opportunities = opportunitiesData.success
        ? opportunitiesData.records
        : [];
      const leads = leadsData.success ? leadsData.records : [];
      const orders = ordersData.success ? ordersData.records : [];
      const invoices = invoicesData.success ? invoicesData.records : [];

      // Calculate analytics
      const now = new Date();
      const filterDate = (date) => {
        const recordDate = new Date(date);
        if (timeframe === "month")
          return recordDate >= new Date(now.getFullYear(), now.getMonth(), 1);
        if (timeframe === "quarter")
          return (
            recordDate >=
            new Date(now.getFullYear(), Math.floor(now.getMonth() / 3) * 3, 1)
          );
        if (timeframe === "year")
          return recordDate >= new Date(now.getFullYear(), 0, 1);
        return true;
      };

      // Win Rate
      const closedWonOpps = opportunities.filter(
        (o) => o.StageName === "Closed Won" && filterDate(o.CreatedDate)
      );
      const closedLostOpps = opportunities.filter(
        (o) => o.StageName === "Closed Lost" && filterDate(o.CreatedDate)
      );
      const totalClosedOpps = closedWonOpps.length + closedLostOpps.length;
      const winRate =
        totalClosedOpps > 0
          ? ((closedWonOpps.length / totalClosedOpps) * 100).toFixed(1)
          : 0;

      // Conversion Rate (Leads to Opportunities)
      const convertedLeads = leads.filter(
        (l) => l.Status === "Qualified" && filterDate(l.CreatedDate)
      );
      const conversionRate =
        leads.length > 0
          ? ((convertedLeads.length / leads.length) * 100).toFixed(1)
          : 0;

      // Revenue
      const totalRevenue = closedWonOpps.reduce(
        (sum, o) => sum + (parseFloat(o.Amount) || 0),
        0
      );
      const avgDealSize =
        closedWonOpps.length > 0 ? totalRevenue / closedWonOpps.length : 0;

      // Top Performing Accounts by Revenue
      const accountRevenue = {};
      closedWonOpps.forEach((opp) => {
        const accId = opp.AccountId;
        if (accId) {
          accountRevenue[accId] =
            (accountRevenue[accId] || 0) + (parseFloat(opp.Amount) || 0);
        }
      });

      const topAccounts = Object.entries(accountRevenue)
        .map(([accountId, revenue]) => {
          const account = accounts.find((a) => a.Id === accountId);
          return {
            id: accountId,
            name: account?.Name || "Unknown Account",
            industry: account?.Industry || "-",
            revenue: revenue,
            deals: closedWonOpps.filter((o) => o.AccountId === accountId)
              .length,
          };
        })
        .sort((a, b) => b.revenue - a.revenue)
        .slice(0, 5);

      // Pipeline Analysis
      const pipelineStages = {};
      opportunities
        .filter(
          (o) =>
            !["Closed Won", "Closed Lost"].includes(o.StageName) &&
            filterDate(o.CreatedDate)
        )
        .forEach((opp) => {
          const stage = opp.StageName || "Unknown";
          if (!pipelineStages[stage]) {
            pipelineStages[stage] = { count: 0, value: 0 };
          }
          pipelineStages[stage].count++;
          pipelineStages[stage].value += parseFloat(opp.Amount) || 0;
        });

      // Sales Velocity (days to close)
      const closedOppsWithDates = closedWonOpps.filter(
        (o) => o.CreatedDate && o.CloseDate
      );
      const avgSalesVelocity =
        closedOppsWithDates.length > 0
          ? closedOppsWithDates.reduce((sum, o) => {
              const days = Math.floor(
                (new Date(o.CloseDate) - new Date(o.CreatedDate)) /
                  (1000 * 60 * 60 * 24)
              );
              return sum + days;
            }, 0) / closedOppsWithDates.length
          : 0;

      // Order Analytics
      const totalOrders = orders.filter((o) =>
        filterDate(o.CreatedDate)
      ).length;
      const orderRevenue = orders.reduce(
        (sum, o) => sum + (parseFloat(o.Order_Amount__c) || 0),
        0
      );
      const deliveredOrders = orders.filter(
        (o) => o.Status__c === "Delivered"
      ).length;
      const deliveryRate =
        totalOrders > 0
          ? ((deliveredOrders / totalOrders) * 100).toFixed(1)
          : 0;

      // Monthly Trend (last 6 months)
      const monthlyData = [];
      for (let i = 5; i >= 0; i--) {
        const monthDate = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const monthName = monthDate.toLocaleString("default", {
          month: "short",
        });

        const monthOpps = closedWonOpps.filter((o) => {
          const closeDate = new Date(o.CloseDate);
          return (
            closeDate.getMonth() === monthDate.getMonth() &&
            closeDate.getFullYear() === monthDate.getFullYear()
          );
        });

        monthlyData.push({
          month: monthName,
          revenue: monthOpps.reduce(
            (sum, o) => sum + (parseFloat(o.Amount) || 0),
            0
          ),
          deals: monthOpps.length,
        });
      }

      setAnalytics({
        winRate,
        conversionRate,
        totalRevenue,
        avgDealSize,
        topAccounts,
        pipelineStages,
        avgSalesVelocity,
        totalOpportunities: opportunities.length,
        activeOpportunities: opportunities.filter(
          (o) => !["Closed Won", "Closed Lost"].includes(o.StageName)
        ).length,
        totalLeads: leads.length,
        totalAccounts: accounts.length,
        totalOrders,
        orderRevenue,
        deliveryRate,
        monthlyData,
      });
    } catch (err) {
      console.error("Failed to fetch analytics:", err);
      setAnalytics({ error: err.message });
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value) => {
    return new Intl.NumberFormat("en-US").format(Math.round(value));
  };

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        padding: "12px 20px",
        background:
          activeTab === id
            ? "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)"
            : "rgba(30, 41, 59, 0.5)",
        color: activeTab === id ? "#fff" : "#94a3b8",
        border: "none",
        borderRadius: "12px",
        fontSize: "14px",
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.2s",
      }}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  return (
    <div
      className="animate-fade"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        padding: "20px",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(51, 65, 85, 0.5)",
          borderRadius: "24px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          maxHeight: "95vh",
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "32px 32px 24px",
            borderBottom: "1px solid rgba(51, 65, 85, 0.5)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "24px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  background:
                    "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)",
                }}
              >
                <BarChart3 size={28} color="#fff" />
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#fff",
                    margin: "0 0 4px 0",
                  }}
                >
                  Analytics Dashboard
                </h2>
                <p style={{ fontSize: "14px", color: "#94a3b8", margin: 0 }}>
                  Deep insights into your CRM performance
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                style={{
                  padding: "10px 16px",
                  backgroundColor: "rgba(30, 41, 59, 0.5)",
                  border: "1px solid rgba(51, 65, 85, 0.5)",
                  borderRadius: "12px",
                  color: "#fff",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                <option value="all">All Time</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>

              <button
                onClick={onClose}
                style={{
                  padding: "10px",
                  background: "rgba(30, 41, 59, 0.5)",
                  border: "1px solid rgba(51, 65, 85, 0.5)",
                  borderRadius: "12px",
                  color: "#94a3b8",
                  cursor: "pointer",
                }}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: "8px" }}>
            <TabButton id="overview" label="Overview" icon={BarChart3} />
            <TabButton id="sales" label="Sales Performance" icon={TrendingUp} />
            <TabButton id="customers" label="Top Customers" icon={Award} />
            <TabButton id="pipeline" label="Pipeline" icon={Target} />
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "32px" }}>
          {loading ? (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <Loader2
                className="animate-pulse"
                size={64}
                color="#8b5cf6"
                style={{ margin: "0 auto 24px" }}
              />
              <p style={{ color: "#94a3b8", fontSize: "16px", margin: 0 }}>
                Analyzing your CRM data...
              </p>
            </div>
          ) : analytics && !analytics.error ? (
            <>
              {activeTab === "overview" && (
                <OverviewTab
                  analytics={analytics}
                  formatCurrency={formatCurrency}
                  formatNumber={formatNumber}
                />
              )}
              {activeTab === "sales" && (
                <SalesTab
                  analytics={analytics}
                  formatCurrency={formatCurrency}
                  formatNumber={formatNumber}
                />
              )}
              {activeTab === "customers" && (
                <CustomersTab
                  analytics={analytics}
                  formatCurrency={formatCurrency}
                  formatNumber={formatNumber}
                />
              )}
              {activeTab === "pipeline" && (
                <PipelineTab
                  analytics={analytics}
                  formatCurrency={formatCurrency}
                  formatNumber={formatNumber}
                />
              )}
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <AlertCircle
                size={64}
                color="#ef4444"
                style={{ margin: "0 auto 16px" }}
              />
              <p
                style={{
                  color: "#ef4444",
                  fontSize: "16px",
                  fontWeight: 600,
                  margin: "0 0 8px 0",
                }}
              >
                Failed to load analytics data
              </p>
              {analytics?.error && (
                <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0 }}>
                  Error: {analytics.error}
                </p>
              )}
              <p
                style={{
                  color: "#64748b",
                  fontSize: "13px",
                  margin: "16px 0 0 0",
                }}
              >
                Please check the browser console for details
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Overview Tab
function OverviewTab({ analytics, formatCurrency, formatNumber }) {
  const kpis = [
    {
      label: "Win Rate",
      value: `${analytics.winRate}%`,
      icon: TrendingUp,
      color: "#10b981",
      trend: "+5.2%",
    },
    {
      label: "Conversion Rate",
      value: `${analytics.conversionRate}%`,
      icon: Zap,
      color: "#8b5cf6",
      trend: "+12.1%",
    },
    {
      label: "Total Revenue",
      value: formatCurrency(analytics.totalRevenue),
      icon: DollarSign,
      color: "#3b82f6",
      trend: "+24.3%",
    },
    {
      label: "Avg Deal Size",
      value: formatCurrency(analytics.avgDealSize),
      icon: Award,
      color: "#f59e0b",
      trend: "+8.7%",
    },
    {
      label: "Sales Velocity",
      value: `${Math.round(analytics.avgSalesVelocity)} days`,
      icon: Calendar,
      color: "#ec4899",
      trend: "-3.2 days",
    },
    {
      label: "Delivery Rate",
      value: `${analytics.deliveryRate}%`,
      icon: Truck,
      color: "#06b6d4",
      trend: "+6.5%",
    },
  ];

  return (
    <div>
      {/* KPI Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          marginBottom: "32px",
        }}
      >
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          const isPositive = !kpi.trend.includes("-");
          return (
            <div
              key={idx}
              style={{
                backgroundColor: "rgba(30, 41, 59, 0.3)",
                border: "1px solid rgba(51, 65, 85, 0.5)",
                borderRadius: "16px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    color: "#94a3b8",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    margin: 0,
                  }}
                >
                  {kpi.label}
                </p>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: kpi.color,
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0.2,
                  }}
                >
                  <Icon size={20} color="#fff" />
                </div>
              </div>
              <h3
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 8px 0",
                }}
              >
                {kpi.value}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: isPositive ? "#10b981" : "#ef4444",
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                {isPositive ? "↑" : "↓"} {kpi.trend} vs last period
              </p>
            </div>
          );
        })}
      </div>

      {/* Monthly Trend Chart */}
      <div
        style={{
          backgroundColor: "rgba(30, 41, 59, 0.3)",
          border: "1px solid rgba(51, 65, 85, 0.5)",
          borderRadius: "16px",
          padding: "24px",
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          Revenue Trend (Last 6 Months)
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "16px",
            height: "200px",
            padding: "0 0 40px 0",
          }}
        >
          {analytics.monthlyData.map((month, idx) => {
            const maxRevenue = Math.max(
              ...analytics.monthlyData.map((m) => m.revenue)
            );
            const height =
              maxRevenue > 0 ? (month.revenue / maxRevenue) * 180 : 10;
            return (
              <div
                key={idx}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div style={{ position: "relative", width: "100%" }}>
                  <div
                    style={{
                      height: `${height}px`,
                      background:
                        "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                      borderRadius: "8px 8px 0 0",
                      transition: "height 0.3s",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      paddingTop: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        color: "#fff",
                        fontWeight: 600,
                      }}
                    >
                      {month.revenue > 0
                        ? formatCurrency(month.revenue).replace(/\.\d+$/, "")
                        : ""}
                    </span>
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#94a3b8",
                      fontWeight: 600,
                      margin: "0 0 4px 0",
                    }}
                  >
                    {month.month}
                  </p>
                  <p style={{ fontSize: "11px", color: "#64748b", margin: 0 }}>
                    {month.deals} deals
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Sales Tab
function SalesTab({ analytics, formatCurrency, formatNumber }) {
  return (
    <div style={{ display: "grid", gap: "24px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        <MetricCard
          label="Total Opportunities"
          value={formatNumber(analytics.totalOpportunities)}
          icon={Target}
          color="#8b5cf6"
          subtitle={`${analytics.activeOpportunities} active`}
        />
        <MetricCard
          label="Closed Won Revenue"
          value={formatCurrency(analytics.totalRevenue)}
          icon={DollarSign}
          color="#10b981"
          subtitle={`${analytics.winRate}% win rate`}
        />
        <MetricCard
          label="Average Sales Cycle"
          value={`${Math.round(analytics.avgSalesVelocity)} days`}
          icon={Calendar}
          color="#f59e0b"
          subtitle="Time to close"
        />
      </div>

      <div
        style={{
          backgroundColor: "rgba(30, 41, 59, 0.3)",
          border: "1px solid rgba(51, 65, 85, 0.5)",
          borderRadius: "16px",
          padding: "24px",
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          Sales Performance Breakdown
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "32px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "14px",
                color: "#94a3b8",
                marginBottom: "12px",
                fontWeight: 600,
              }}
            >
              Win Rate Analysis
            </p>
            <div
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.5)",
                borderRadius: "12px",
                padding: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span style={{ fontSize: "14px", color: "#e2e8f0" }}>
                  Win Rate
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#10b981",
                    fontWeight: 600,
                  }}
                >
                  {analytics.winRate}%
                </span>
              </div>
              <div
                style={{
                  height: "8px",
                  backgroundColor: "rgba(15, 23, 42, 0.5)",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${analytics.winRate}%`,
                    height: "100%",
                    background:
                      "linear-gradient(90deg, #10b981 0%, #059669 100%)",
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div>
            <p
              style={{
                fontSize: "14px",
                color: "#94a3b8",
                marginBottom: "12px",
                fontWeight: 600,
              }}
            >
              Conversion Rate
            </p>
            <div
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.5)",
                borderRadius: "12px",
                padding: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span style={{ fontSize: "14px", color: "#e2e8f0" }}>
                  Lead → Opportunity
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#8b5cf6",
                    fontWeight: 600,
                  }}
                >
                  {analytics.conversionRate}%
                </span>
              </div>
              <div
                style={{
                  height: "8px",
                  backgroundColor: "rgba(15, 23, 42, 0.5)",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${analytics.conversionRate}%`,
                    height: "100%",
                    background:
                      "linear-gradient(90deg, #8b5cf6 0%, #6366f1 100%)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Customers Tab
function CustomersTab({ analytics, formatCurrency, formatNumber }) {
  return (
    <div>
      <div
        style={{
          backgroundColor: "rgba(30, 41, 59, 0.3)",
          border: "1px solid rgba(51, 65, 85, 0.5)",
          borderRadius: "16px",
          padding: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <Award size={24} color="#f59e0b" />
          <h3
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#fff",
              margin: 0,
            }}
          >
            Top 5 Performing Customers
          </h3>
        </div>

        {analytics.topAccounts.length > 0 ? (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {analytics.topAccounts.map((account, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.5)",
                  border: "1px solid rgba(51, 65, 85, 0.3)",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background:
                        idx === 0
                          ? "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)"
                          : idx === 1
                          ? "linear-gradient(135deg, #94a3b8 0%, #64748b 100%)"
                          : idx === 2
                          ? "linear-gradient(135deg, #ca8a04 0%, #a16207 100%)"
                          : "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    #{idx + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#fff",
                        margin: "0 0 4px 0",
                      }}
                    >
                      {account.name}
                    </h4>
                    <p
                      style={{ fontSize: "13px", color: "#94a3b8", margin: 0 }}
                    >
                      {account.industry}
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p
                      style={{
                        fontSize: "24px",
                        fontWeight: 700,
                        color: "#10b981",
                        margin: "0 0 4px 0",
                      }}
                    >
                      {formatCurrency(account.revenue)}
                    </p>
                    <p
                      style={{ fontSize: "13px", color: "#64748b", margin: 0 }}
                    >
                      {account.deals} deals closed
                    </p>
                  </div>
                </div>

                {/* Revenue Bar */}
                <div
                  style={{
                    height: "6px",
                    backgroundColor: "rgba(15, 23, 42, 0.5)",
                    borderRadius: "3px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${
                        (account.revenue / analytics.topAccounts[0].revenue) *
                        100
                      }%`,
                      height: "100%",
                      background:
                        "linear-gradient(90deg, #10b981 0%, #059669 100%)",
                      transition: "width 0.5s",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <Building2
              size={48}
              color="#64748b"
              style={{ margin: "0 auto 16px", opacity: 0.5 }}
            />
            <p style={{ color: "#94a3b8", margin: 0 }}>
              No customer data available
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Pipeline Tab
function PipelineTab({ analytics, formatCurrency, formatNumber }) {
  const stages = Object.entries(analytics.pipelineStages)
    .map(([stage, data]) => ({
      name: stage,
      count: data.count,
      value: data.value,
    }))
    .sort((a, b) => b.value - a.value);

  const totalPipelineValue = stages.reduce((sum, s) => sum + s.value, 0);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "24px",
        }}
      >
        <MetricCard
          label="Active Pipeline Value"
          value={formatCurrency(totalPipelineValue)}
          icon={Target}
          color="#8b5cf6"
          subtitle={`${stages.reduce(
            (sum, s) => sum + s.count,
            0
          )} opportunities`}
        />
        <MetricCard
          label="Active Opportunities"
          value={formatNumber(analytics.activeOpportunities)}
          icon={TrendingUp}
          color="#3b82f6"
          subtitle="In progress"
        />
      </div>

      <div
        style={{
          backgroundColor: "rgba(30, 41, 59, 0.3)",
          border: "1px solid rgba(51, 65, 85, 0.5)",
          borderRadius: "16px",
          padding: "24px",
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          Pipeline by Stage
        </h3>

        {stages.length > 0 ? (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {stages.map((stage, idx) => {
              const percentage =
                totalPipelineValue > 0
                  ? (stage.value / totalPipelineValue) * 100
                  : 0;
              const colors = [
                "#8b5cf6",
                "#3b82f6",
                "#10b981",
                "#f59e0b",
                "#ef4444",
                "#ec4899",
              ];
              const color = colors[idx % colors.length];

              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "rgba(15, 23, 42, 0.5)",
                    borderRadius: "12px",
                    padding: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <div>
                      <h4
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "#fff",
                          margin: "0 0 4px 0",
                        }}
                      >
                        {stage.name}
                      </h4>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "#94a3b8",
                          margin: 0,
                        }}
                      >
                        {stage.count} opportunities
                      </p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "#10b981",
                          margin: "0 0 4px 0",
                        }}
                      >
                        {formatCurrency(stage.value)}
                      </p>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "#64748b",
                          margin: 0,
                        }}
                      >
                        {percentage.toFixed(1)}% of pipeline
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      height: "8px",
                      backgroundColor: "rgba(15, 23, 42, 0.5)",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${percentage}%`,
                        height: "100%",
                        backgroundColor: color,
                        transition: "width 0.5s",
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <Target
              size={48}
              color="#64748b"
              style={{ margin: "0 auto 16px", opacity: 0.5 }}
            />
            <p style={{ color: "#94a3b8", margin: 0 }}>
              No pipeline data available
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Metric Card Component
function MetricCard({ label, value, icon: Icon, color, subtitle }) {
  return (
    <div
      style={{
        backgroundColor: "rgba(30, 41, 59, 0.3)",
        border: "1px solid rgba(51, 65, 85, 0.5)",
        borderRadius: "16px",
        padding: "24px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: color,
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.2,
          }}
        >
          <Icon size={24} color="#fff" />
        </div>
        <p
          style={{
            fontSize: "13px",
            color: "#94a3b8",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            margin: 0,
          }}
        >
          {label}
        </p>
      </div>
      <h3
        style={{
          fontSize: "32px",
          fontWeight: 700,
          color: "#fff",
          margin: "0 0 4px 0",
        }}
      >
        {value}
      </h3>
      {subtitle && (
        <p style={{ fontSize: "13px", color: "#64748b", margin: 0 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Sidebar({
  sidebarOpen,
  activeTab,
  setActiveTab,
  setFormData,
  setShowForm,
}) {
  return (
    <aside
      style={{
        position: "fixed",
        left: 0,
        top: "80px",
        bottom: 0,
        width: sidebarOpen ? "256px" : "80px",
        backgroundColor: "rgba(15, 23, 42, 0.5)",
        backdropFilter: "blur(20px)",
        borderRight: "1px solid rgba(51, 65, 85, 0.5)",
        transition: "width 0.3s",
        zIndex: 30,
        overflowY: "auto",
      }}
    >
      <nav
        style={{
          padding: "16px",
          paddingBottom: "120px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          const gradients = {
            Home: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
            Account: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
            Contact: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            Lead: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
            Task: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
            Case: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
            Opportunity: "linear-gradient(135deg, #eab308 0%, #f97316 100%)",
            Contract: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            Product2: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
            Order: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
            OrderSC__c: "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)",
            InvoiceSC__c: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
            PaymentSC__c: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            Inventory__c: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
            ShipmentSC__c: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
            CRM_DealSC__c: "linear-gradient(135deg, #ec4899 0%, #a855f7 100%)",
            ProductSC__c: "linear-gradient(135deg, #14b8a6 0%, #10b981 100%)",
            Sales_LineSC__c:
              "linear-gradient(135deg, #84cc16 0%, #22c55e 100%)",
          };

          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setFormData({});
                setShowForm(false);
              }}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                transition: "all 0.2s",
                fontSize: "14px",
                fontWeight: 500,
                background: isActive ? gradients[item.id] : "transparent",
                color: isActive ? "#fff" : "#94a3b8",
                boxShadow: isActive
                  ? "0 4px 12px rgba(139, 92, 246, 0.4)"
                  : "none",
              }}
            >
              <Icon size={20} style={{ flexShrink: 0 }} />
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

function DashboardView({ records, setShowImportModal, setToast }) {
  const [stats, setStats] = useState({
    accounts: 0,
    contacts: 0,
    leads: 0,
    cases: 0,
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [exportingReport, setExportingReport] = useState(false);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const objects = ["Account", "Contact", "Lead", "Case"];
      const counts = {};
      const activities = [];

      for (const obj of objects) {
        const res = await fetch(`${API}/${obj}`);
        const data = await res.json();
        if (data.success) {
          counts[obj.toLowerCase() + "s"] = data.records.length;
          data.records.slice(0, 3).forEach((record) => {
            activities.push({
              type: obj,
              name:
                record.Name ||
                `${record.FirstName || ""} ${record.LastName || ""}`.trim() ||
                record.Subject ||
                "Record",
              date: record.CreatedDate,
              id: record.Id,
            });
          });
        }
      }

      setStats(counts);
      setRecentActivity(
        activities
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 5)
      );
    } catch (err) {
      console.error("Failed to fetch dashboard data", err);
    }
  };

  const statCards = [
    {
      label: "Total Accounts",
      value: stats.accounts,
      icon: Building2,
      color: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
      change: "+12%",
    },
    {
      label: "Active Contacts",
      value: stats.contacts,
      icon: Users,
      color: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      change: "+8%",
    },
    {
      label: "New Leads",
      value: stats.leads,
      icon: Target,
      color: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
      change: "+24%",
    },
    {
      label: "Open Cases",
      value: stats.cases,
      icon: FileText,
      color: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
      change: "-5%",
    },
  ];

  const handleExportReport = async () => {
    setExportingReport(true);
    try {
      // Fetch all data
      const objects = [
        "Account",
        "Contact",
        "Lead",
        "Opportunity",
        "Case",
        "Contract",
      ];
      const allData = {};

      for (const obj of objects) {
        const res = await fetch(`${API}/${obj}`);
        const data = await res.json();
        if (data.success) {
          allData[obj] = data.records;
        }
      }

      // Generate CSV report
      let csv = "CRM SUMMARY REPORT\n";
      csv += `Generated: ${new Date().toLocaleString()}\n\n`;

      // Summary counts
      csv += "SUMMARY\n";
      csv += "Object,Count\n";
      Object.entries(allData).forEach(([obj, records]) => {
        csv += `${obj},${records.length}\n`;
      });
      csv += "\n";

      // Detailed data for each object
      Object.entries(allData).forEach(([objName, records]) => {
        if (records.length > 0) {
          csv += `\n${objName.toUpperCase()}\n`;

          // Get all unique keys from records
          const keys = [...new Set(records.flatMap((r) => Object.keys(r)))];
          csv += keys.join(",") + "\n";

          // Add data rows
          records.forEach((record) => {
            const row = keys.map((key) => {
              const value = record[key];
              if (value === null || value === undefined) return "";
              // Escape commas and quotes in CSV
              const strValue = String(value).replace(/"/g, '""');
              return strValue.includes(",") ? `"${strValue}"` : strValue;
            });
            csv += row.join(",") + "\n";
          });
        }
      });

      // Create download
      const blob = new Blob([csv], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `crm-report-${new Date().toISOString().split("T")[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      // Show success toast
      setToast({ message: "Report exported successfully!", type: "success" });
    } catch (error) {
      console.error("Export failed:", error);
      setToast({
        message: "Failed to export report: " + error.message,
        type: "error",
      });
    } finally {
      setExportingReport(false);
    }
  };

  const quickLinks = [
    {
      label: "Import Data",
      icon: Upload,
      action: () => setShowImportModal(true),
      color: "#8b5cf6",
    },
    {
      label: exportingReport ? "Exporting..." : "Export Report",
      icon: Download,
      action: handleExportReport,
      color: "#3b82f6",
      disabled: exportingReport,
    },
    {
      label: "View Analytics",
      icon: BarChart3,
      action: () => setShowAnalytics(true),
      color: "#10b981",
    },
    {
      label: "Settings",
      icon: Settings,
      action: () => setShowSettings(true),
      color: "#f97316",
    },
  ];

  return (
    <div>
      {showAnalytics && (
        <AnalyticsModal onClose={() => setShowAnalytics(false)} />
      )}
      {showSettings && (
        <SettingsModal
          onClose={() => setShowSettings(false)}
          setToast={setToast}
        />
      )}
      <div style={{ marginBottom: "32px" }}>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "8px",
          }}
        >
          Dashboard
        </h1>
        <p style={{ color: "#94a3b8", margin: 0 }}>
          Here's what's happening with your business today.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px",
          marginBottom: "32px",
        }}
      >
        {statCards.map((stat, idx) => {
          const Icon = stat.icon;
          const isPositive = stat.change.startsWith("+");
          return (
            <div
              key={idx}
              className="animate-fade"
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.5)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(51, 65, 85, 0.5)",
                borderRadius: "16px",
                padding: "24px",
                transition: "all 0.3s",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "14px",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {stat.label}
                </p>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: stat.color,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  }}
                >
                  <Icon size={24} color="#fff" />
                </div>
              </div>
              <h3
                style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 8px 0",
                }}
              >
                {stat.value}
              </h3>
              <p
                style={{
                  color: isPositive ? "#10b981" : "#ef4444",
                  fontSize: "14px",
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                {isPositive ? "↑" : "↓"} {stat.change} from last month
              </p>
            </div>
          );
        })}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "24px",
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(51, 65, 85, 0.5)",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            Recent Activity
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {recentActivity.length > 0 ? (
              recentActivity.map((activity, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px",
                    backgroundColor: "rgba(30, 41, 59, 0.3)",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#10b981",
                      flexShrink: 0,
                    }}
                  ></div>
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#fff",
                        fontWeight: 500,
                        margin: "0 0 4px 0",
                      }}
                    >
                      {activity.type} Created
                    </p>
                    <p
                      style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}
                    >
                      {activity.name}
                    </p>
                  </div>
                  <p style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>
                    {new Date(activity.date).toLocaleDateString()}
                  </p>
                </div>
              ))
            ) : (
              <p
                style={{
                  color: "#64748b",
                  textAlign: "center",
                  padding: "20px 0",
                  margin: 0,
                }}
              >
                No recent activity
              </p>
            )}
          </div>
        </div>

        <div
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(51, 65, 85, 0.5)",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            Quick Links
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "12px",
            }}
          >
            {quickLinks.map((link, idx) => {
              const Icon = link.icon;
              const isDisabled = link.disabled || false;
              return (
                <button
                  key={idx}
                  onClick={isDisabled ? undefined : link.action}
                  disabled={isDisabled}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "20px",
                    backgroundColor: "rgba(30, 41, 59, 0.3)",
                    border: "1px solid rgba(51, 65, 85, 0.5)",
                    borderRadius: "12px",
                    cursor: isDisabled ? "not-allowed" : "pointer",
                    opacity: isDisabled ? 0.5 : 1,
                    transition: "all 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: link.color,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {isDisabled ? (
                      <Loader2
                        className="animate-pulse"
                        size={20}
                        color="#fff"
                      />
                    ) : (
                      <Icon size={20} color="#fff" />
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#e2e8f0",
                      fontWeight: 500,
                    }}
                  >
                    {link.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function ObjectView({
  objectName,
  records,
  formData,
  setFormData,
  handleSubmit,
  loading,
  fetchingRecords,
  showForm,
  setShowForm,
  setShowImportModal,
  fetchRecords,
  setToast,
}) {
  const fields = formConfigs[objectName] || [];
  const navItem = navItems.find((i) => i.id === objectName);
  const Icon = navItem?.icon || Building2;

  // Modal states
  const [viewRecord, setViewRecord] = useState(null);
  const [editRecord, setEditRecord] = useState(null);
  const [deleteRecord, setDeleteRecord] = useState(null);

  const gradients = {
    Account: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
    Contact: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    Lead: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    Task: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
    Case: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
    Opportunity: "linear-gradient(135deg, #eab308 0%, #f97316 100%)",
    Contract: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    Product2: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    Order: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
    OrderSC__c: "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)",
    InvoiceSC__c: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
    PaymentSC__c: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    Inventory__c: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
    ShipmentSC__c: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
    CRM_DealSC__c: "linear-gradient(135deg, #ec4899 0%, #a855f7 100%)",
    ProductSC__c: "linear-gradient(135deg, #14b8a6 0%, #10b981 100%)",
    Sales_LineSC__c: "linear-gradient(135deg, #84cc16 0%, #22c55e 100%)",
  };

  const handleActionSuccess = () => {
    setViewRecord(null);
    setEditRecord(null);
    setDeleteRecord(null);
    fetchRecords();
  };

  return (
    <div>
      {/* Modals */}
      {viewRecord && (
        <ViewDetailsModal
          record={viewRecord}
          objectName={objectName}
          onClose={() => setViewRecord(null)}
        />
      )}
      {editRecord && (
        <EditModal
          record={editRecord}
          objectName={objectName}
          onClose={() => setEditRecord(null)}
          onSuccess={handleActionSuccess}
          setToast={setToast}
        />
      )}
      {deleteRecord && (
        <DeleteModal
          record={deleteRecord}
          objectName={objectName}
          onClose={() => setDeleteRecord(null)}
          onSuccess={handleActionSuccess}
          setToast={setToast}
        />
      )}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "32px",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                background: gradients[objectName],
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              }}
            >
              <Icon size={24} color="#fff" />
            </div>
            <h1
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#fff",
                margin: 0,
              }}
            >
              {navItem?.label || objectName}
            </h1>
          </div>
          <p style={{ color: "#94a3b8", margin: 0 }}>
            Manage your {(navItem?.label || objectName).toLowerCase()} records •{" "}
            {records.length} total
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={() => setShowImportModal(true)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              backgroundColor: "rgba(30, 41, 59, 0.5)",
              color: "#e2e8f0",
              border: "1px solid rgba(51, 65, 85, 0.5)",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <Upload size={18} />
            Import
          </button>
          <button
            onClick={() => setShowForm(!showForm)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <Plus size={20} />
            New {navItem?.label?.slice(0, -1) || objectName}
          </button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: showForm ? "380px 1fr" : "1fr",
          gap: "24px",
        }}
      >
        {showForm && (
          <div
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.5)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(51, 65, 85, 0.5)",
              borderRadius: "16px",
              padding: "24px",
              position: "sticky",
              top: "96px",
              height: "fit-content",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "24px",
              }}
            >
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#fff",
                  margin: 0,
                }}
              >
                Create {navItem?.label?.slice(0, -1) || objectName}
              </h2>
              <button
                onClick={() => setShowForm(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#94a3b8",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {fields.map((field) => (
                <div key={field.name}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#e2e8f0",
                      marginBottom: "8px",
                    }}
                  >
                    {field.label}
                    {field.required && (
                      <span style={{ color: "#ef4444" }}>*</span>
                    )}
                  </label>
                  {field.type === "select" ? (
                    <select
                      value={formData[field.name] || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [field.name]: e.target.value,
                        })
                      }
                      style={{
                        width: "100%",
                        padding: "10px 16px",
                        backgroundColor: "rgba(30, 41, 59, 0.5)",
                        border: "1px solid rgba(51, 65, 85, 0.5)",
                        borderRadius: "12px",
                        color: "#fff",
                        fontSize: "14px",
                      }}
                    >
                      <option value="">-- Select --</option>
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "checkbox" ? (
                    <input
                      type="checkbox"
                      checked={formData[field.name] || false}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [field.name]: e.target.checked,
                        })
                      }
                      style={{ width: "20px", height: "20px" }}
                    />
                  ) : (
                    <input
                      type={field.type || "text"}
                      value={formData[field.name] || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [field.name]: e.target.value,
                        })
                      }
                      style={{
                        width: "100%",
                        padding: "10px 16px",
                        backgroundColor: "rgba(30, 41, 59, 0.5)",
                        border: "1px solid rgba(51, 65, 85, 0.5)",
                        borderRadius: "12px",
                        color: "#fff",
                        fontSize: "14px",
                      }}
                    />
                  )}
                </div>
              ))}

              <button
                onClick={handleSubmit}
                disabled={loading}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  background:
                    "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  opacity: loading ? 0.5 : 1,
                }}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-pulse" size={20} /> Saving...
                  </>
                ) : (
                  <>
                    <Check size={20} /> Save{" "}
                    {navItem?.label?.slice(0, -1) || objectName}
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        <div
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(51, 65, 85, 0.5)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {fetchingRecords ? (
            <div style={{ padding: "48px", textAlign: "center" }}>
              <Loader2
                className="animate-pulse"
                size={48}
                color="#8b5cf6"
                style={{ margin: "0 auto 16px" }}
              />
              <p style={{ color: "#94a3b8", margin: 0 }}>Loading records...</p>
            </div>
          ) : records.length === 0 ? (
            <div style={{ textAlign: "center", padding: "48px" }}>
              <Icon
                size={48}
                color="#475569"
                style={{ margin: "0 auto 16px" }}
              />
              <p
                style={{
                  color: "#94a3b8",
                  margin: "0 0 4px 0",
                  fontWeight: 500,
                }}
              >
                No records found
              </p>
              <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>
                Create your first{" "}
                {(navItem?.label?.slice(0, -1) || objectName).toLowerCase()} or
                import data to get started
              </p>
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr
                    style={{
                      backgroundColor: "rgba(30, 41, 59, 0.5)",
                      borderBottom: "1px solid rgba(51, 65, 85, 0.5)",
                    }}
                  >
                    {fields.slice(0, 5).map((field, idx) => (
                      <th
                        key={idx}
                        style={{
                          padding: "16px 20px",
                          textAlign: "left",
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "#94a3b8",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {field.label}
                      </th>
                    ))}
                    <th
                      style={{
                        padding: "16px 20px",
                        textAlign: "right",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#94a3b8",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((rec, idx) => (
                    <tr
                      key={rec.Id}
                      className="table-row"
                      style={{
                        borderBottom:
                          idx < records.length - 1
                            ? "1px solid rgba(51, 65, 85, 0.3)"
                            : "none",
                        transition: "background-color 0.2s",
                      }}
                    >
                      {fields.slice(0, 5).map((field, fieldIdx) => (
                        <td
                          key={fieldIdx}
                          style={{
                            padding: "16px 20px",
                            fontSize: "14px",
                            color: "#e2e8f0",
                          }}
                        >
                          {field.type === "checkbox"
                            ? rec[field.name]
                              ? "✓"
                              : "✗"
                            : rec[field.name] || "-"}
                        </td>
                      ))}
                      <td style={{ padding: "16px 20px", textAlign: "right" }}>
                        <div
                          style={{
                            display: "flex",
                            gap: "8px",
                            justifyContent: "flex-end",
                          }}
                        >
                          <button
                            onClick={() => setViewRecord(rec)}
                            title="View Details"
                            style={{
                              padding: "6px",
                              backgroundColor: "rgba(59, 130, 246, 0.1)",
                              border: "none",
                              borderRadius: "6px",
                              color: "#3b82f6",
                              cursor: "pointer",
                            }}
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            onClick={() => setEditRecord(rec)}
                            title="Edit"
                            style={{
                              padding: "6px",
                              backgroundColor: "rgba(139, 92, 246, 0.1)",
                              border: "none",
                              borderRadius: "6px",
                              color: "#8b5cf6",
                              cursor: "pointer",
                            }}
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => setDeleteRecord(rec)}
                            title="Delete"
                            style={{
                              padding: "6px",
                              backgroundColor: "rgba(239, 68, 68, 0.1)",
                              border: "none",
                              borderRadius: "6px",
                              color: "#ef4444",
                              cursor: "pointer",
                            }}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
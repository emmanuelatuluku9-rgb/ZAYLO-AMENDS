import { useState, useEffect } from 'react';

const API = 'http://localhost:3001/api';

// Navigation tabs config
const tabs = [
  { id: 'Home', icon: '🏠', label: 'Home' },
  { id: 'Account', icon: '🏢', label: 'Accounts' },
  { id: 'Contact', icon: '👤', label: 'Contacts' },
  { id: 'Lead', icon: '🎯', label: 'Leads' },
  { id: 'Case', icon: '📋', label: 'Cases' },
  { id: 'Opportunity', icon: '💰', label: 'Opportunities' },
];

// Form field configs for each object
const formConfigs = {
  Account: [
    { name: 'Name', label: 'Account Name', required: true },
    { name: 'Industry', label: 'Industry' },
    { name: 'Phone', label: 'Phone' },
  ],
  Contact: [
    { name: 'FirstName', label: 'First Name' },
    { name: 'LastName', label: 'Last Name', required: true },
    { name: 'Email', label: 'Email', type: 'email' },
    { name: 'Phone', label: 'Phone' },
  ],
  Lead: [
    { name: 'FirstName', label: 'First Name' },
    { name: 'LastName', label: 'Last Name', required: true },
    { name: 'Company', label: 'Company', required: true },
    { name: 'Email', label: 'Email', type: 'email' },
  ],
  Case: [
    { name: 'Subject', label: 'Subject', required: true },
    { name: 'Status', label: 'Status', type: 'select', options: ['New', 'Working', 'Escalated', 'Closed'] },
    { name: 'Priority', label: 'Priority', type: 'select', options: ['Low', 'Medium', 'High'] },
  ],
  Opportunity: [
    { name: 'Name', label: 'Opportunity Name', required: true },
    { name: 'StageName', label: 'Stage', required: true, type: 'select', options: ['Prospecting', 'Qualification', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'] },
    { name: 'Amount', label: 'Amount', type: 'number' },
    { name: 'CloseDate', label: 'Close Date', type: 'date', required: true },
  ],
};

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (activeTab !== 'Home') fetchRecords();
  }, [activeTab]);

  const fetchRecords = async () => {
    try {
      const res = await fetch(`${API}/${activeTab}`);
      const data = await res.json();
      if (data.success) setRecords(data.records);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch(`${API}/${activeTab}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setStatus({ type: 'success', message: `✅ ${activeTab} created! ID: ${data.id}` });
        setFormData({});
        fetchRecords();
      } else {
        setStatus({ type: 'error', message: `❌ ${data.error || 'Failed'}` });
      }
    } catch (err) {
      setStatus({ type: 'error', message: `❌ ${err.message}` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.app}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <span style={styles.logo}>⬡⬡⬡</span>
          <span style={styles.appName}>Sales</span>
        </div>
        <nav style={styles.nav}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setFormData({}); setStatus({ type: '', message: '' }); }}
              style={{
                ...styles.navItem,
                borderBottom: activeTab === tab.id ? '3px solid #fff' : '3px solid transparent',
                opacity: activeTab === tab.id ? 1 : 0.8,
              }}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        {activeTab === 'Home' ? (
          <HomeView setActiveTab={setActiveTab} />
        ) : (
          <ObjectView
            objectName={activeTab}
            records={records}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            status={status}
            loading={loading}
          />
        )}
      </main>
    </div>
  );
}

function HomeView({ setActiveTab }) {
  return (
    <div style={styles.homeContainer}>
      <h1 style={styles.homeTitle}>Welcome to Salesforce</h1>
      <p style={styles.homeSubtitle}>Select an object to get started</p>
      <div style={styles.homeCards}>
        {tabs.filter(t => t.id !== 'Home').map((tab) => (
          <div key={tab.id} style={styles.homeCard} onClick={() => setActiveTab(tab.id)}>
            <span style={styles.homeCardIcon}>{tab.icon}</span>
            <span style={styles.homeCardLabel}>{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ObjectView({ objectName, records, formData, setFormData, handleSubmit, status, loading }) {
  const fields = formConfigs[objectName] || [];

  return (
    <div style={styles.objectContainer}>
      <div style={styles.objectHeader}>
        <h1 style={styles.objectTitle}>{tabs.find(t => t.id === objectName)?.icon} New {objectName}</h1>
      </div>

      <div style={styles.contentGrid}>
        {/* Form */}
        <div style={styles.formCard}>
          <h2 style={styles.cardTitle}>Create {objectName}</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            {fields.map((field) => (
              <div key={field.name} style={styles.fieldGroup}>
                <label style={styles.label}>
                  {field.label} {field.required && <span style={styles.required}>*</span>}
                </label>
                {field.type === 'select' ? (
                  <select
                    value={formData[field.name] || ''}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    style={styles.input}
                    required={field.required}
                  >
                    <option value="">-- Select --</option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type || 'text'}
                    value={formData[field.name] || ''}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    style={styles.input}
                    required={field.required}
                  />
                )}
              </div>
            ))}
            <button type="submit" style={styles.submitBtn} disabled={loading}>
              {loading ? 'Saving...' : `Save ${objectName}`}
            </button>
          </form>
          {status.message && (
            <div style={{ ...styles.status, background: status.type === 'success' ? '#d4edda' : '#f8d7da', color: status.type === 'success' ? '#155724' : '#721c24' }}>
              {status.message}
            </div>
          )}
        </div>

        {/* Recent Records */}
        <div style={styles.recordsCard}>
          <h2 style={styles.cardTitle}>Recent {objectName}s</h2>
          {records.length === 0 ? (
            <p style={styles.noRecords}>No records found</p>
          ) : (
            <table style={styles.table}>
              <thead>
                <tr>
                  {fields.slice(0, 3).map((f) => (
                    <th key={f.name} style={styles.th}>{f.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {records.map((rec) => (
                  <tr key={rec.Id} style={styles.tr}>
                    {fields.slice(0, 3).map((f) => (
                      <td key={f.name} style={styles.td}>{rec[f.name] || '-'}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  app: { minHeight: '100vh', background: '#f3f3f3', fontFamily: 'Salesforce Sans, Arial, sans-serif' },
  header: { background: '#0176d3', color: '#fff', padding: '0 20px', display: 'flex', alignItems: 'center', height: '45px' },
  headerLeft: { display: 'flex', alignItems: 'center', gap: '10px', marginRight: '30px' },
  logo: { fontSize: '18px', letterSpacing: '-3px' },
  appName: { fontWeight: '700', fontSize: '16px' },
  nav: { display: 'flex', gap: '5px', height: '100%' },
  navItem: { background: 'none', border: 'none', color: '#fff', padding: '12px 16px', cursor: 'pointer', fontSize: '13px', fontWeight: '500', height: '100%', display: 'flex', alignItems: 'center' },
  main: { padding: '20px' },
  homeContainer: { textAlign: 'center', paddingTop: '60px' },
  homeTitle: { fontSize: '28px', color: '#16325c', marginBottom: '10px' },
  homeSubtitle: { color: '#706e6b', marginBottom: '40px' },
  homeCards: { display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' },
  homeCard: { background: '#fff', borderRadius: '8px', padding: '30px 40px', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', transition: 'transform 0.2s', minWidth: '120px' },
  homeCardIcon: { fontSize: '32px' },
  homeCardLabel: { fontSize: '14px', fontWeight: '600', color: '#16325c' },
  objectContainer: { maxWidth: '1200px', margin: '0 auto' },
  objectHeader: { marginBottom: '20px' },
  objectTitle: { fontSize: '20px', color: '#16325c', margin: 0 },
  contentGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' },
  formCard: { background: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
  recordsCard: { background: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
  cardTitle: { fontSize: '16px', color: '#16325c', marginTop: 0, marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #e5e5e5' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  fieldGroup: { display: 'flex', flexDirection: 'column', gap: '5px' },
  label: { fontSize: '13px', fontWeight: '600', color: '#3e3e3c' },
  required: { color: '#c23934' },
  input: { padding: '8px 12px', border: '1px solid #dddbda', borderRadius: '4px', fontSize: '14px', outline: 'none' },
  submitBtn: { background: '#0176d3', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginTop: '10px' },
  status: { marginTop: '15px', padding: '10px', borderRadius: '4px', fontSize: '14px' },
  table: { width: '100%', borderCollapse: 'collapse' },
  th: { textAlign: 'left', padding: '10px', borderBottom: '2px solid #e5e5e5', fontSize: '12px', fontWeight: '700', color: '#3e3e3c', textTransform: 'uppercase' },
  td: { padding: '10px', borderBottom: '1px solid #e5e5e5', fontSize: '13px', color: '#3e3e3c' },
  tr: { cursor: 'pointer' },
  noRecords: { color: '#706e6b', fontSize: '14px', textAlign: 'center', padding: '20px' },
};

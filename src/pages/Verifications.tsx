import React, { useState, useEffect } from "react";
import { Link,useHistory } from "react-router-dom";

const VerificationsPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const verificationList = [
    { id: 1, name: "Maria Dela Cruz", type: "Mother", status: "Pending" },
    { id: 2, name: "Anna Lopez", type: "BHW", status: "Pending" },
    { id: 3, name: "Jean Santos", type: "Mother", status: "Pending" },
  ];

  const handleLogout = () => {
    // Any logout logic goes here (e.g., clearing session)
    history.push("/mhga-try/"); // Redirect to Home using useHistory
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', height: '100vh', overflow: 'hidden' }}>
      <div style={{ display: 'flex', height: '100vh' }}>
        {/* Sidebar */}
        <aside
          style={{
            width: isMobile ? (menuOpen ? '200px' : '0') : '240px',
            background: '#1e3a8a',
            color: '#fff',
            padding: menuOpen || !isMobile ? '24px 16px' : '0',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            position: isMobile ? 'fixed' : 'relative',
            top: 0,
            left: 0,
            zIndex: 20,
            height: '100vh'
          }}>
          {(!isMobile || menuOpen) && (
            <>
              <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>BHW Center Admin</h1>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link to="/mhga-try/bhwadmindashboard" style={linkStyle}>🏠 Dashboard</Link>
                <Link to="/mhga-try/motherprofilepage" style={linkStyle}>👩 Mother Profiles</Link>
                <Link to="/mhga-try/activity-logs" style={linkStyle}>📋 BHW Activity Logs</Link>
                <Link to="/mhga-try/schedules" style={linkStyle}>🕒 Center Schedules</Link>
                <Link to="/mhga-try/mhga-try/reports" style={linkStyle}>📈 Reports & Statistics</Link>
                <Link to="/mhga-try/verifications" style={linkStyle}>📝 Verifications</Link>
                <Link to="/mhga-try/history" style={linkStyle}>📜 History & Logs</Link>
                <Link to="/mhga-try/settings" style={linkStyle}>⚙️ Admin Settings</Link>
              </nav>
              <div
                onClick={handleLogout}
                style={{ marginTop: 'auto', fontSize: '14px', cursor: 'pointer', paddingTop: '12px' }}>
                🔌 Log out
              </div>
            </>
          )}
        </aside>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)} style={menuButtonStyle}>
            ☰ Menu
          </button>
        )}

        {/* Main Panel */}
        <main style={{ flex: 1, background: '#f1f5f9', overflowY: 'auto', padding: '24px', maxHeight: '100vh' }}>
          <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '10px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)', minWidth: '320px' }}>
            <h2 style={{ fontSize: '22px', marginBottom: '12px' }}>📝 Verifications</h2>
            <p>This page allows the admin to verify newly registered users such as mothers and BHWs. Admins can approve or deny pending verifications here.</p>
            <table style={{ width: '100%', marginTop: '24px', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#e0e7ff' }}>
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>Type</th>
                  <th style={thStyle}>Status</th>
                  <th style={thStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {verificationList.map((v) => (
                  <tr key={v.id}>
                    <td style={tdStyle}>{v.name}</td>
                    <td style={tdStyle}>{v.type}</td>
                    <td style={tdStyle}>{v.status}</td>
                    <td style={tdStyle}>
                      <button style={approveBtn}>Approve</button>
                      <button style={denyBtn}>Deny</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

const thStyle: React.CSSProperties = {
  padding: '12px',
  textAlign: 'left',
  background: '#c7d2fe',
  borderBottom: '2px solid #94a3b8'
};

const tdStyle: React.CSSProperties = {
  padding: '10px',
  borderBottom: '1px solid #e2e8f0'
};

const approveBtn: React.CSSProperties = {
  background: '#10b981',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  padding: '6px 10px',
  marginRight: '6px',
  cursor: 'pointer'
};

const denyBtn: React.CSSProperties = {
  background: '#ef4444',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  padding: '6px 10px',
  cursor: 'pointer'
};

const linkStyle: React.CSSProperties = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '16px',
  cursor: 'pointer'
};

const menuButtonStyle: React.CSSProperties = {
  position: 'fixed',
  top: 10,
  left: 10,
  background: '#1e3a8a',
  color: 'white',
  padding: '8px 12px',
  border: 'none',
  borderRadius: '6px',
  zIndex: 30
};

export default VerificationsPage;

import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const HistoryLogsPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logs = [
    { id: 1, user: 'BHW Maria', action: 'Edited checkup record', date: '2025-07-20 10:21AM' },
    { id: 2, user: 'Mother Anna', action: 'Submitted pregnancy form', date: '2025-07-19 04:02PM' },
    { id: 3, user: 'Admin', action: 'Approved new user', date: '2025-07-18 11:40AM' },
    { id: 4, user: 'BHW Jean', action: 'Added health education session', date: '2025-07-18 10:15AM' }
  ];

    const handleLogout = () => {
    history.push("/mhga-try/"); 
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', background: '#f1f5f9' }}>
      <div style={{ display: 'flex' }}>
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
                <Link to="/mhga-try/reports" style={linkStyle}>📈 Reports & Statistics</Link>
                <Link to="/mhga-try/verifications" style={linkStyle}>📝 Verifications</Link>
                <Link to="/mhga-try/history" style={linkStyle}>📜 History & Logs</Link>
                <Link to="/mhga-try/settings" style={linkStyle}>⚙️ Admin Settings</Link>
              </nav>
              <div
                onClick={handleLogout}
                style={{ marginTop: "auto", fontSize: "14px", cursor: "pointer", paddingTop: "12px" }}>
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
        <main style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
          <div style={{ background: '#fff', padding: '24px', borderRadius: '10px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '22px', marginBottom: '12px' }}>📜 History & Logs</h2>
            <p style={{ marginBottom: '16px' }}>This page logs user actions such as form submissions, edits, deletions, or system updates. It's helpful for monitoring system activity and accountability.</p>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '12px' }}>
              <thead>
                <tr style={{ background: '#f3f4f6', textAlign: 'left' }}>
                  <th style={thStyle}>User</th>
                  <th style={thStyle}>Action</th>
                  <th style={thStyle}>Date</th>
                </tr>
              </thead>
              <tbody>
                {logs.map(log => (
                  <tr key={log.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={tdStyle}>{log.user}</td>
                    <td style={tdStyle}>{log.action}</td>
                    <td style={tdStyle}>{log.date}</td>
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
  padding: '12px 16px',
  fontWeight: 'bold',
  color: '#334155'
};

const tdStyle: React.CSSProperties = {
  padding: '12px 16px',
  color: '#475569'
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

export default HistoryLogsPage;

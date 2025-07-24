import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const MotherProfilesPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const effectiveMarginLeft = !isMobile && menuOpen ? '240px' : '0';

      const handleLogout = () => {
    history.push("/mhga-try/"); 
  };

  return (
    <div style={{ display: 'flex', fontFamily: 'Arial, sans-serif', position: 'relative' }}>
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

      {/* Main Content */}
      <main style={{ flex: 1, background: '#f1f5f9', overflowY: 'auto', minHeight: '100vh', marginLeft: effectiveMarginLeft, padding: '24px', transition: 'margin-left 0.3s ease' }}>
        <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '10px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>Mother Profiles</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#e2e8f0' }}>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Pregnancy Details</th>
                <th style={thStyle}>Health Records</th>
                <th style={thStyle}>Assigned BHW</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Maria Dela Cruz</td>
                <td style={tdStyle}>32 weeks, 2nd pregnancy</td>
                <td style={tdStyle}>Normal BP, Prenatal #3</td>
                <td style={tdStyle}>BHW Ana Reyes</td>
                <td style={tdStyle}><button style={btnStyle}>View</button> <button style={btnStyle}>Edit</button> <button style={btnStyle}>Monitor</button></td>
              </tr>
              <tr>
                <td style={tdStyle}>Anna Lopez</td>
                <td style={tdStyle}>18 weeks, 1st pregnancy</td>
                <td style={tdStyle}>High BP alert, Prenatal #2</td>
                <td style={tdStyle}>BHW Carla Mendez</td>
                <td style={tdStyle}><button style={btnStyle}>View</button> <button style={btnStyle}>Edit</button> <button style={btnStyle}>Monitor</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
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

const thStyle: React.CSSProperties = {
  padding: '12px',
  textAlign: 'left',
  borderBottom: '2px solid #ccc'
};

const tdStyle: React.CSSProperties = {
  padding: '12px',
  borderBottom: '1px solid #e5e7eb'
};

const btnStyle: React.CSSProperties = {
  padding: '6px 10px',
  marginRight: '4px',
  background: '#3b82f6',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default MotherProfilesPage;

import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const AdminSettingsPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

        {/* Main Panel */}
        <main style={{ flex: 1, background: '#f1f5f9', overflowY: 'auto', padding: '24px', maxHeight: '100vh' }}>
          <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '10px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '22px', marginBottom: '12px' }}>⚙️ Admin Settings</h2>
            <p style={{ marginBottom: '16px' }}>Customize preferences, permissions, and system-level configurations for administrators and users.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={settingBox}>
                <h4>🔔 Notification Preferences</h4>
                <p>Enable or disable system alerts and notification emails.</p>
              </div>

              <div style={settingBox}>
                <h4>🔑 Password Management</h4>
                <p>Allow admins to reset credentials and set password rules for users.</p>
              </div>

              <div style={settingBox}>
                <h4>👥 Roles & Permissions</h4>
                <p>Manage user access levels like Admin, BHW, or Registered Mother.</p>
              </div>

              <div style={settingBox}>
                <h4>🗄️ Data Retention & Backup</h4>
                <p>Configure retention rules, automated backups, and recovery policies.</p>
              </div>

              <div style={settingBox}>
                <h4>🔒 Security & Login</h4>
                <p>Set up two-factor authentication (2FA), session timeouts, and failed login alerts.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const settingBox: React.CSSProperties = {
  background: '#e0f2fe',
  padding: '16px',
  borderRadius: '10px',
  boxShadow: '0 1px 6px rgba(0,0,0,0.1)'
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

export default AdminSettingsPage;

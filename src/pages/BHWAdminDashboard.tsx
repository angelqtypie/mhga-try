import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const BHWAdminDashboard: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
        const handleLogout = () => {
    history.push("/"); 
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
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
                <Link to="/bhwadmindashboard" style={linkStyle}>🏠 Dashboard</Link>
                <Link to="/motherprofilepage" style={linkStyle}>👩 Mother Profiles</Link>
                <Link to="/activity-logs" style={linkStyle}>📋 BHW Activity Logs</Link>
                <Link to="/schedules" style={linkStyle}>🕒 Center Schedules</Link>
                <Link to="/reports" style={linkStyle}>📈 Reports & Statistics</Link>
                <Link to="/verifications" style={linkStyle}>📝 Verifications</Link>
                <Link to="/history" style={linkStyle}>📜 History & Logs</Link>
                <Link to="/settings" style={linkStyle}>⚙️ Admin Settings</Link>
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
        <main style={{ flex: 1, background: '#f1f5f9', overflowY: 'auto', padding: '24px' }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/motherprofilepage" style={cardLinkStyle}>
              <div style={cardStyle}>
                <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#22c55e' }}>✅ 22</div>
                <div>Active Pregnant Mothers</div>
              </div>
            </Link>
            <Link to="/risk-cases" style={cardLinkStyle}>
              <div style={cardStyle}>
                <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#f97316' }}>🚨 3</div>
                <div>High-Risk Cases This Week</div>
              </div>
            </Link>
            <Link to="/unresponded" style={cardLinkStyle}>
              <div style={cardStyle}>
                <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#e11d48' }}>🕒 5</div>
                <div>Unresponded Reports over 24 hrs</div>
              </div>
            </Link>
            <Link to="/verifications" style={cardLinkStyle}>
              <div style={cardStyle}>
                <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#3b82f6' }}>👤 2</div>
                <div>New Unverified Users</div>
              </div>
            </Link>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '10px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)', marginTop: '24px' }}>
            <h2 style={{ fontSize: '22px', marginBottom: '8px' }}>Welcome to the BHW Center Dashboard</h2>
            <h4 style={{ color: '#334155', marginBottom: '16px' }}>Barangay Alae – Maternal Health Monitoring</h4>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li>Monitor high-risk pregnancy cases across all puroks</li>
              <li>Oversee the activities and responses of assigned BHWs</li>
              <li>Track maternal wellness data, check-up compliance, and alerts</li>
              <li>Manage scheduling blockers for health center availability</li>
              <li>Verify and approve new registrations (mothers & BHWs)</li>
              <li>Generate reports for health status and risk trends</li>
            </ul>
            <p style={{ marginTop: '16px', fontStyle: 'italic', color: '#475569' }}>
              “Strengthen maternal health guidance and awareness through <b>digital tools</b> in the community.”<br />
              <span style={{ fontSize: '14px' }}>
                Empowering barangay health systems through simple, accessible technology for every mother's safe journey.
              </span>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  flex: 1,
  background: '#fff',
  padding: '16px',
  borderRadius: '10px',
  textAlign: 'center',
  boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
  minWidth: '240px',
  marginBottom: '16px'
};

const linkStyle: React.CSSProperties = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '16px',
  cursor: 'pointer'
};

const cardLinkStyle: React.CSSProperties = {
  textDecoration: 'none',
  flex: 1,
  minWidth: '220px'
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

export default BHWAdminDashboard;

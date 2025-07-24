import React, { useState, useEffect } from "react";
import { Link, useHistory} from "react-router-dom";

const CenterSchedulesPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const schedules = [
    { date: '2025-07-25', time: '08:00 AM - 10:00 AM', activity: 'Prenatal Checkups', status: 'Available' },
    { date: '2025-07-25', time: '10:00 AM - 12:00 PM', activity: 'Vaccination Session', status: 'Full' },
    { date: '2025-07-26', time: '01:00 PM - 03:00 PM', activity: 'Health Orientation', status: 'Available' },
    { date: '2025-07-26', time: '03:00 PM - 05:00 PM', activity: 'Emergency Consultations', status: 'Full' },
  ];

  const getStatusStyle = (status: string) => ({
    color: status === 'Available' ? '#22c55e' : '#ef4444',
    fontWeight: 'bold'
  });

    const handleLogout = () => {
    history.push("/mhga-try/"); 
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
        <main style={{ flex: 1, background: '#f1f5f9', overflowY: 'auto', padding: '24px' }}>
          <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '10px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '22px', marginBottom: '12px' }}>🕒 Center Schedules</h2>
            <p style={{ marginBottom: '16px' }}>
              This page displays upcoming health center activities. Use this to view availability and prevent overbooking.
            </p>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#e2e8f0' }}>
                  <th style={thStyle}>Date</th>
                  <th style={thStyle}>Time</th>
                  <th style={thStyle}>Activity</th>
                  <th style={thStyle}>Status</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((item, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f8fafc' : '#fff' }}>
                    <td style={tdStyle}>{item.date}</td>
                    <td style={tdStyle}>{item.time}</td>
                    <td style={tdStyle}>{item.activity}</td>
                    <td style={{ ...tdStyle, ...getStatusStyle(item.status) }}>{item.status}</td>
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
  textAlign: 'left',
  padding: '12px 8px',
  fontWeight: 'bold',
  borderBottom: '2px solid #cbd5e1'
};

const tdStyle: React.CSSProperties = {
  padding: '10px 8px',
  borderBottom: '1px solid #e2e8f0',
  fontSize: '15px'
};

export default CenterSchedulesPage;

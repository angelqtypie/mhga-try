import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { LineChart, Line, PieChart, Pie, Cell, BarChart, Bar, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ReportsStatisticsPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const checkupData = [
    { month: 'Jan', visits: 12 },
    { month: 'Feb', visits: 18 },
    { month: 'Mar', visits: 10 },
    { month: 'Apr', visits: 22 },
    { month: 'May', visits: 14 },
    { month: 'Jun', visits: 16 },
  ];

  const riskData = [
    { name: 'Low', value: 60 },
    { name: 'Medium', value: 25 },
    { name: 'High', value: 15 },
  ];

  const responseRate = [
    { name: 'Week 1', rate: 70 },
    { name: 'Week 2', rate: 85 },
    { name: 'Week 3', rate: 60 },
    { name: 'Week 4', rate: 90 },
  ];

  const scheduleData = [
    { day: 'Mon', filled: 20 },
    { day: 'Tue', filled: 45 },
    { day: 'Wed', filled: 30 },
    { day: 'Thu', filled: 50 },
    { day: 'Fri', filled: 40 },
  ];

  const COLORS = ['#10b981', '#facc15', '#ef4444'];
   
  const handleLogout = () => {
    history.push("/mhga-try/"); 
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
        <main style={{ flex: 1, background: '#f1f5f9', overflowY: 'auto', padding: '24px', height: '100vh' }}>
          <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '10px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)', minWidth: '320px' }}>
            <h2 style={{ fontSize: '22px', marginBottom: '12px' }}>📈 Reports & Statistics</h2>
            <p style={{ marginBottom: '24px' }}>This page provides charts and analytics based on maternal health data, risk levels, and system usage by BHWs and mothers.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              <div style={chartBox}>
                <h3>📊 Monthly Checkup Trends</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={checkupData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="visits" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div style={chartBox}>
                <h3>🎯 Risk Distribution</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie data={riskData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label>
                      {riskData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div style={chartBox}>
                <h3>🧑‍⚕️ BHW Response Rate</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={responseRate}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="rate" fill="#22c55e" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div style={chartBox}>
                <h3>📅 Schedule Utilization</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={scheduleData}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="filled" stroke="#f97316" fill="#fde68a" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const chartBox: React.CSSProperties = {
  background: '#e0f2fe',
  padding: '16px',
  borderRadius: '10px',
  boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
  overflowX: 'auto'
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

export default ReportsStatisticsPage;

import React from "react";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', background: '#fff', padding: '16px' }}>
      <div style={{ width: '100%', maxWidth: '480px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(20px, 5vw, 28px)', fontWeight: 'bold', color: '#D63384', marginBottom: '8px' }}>
          Maternal Health System
        </h1>
        <p style={{ fontSize: 'clamp(12px, 4vw, 16px)', color: '#666', marginBottom: '32px' }}>
          Alae, Manolo Fortich, Bukidnon
        </p>

        <button
          onClick={() => history.push("/bhwadmindashboard")}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '16px',
            background: '#D63384',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: 'clamp(14px, 4vw, 18px)'
          }}
        >
          BHW Admin Dashboard
        </button>

        <button
          onClick={() => history.push("/motherdashboard")}
          style={{
            width: '100%',
            padding: '12px',
            background: '#F783AC',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: 'clamp(14px, 4vw, 18px)'
          }}
        >
          Mother Dashboard
        </button>

        <p style={{ marginTop: '32px', fontSize: '12px', color: '#aaa' }}>
          By: Rayon, Ballaso, Gogo, Gundaya – 2025
        </p>
      </div>
    </div>
  );
};

export default Home;
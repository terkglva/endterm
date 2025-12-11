// src/pages/Offline.jsx
import React from 'react';

const Offline = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      padding: '40px 20px',
      background: 'linear-gradient(135deg, #1d1d1d 0%, #2a2a2a 100%)'
    }}>
      {/* Portal Animation */}
      <div style={{
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        border: '5px solid var(--color-portal-green)',
        boxShadow: '0 0 30px var(--color-portal-green), inset 0 0 30px var(--color-portal-green)',
        animation: 'pulse 2s infinite',
        marginBottom: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '5rem'
      }}>
        🌀
      </div>

      <h1 style={{
        fontSize: '3rem',
        color: 'var(--color-acid-purple)',
        marginBottom: '20px',
        textShadow: '0 0 10px rgba(154, 78, 219, 0.5)'
      }}>
        Portal Malfunction
      </h1>

      <p style={{
        fontSize: '1.3rem',
        color: 'var(--color-text-dim)',
        maxWidth: '600px',
        marginBottom: '15px',
        lineHeight: '1.6'
      }}>
        Looks like you're disconnected from the multiverse.
      </p>

      <p style={{
        fontSize: '1rem',
        color: 'var(--color-text-light)',
        maxWidth: '500px',
        marginBottom: '40px'
      }}>
        Check your interdimensional connection and try again.
      </p>

      <button 
        onClick={() => window.location.reload()} 
        className="cta-button"
        style={{
          padding: '15px 40px',
          fontSize: '1.1rem'
        }}
      >
        🔄 Retry Connection
      </button>

      <div style={{
        marginTop: '60px',
        padding: '20px',
        backgroundColor: 'rgba(104, 237, 41, 0.1)',
        borderRadius: '10px',
        border: '1px solid var(--color-portal-green)',
        maxWidth: '500px'
      }}>
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--color-portal-green)',
          margin: 0
        }}>
          💡 <strong>Tip:</strong> Some features may still work offline thanks to our service worker caching!
        </p>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default Offline;
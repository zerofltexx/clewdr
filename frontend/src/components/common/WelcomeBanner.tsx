import React from 'react';

interface WelcomeBannerProps {
  username?: string;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ username = 'Guest' }) => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem',
      borderRadius: '12px',
      color: 'white',
      marginBottom: '2rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 'bold' }}>
        Welcome to ClewdR, {username}! 👋
      </h2>
      <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>
        High-Performance LLM Proxy for Claude and Gemini
      </p>
    </div>
  );
};

export default WelcomeBanner;

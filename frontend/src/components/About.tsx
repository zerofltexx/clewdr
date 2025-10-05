import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ color: '#2563eb', marginBottom: '1rem' }}>About This Project</h1>
      <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
        This is a test page created to demonstrate a pull request workflow.
      </p>
      <div style={{
        backgroundColor: '#f0f9ff',
        border: '2px solid #2563eb',
        borderRadius: '8px',
        padding: '1.5rem',
        marginTop: '2rem'
      }}>
        <h2 style={{ color: '#1e40af', marginTop: 0 }}>Features</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Simple and clean design</li>
          <li>Built with React and TypeScript</li>
          <li>Ready for integration</li>
        </ul>
      </div>
      <footer style={{
        marginTop: '2rem',
        paddingTop: '1rem',
        borderTop: '1px solid #e5e7eb',
        color: '#6b7280',
        fontSize: '0.875rem'
      }}>
        <p>Created: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
};

export default About;

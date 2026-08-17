import React from 'react';
import { personalInfo } from '../../data/portfolioData';

export const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '40px 0',
      background: 'rgba(10, 11, 30, 0.95)',
      textAlign: 'center'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 700 }}>
            <span style={{ color: 'var(--accent-cyan)' }}>&lt;</span>
            <span className="gradient-text">AK</span>
            <span style={{ color: 'var(--accent-purple)' }}>/&gt;</span>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
            Designing, Scaling, and Deploying Autonomous AI Systems.
          </p>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
            © {new Date().getFullYear()} {personalInfo.name}. Built with React 19 & Vite.
          </p>
        </div>
      </div>
    </footer>
  );
};

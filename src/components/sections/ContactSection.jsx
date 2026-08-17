import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" style={{ padding: '100px 0' }}>
      <div className="container">
        <div className="glass-panel" style={{
          padding: '60px 40px',
          textAlign: 'center',
          maxWidth: '850px',
          margin: '0 auto',
          position: 'relative'
        }}>
          <div className="section-tag" style={{ margin: '0 auto 16px auto' }}>
            <Send size={14} />
            <span>Get in Touch</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '16px' }}>
            Let's Architect <span className="gradient-text">Intelligent Systems</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 36px auto' }}>
            Whether you are building complex multi-agent swarms, enterprise RAG pipelines, or autonomous self-healing engines — let's connect and build something impactful.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '40px'
          }}>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-primary"
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Mail size={16} />
              <span>Send Direct Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="btn btn-glass"
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              {copied ? <CheckCircle2 size={16} style={{ color: 'var(--accent-green)' }} /> : <Mail size={16} />}
              <span>{copied ? 'Email Copied!' : personalInfo.email}</span>
            </button>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={18} />
              <span>{personalInfo.location}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

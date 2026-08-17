import React, { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Navbar = ({ activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Overview' },
    { id: 'projects', label: 'Systems & Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Technical Arsenal' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNav = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(12, 10, 9, 0.85)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderBottom: '1px solid var(--border-color)',
      padding: '16px 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav('hero'); }}
          style={{
            textDecoration: 'none',
            fontFamily: 'var(--font-mono)',
            fontSize: '1.05rem',
            fontWeight: 800,
            color: 'var(--text-main)',
            letterSpacing: '1px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span style={{ color: 'var(--accent-amber)' }}>
            // AJEETHKUMAR
          </span>
          <span style={{
            fontSize: '0.68rem',
            padding: '2px 6px',
            borderRadius: '4px',
            background: 'rgba(245, 158, 11, 0.12)',
            color: 'var(--accent-gold)',
            border: '1px solid rgba(245, 158, 11, 0.25)'
          }}>AI</span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'none', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeSection === item.id ? 'var(--accent-amber)' : 'var(--text-muted)',
                fontSize: '0.88rem',
                fontWeight: activeSection === item.id ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                position: 'relative'
              }}
            >
              {item.label}
              {activeSection === item.id && (
                <span style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '16px',
                  height: '2px',
                  background: 'var(--accent-amber)',
                  borderRadius: '2px'
                }} />
              )}
            </button>
          ))}
        </div>

        {/* Action Button & Links */}
        <div style={{ display: 'none', alignItems: 'center', gap: '16px' }} className="desktop-nav">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', transition: 'all 0.2s ease' }}
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', transition: 'all 0.2s ease' }}
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <button
            onClick={() => handleNav('contact')}
            className="warm-btn warm-btn-primary"
            style={{ padding: '8px 18px', fontSize: '0.82rem' }}
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'transparent', border: 'none', color: '#ffffff', cursor: 'pointer' }}
          className="mobile-btn"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          background: 'var(--theme-bg)',
          borderBottom: '1px solid var(--border-color)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                fontSize: '1rem',
                textAlign: 'left',
                padding: '6px 0'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          .mobile-btn { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

import React, { useState } from 'react';
import { Menu, X, Terminal, Cpu, Briefcase, Sparkles, Send, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Navbar = ({ activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Overview' },
    { id: 'projects', label: 'Architectures' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Arsenal' },
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
      background: 'rgba(3, 7, 18, 0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '16px 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Sleek Monospace Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav('hero'); }}
          style={{
            textDecoration: 'none',
            fontFamily: 'var(--font-mono)',
            fontSize: '1rem',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '1px'
          }}
        >
          <span style={{ color: 'var(--accent-indigo-light)' }}>//</span> AJEETHKUMAR.AI
        </a>

        {/* Clean Desktop Navigation Links */}
        <div style={{ display: 'none', gap: '32px', alignItems: 'center' }} className="desktop-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeSection === item.id ? '#ffffff' : 'var(--text-secondary)',
                fontSize: '0.88rem',
                fontWeight: activeSection === item.id ? 600 : 500,
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Button & External Links */}
        <div style={{ display: 'none', alignItems: 'center', gap: '16px' }} className="desktop-menu">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', transition: 'var(--transition-fast)' }}
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', transition: 'var(--transition-fast)' }}
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <button
            onClick={() => handleNav('contact')}
            className="btn-enterprise btn-primary-dark"
            style={{ padding: '7px 16px', fontSize: '0.82rem' }}
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Toggle */}
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
          background: 'var(--bg-base)',
          borderBottom: '1px solid var(--border-subtle)',
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
          .desktop-menu { display: flex !important; }
          .mobile-btn { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

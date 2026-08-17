import React, { useState } from 'react';
import { Menu, X, Terminal, Cpu, Briefcase, Sparkles, Send, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Navbar = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Overview', icon: Sparkles },
    { id: 'projects', label: 'Systems & Projects', icon: Cpu },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Technical Arsenal', icon: Terminal },
    { id: 'contact', label: 'Contact', icon: Send }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(10, 11, 30, 0.75)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(139, 92, 246, 0.15)',
      padding: '14px 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            fontFamily: 'var(--font-mono)',
            fontSize: '1.2rem',
            fontWeight: 700,
            color: '#ffffff'
          }}
        >
          <span style={{ color: 'var(--accent-cyan)' }}>&lt;</span>
          <span className="gradient-text">AK</span>
          <span style={{ color: 'var(--accent-purple)' }}>/&gt;</span>
        </a>

        {/* Desktop Nav Links */}
        <div style={{ display: 'none', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeSection === item.id ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                fontSize: '0.92rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <item.icon size={15} />
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Button & Social */}
        <div style={{ display: 'none', alignItems: 'center', gap: '16px' }} className="desktop-nav">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', transition: 'var(--transition-smooth)' }}
            aria-label="GitHub Profile"
          >
            <Github size={19} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', transition: 'var(--transition-smooth)' }}
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={19} />
          </a>
          <button
            onClick={() => handleNavClick('contact')}
            className="btn btn-primary"
            style={{ padding: '8px 18px', fontSize: '0.85rem' }}
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            padding: '4px'
          }}
          className="mobile-toggle"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(10, 11, 30, 0.98)',
          borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeSection === item.id ? 'var(--accent-cyan)' : 'var(--text-primary)',
                fontSize: '1.05rem',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '8px 0'
              }}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="btn btn-primary"
            style={{ marginTop: '8px', width: '100%' }}
          >
            Get in Touch
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

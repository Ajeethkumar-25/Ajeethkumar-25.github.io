import React, { useState } from 'react';
import { Cpu, ExternalLink, Sparkles, CheckCircle2, ChevronRight, Layers, Database, ShieldCheck } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Systems' },
    { id: 'agentic', label: 'Agentic & Multi-Agent' },
    { id: 'rag', label: 'Knowledge Graph & RAG' },
    { id: 'testing', label: 'AST & Self-Healing' },
    { id: 'cloud', label: 'Cloud & Benchmarking' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" style={{ padding: '100px 0', background: 'rgba(10, 11, 30, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag">
            <Cpu size={14} />
            <span>Production Architectures</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">AI Systems & Projects</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Production-grade multi-agent swarms, self-correcting cognitive engines, AST code analyzers, and domain-contained RAG chatbots.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '48px'
        }}>
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                background: activeFilter === filter.id ? 'var(--accent-purple)' : 'rgba(255, 255, 255, 0.05)',
                color: activeFilter === filter.id ? '#ffffff' : 'var(--text-secondary)',
                border: `1px solid ${activeFilter === filter.id ? 'var(--accent-purple)' : 'rgba(255, 255, 255, 0.1)'}`,
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-smooth)'
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '32px'
        }}>
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Card Top */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px'
                }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-purple)' }}>
                    SYS // {proj.number}
                  </span>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    background: proj.badgeColor === 'cyan' ? 'rgba(6, 182, 212, 0.15)' : 'rgba(139, 92, 246, 0.15)',
                    color: proj.badgeColor === 'cyan' ? 'var(--accent-cyan)' : 'var(--accent-purple)',
                    border: `1px solid ${proj.badgeColor === 'cyan' ? 'rgba(6, 182, 212, 0.3)' : 'rgba(139, 92, 246, 0.3)'}`
                  }}>
                    {proj.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px', lineHeight: 1.3 }}>
                  {proj.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  {proj.tagline}
                </p>

                {/* Key Bullet Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {proj.highlights.slice(0, 2).map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                      <CheckCircle2 size={14} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom */}
              <div>
                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                  {proj.tags.slice(0, 5).map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '3px 9px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.74rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Metrics & Modal Action */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    {proj.stats.slice(0, 2).map((st, idx) => (
                      <div key={idx}>
                        <div style={{ fontWeight: 800, fontSize: '1rem', color: '#ffffff' }}>{st.value}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{st.label}</div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(proj)}
                    style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      color: 'var(--accent-purple)',
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'var(--transition-smooth)'
                    }}
                  >
                    <span>Inspect</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Architecture Modal */}
        {selectedProject && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}>
            <div style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-glow)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '720px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: '36px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(139, 92, 246, 0.15)',
                  color: 'var(--accent-purple)'
                }}>
                  {selectedProject.badge}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: 'none',
                    color: '#ffffff',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer'
                  }}
                >
                  Close ✕
                </button>
              </div>

              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '16px' }}>
                {selectedProject.title}
              </h2>

              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '24px', fontSize: '0.96rem' }}>
                {selectedProject.description}
              </p>

              <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '12px', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Key Engineering Highlights
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9rem', color: '#e2e8f0' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-green)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '12px', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Production Tech Stack
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'rgba(139, 92, 246, 0.15)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#ffffff'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

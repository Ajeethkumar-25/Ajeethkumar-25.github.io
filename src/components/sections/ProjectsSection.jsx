import React, { useState } from 'react';
import { Cpu, CheckCircle2, ChevronRight } from 'lucide-react';
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
    <section id="projects" style={{ padding: '100px 0', borderTop: '1px solid var(--aurora-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="aurora-gradient-badge" style={{ marginBottom: '16px' }}>
            <Cpu size={14} />
            <span>Production AI Systems</span>
          </div>
          <h2 className="aurora-gradient-text" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '16px' }}>
            Featured AI Systems & Projects
          </h2>
          <p style={{ color: 'var(--aurora-text-muted)', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto' }}>
            Production-grade multi-agent swarms, self-correcting cognitive engines, AST code analyzers, and domain-contained RAG chatbots.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '48px'
        }}>
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                background: activeFilter === filter.id ? 'linear-gradient(135deg, var(--aurora-cyan), var(--aurora-indigo))' : 'rgba(255, 255, 255, 0.04)',
                color: activeFilter === filter.id ? '#ffffff' : 'var(--aurora-text-muted)',
                border: `1px solid ${activeFilter === filter.id ? 'transparent' : 'var(--aurora-border)'}`,
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.86rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeFilter === filter.id ? '0 4px 15px rgba(56, 189, 248, 0.4)' : 'none'
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
          gap: '28px'
        }}>
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="aurora-glass-card"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px'
                }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--aurora-cyan)' }}>
                    SYS // {proj.number}
                  </span>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    background: proj.badgeColor === 'cyan' ? 'rgba(34, 211, 238, 0.12)' : 'rgba(99, 102, 241, 0.12)',
                    color: proj.badgeColor === 'cyan' ? 'var(--aurora-cyan)' : 'var(--aurora-indigo)',
                    border: `1px solid ${proj.badgeColor === 'cyan' ? 'rgba(34, 211, 238, 0.25)' : 'rgba(99, 102, 241, 0.25)'}`
                  }}>
                    {proj.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px', lineHeight: 1.3, color: '#ffffff' }}>
                  {proj.title}
                </h3>

                <p style={{ color: 'var(--aurora-text-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  {proj.tagline}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {proj.highlights.slice(0, 2).map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                      <CheckCircle2 size={14} style={{ color: 'var(--aurora-cyan)', flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                  {proj.tags.slice(0, 5).map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--aurora-border)',
                        padding: '3px 9px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.74rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--aurora-text-muted)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--aurora-border)'
                }}>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    {proj.stats.slice(0, 2).map((st, idx) => (
                      <div key={idx}>
                        <div style={{ fontWeight: 800, fontSize: '1rem', color: '#ffffff', fontFamily: 'var(--font-mono)' }}>{st.value}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--aurora-text-subtle)' }}>{st.label}</div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(proj)}
                    style={{
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      color: 'var(--aurora-cyan)',
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'all 0.2s ease'
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
            background: 'rgba(3, 7, 18, 0.85)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}>
            <div className="aurora-glass-card" style={{
              maxWidth: '700px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: '36px',
              border: '1px solid var(--aurora-border-hover)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(56, 189, 248, 0.15)',
                  color: 'var(--aurora-cyan)'
                }}>
                  {selectedProject.badge}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
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

              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '16px', color: '#ffffff' }}>
                {selectedProject.title}
              </h2>

              <p style={{ color: 'var(--aurora-text-muted)', lineHeight: '1.7', marginBottom: '24px', fontSize: '0.96rem' }}>
                {selectedProject.description}
              </p>

              <h4 style={{ color: 'var(--aurora-cyan)', marginBottom: '12px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'var(--font-mono)' }}>
                Key Engineering Highlights
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9rem', color: '#e2e8f0' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--aurora-emerald)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <h4 style={{ color: 'var(--aurora-cyan)', marginBottom: '12px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'var(--font-mono)' }}>
                Production Tech Stack
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
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

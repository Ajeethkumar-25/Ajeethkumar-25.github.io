import React, { useState } from 'react';
import { ChevronRight, CheckCircle2, ArrowUpRight, Terminal, Layers, Sparkles } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeModal, setActiveModal] = useState(null);

  const categories = [
    { id: 'all', label: 'All Architectures' },
    { id: 'agentic', label: 'Agentic & Multi-Agent' },
    { id: 'rag', label: 'Knowledge Graph & RAG' },
    { id: 'testing', label: 'AST & Testing' },
    { id: 'cloud', label: 'Cloud & Benchmarks' }
  ];

  const filtered = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" style={{ padding: '90px 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', gap: '20px' }}>
          <div>
            <div className="section-pill">Engineering Portfolio</div>
            <h2 className="section-title gradient-heading" style={{ margin: 0 }}>
              Production Systems & Innovations
            </h2>
          </div>

          {/* Clean Segmented Filter */}
          <div style={{
            display: 'flex',
            background: 'var(--bg-inset)',
            padding: '4px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            gap: '4px',
            flexWrap: 'wrap'
          }}>
            {categories.map(c => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                style={{
                  background: activeCategory === c.id ? 'var(--bg-card-hover)' : 'transparent',
                  color: activeCategory === c.id ? '#ffffff' : 'var(--text-muted)',
                  border: activeCategory === c.id ? '1px solid var(--border-highlight)' : '1px solid transparent',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-xs)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)'
                }}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px'
        }}>
          {filtered.map(proj => (
            <div
              key={proj.id}
              className="enterprise-card"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Meta Top */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    [ {proj.number} ]
                  </span>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontFamily: 'var(--font-mono)',
                    color: proj.id === 'gtmer' ? 'var(--accent-cyan)' : 'var(--accent-indigo-light)'
                  }}>
                    {proj.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.35, marginBottom: '10px' }}>
                  {proj.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  {proj.tagline}
                </p>

                {/* Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {proj.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: '#cbd5e1' }}>
                      <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '3px' }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {proj.tags.slice(0, 5).map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-subtle)',
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-xs)',
                        fontSize: '0.74rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Bar */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-subtle)'
                }}>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    {proj.stats.slice(0, 2).map((st, i) => (
                      <div key={i}>
                        <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#ffffff', fontFamily: 'var(--font-mono)' }}>{st.value}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{st.label}</div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveModal(proj)}
                    style={{
                      background: 'transparent',
                      border: '1px solid var(--border-subtle)',
                      color: '#ffffff',
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    <span>Inspect</span>
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Architecture Modal */}
        {activeModal && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}>
            <div className="enterprise-card" style={{
              maxWidth: '680px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: '36px',
              border: '1px solid var(--border-highlight)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-indigo-light)' }}>
                  ARCHITECTURE // {activeModal.number}
                </span>
                <button
                  onClick={() => setActiveModal(null)}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: 'none',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-xs)',
                    cursor: 'pointer'
                  }}
                >
                  ✕
                </button>
              </div>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '16px' }}>
                {activeModal.title}
              </h2>

              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '24px', fontSize: '0.94rem' }}>
                {activeModal.description}
              </p>

              <h4 style={{ color: '#ffffff', fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>
                Engineering Highlights
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                {activeModal.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '0.88rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <h4 style={{ color: '#ffffff', fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>
                Complete Stack
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {activeModal.tags.map((t, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#ffffff'
                    }}
                  >
                    {t}
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

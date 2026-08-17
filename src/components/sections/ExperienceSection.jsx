import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { experienceData } from '../../data/portfolioData';

export const ExperienceSection = () => {
  return (
    <section id="experience" style={{ padding: '100px 0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Progression</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            5+ years designing, scaling, and maintaining enterprise backend architectures and production GenAI pipelines.
          </p>
        </div>

        {/* Timeline Stream */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="glass-panel"
              style={{
                padding: '36px',
                borderLeft: `4px solid ${exp.current ? 'var(--accent-purple)' : 'rgba(255, 255, 255, 0.15)'}`
              }}
            >
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '8px',
                gap: '8px'
              }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff' }}>
                  {exp.role}
                </h3>
                <span style={{
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  color: exp.current ? 'var(--accent-cyan)' : 'var(--text-muted)'
                }}>
                  {exp.period}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '16px', color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '20px' }}>
                <span style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>{exp.company}</span>
                <span>•</span>
                <span>{exp.location}</span>
              </div>

              {/* Bullets */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                {exp.highlights.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: '#cbd5e1' }}>
                    <CheckCircle size={15} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '3px' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Used */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {exp.tech.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

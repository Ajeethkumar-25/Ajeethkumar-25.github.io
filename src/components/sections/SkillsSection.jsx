import React from 'react';
import { Terminal as TermIcon, Bot, Brain, Network, Server, Code, Cloud } from 'lucide-react';
import { skillsData } from '../../data/portfolioData';

const iconMap = {
  Bot,
  Brain,
  Network,
  Server,
  Code,
  Cloud
};

export const SkillsSection = () => {
  return (
    <section id="skills" style={{ padding: '100px 0', background: 'rgba(10, 11, 30, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-tag">
            <TermIcon size={14} />
            <span>Technical Competence</span>
          </div>
          <h2 className="section-title">
            Technical <span className="gradient-text">Arsenal & Tooling</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Comprehensive toolkit spanning multi-agent frameworks, knowledge graphs, async microservices, AST parsers, and AWS cloud infrastructure.
          </p>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '28px'
        }}>
          {skillsData.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || TermIcon;
            return (
              <div
                key={idx}
                className="glass-panel"
                style={{ padding: '32px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{
                    padding: '10px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(139, 92, 246, 0.15)',
                    color: 'var(--accent-purple)'
                  }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                    {cat.category}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '6px 12px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.84rem',
                        color: '#e2e8f0',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

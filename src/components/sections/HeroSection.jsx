import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const HeroSection = () => {
  return (
    <section id="hero" style={{ paddingTop: '140px', paddingBottom: '90px', position: 'relative' }}>
      <div className="container">
        {/* Status Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
          <div className="status-pill-emerald">
            <span className="status-dot-emerald" />
            <span>OPEN TO SENIOR AI LEADERSHIP</span>
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            [ Chennai, India • Global Remote ]
          </span>
        </div>

        {/* Hero Title Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '48px',
          alignItems: 'center'
        }}>
          <div>
            <h1 className="section-title gradient-heading" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)' }}>
              Architecting autonomous multi-agent systems & cognitive AI.
            </h1>

            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.15rem',
              lineHeight: '1.7',
              maxWidth: '650px',
              margin: '24px 0 36px 0'
            }}>
              Senior AI Engineer with <strong>5+ years of software engineering expertise</strong>. Lead architect of <strong>GTMer</strong> (enterprise AI SDR SaaS with 31+ modules), creator of <strong>Carry Agent</strong> (dual KG + RAG cognitive engine), and author of self-healing AST code test automation frameworks.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '48px' }}>
              <a href="#projects" className="btn-electric btn-cyan">
                <span>Inspect System Architectures</span>
                <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="btn-electric btn-outline-navy">
                <span>Connect with Me</span>
              </a>
            </div>

            {/* Metric Strips */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              paddingTop: '32px',
              borderTop: '1px solid var(--border-color)'
            }}>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', fontFamily: 'var(--font-mono)' }}>5+</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px' }}>Years Engineering</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>31+</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px' }}>SaaS Modules (GTMer)</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-success)', fontFamily: 'var(--font-mono)' }}>94%</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px' }}>Extraction Accuracy</div>
              </div>
            </div>
          </div>

          {/* Right Column: Identity Card */}
          <div className="custom-card" style={{ padding: '36px', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
              <img
                src="./profile.jpg"
                alt={personalInfo.name}
                style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: 'var(--radius-sm)',
                  objectFit: 'cover',
                  border: '1px solid var(--accent-primary)'
                }}
                onError={(e) => {
                  e.target.src = "https://raw.githubusercontent.com/Ajeethkumar-25/Ajeethkumar-25/main/profile.jpg";
                }}
              />
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  {personalInfo.name}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--accent-primary)', fontWeight: 500 }}>
                  {personalInfo.role}
                </p>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
                  MCA (AI & ML) • Chandigarh Univ
                </p>
              </div>
            </div>

            <div style={{
              background: 'var(--bg-inset)',
              borderRadius: 'var(--radius-xs)',
              padding: '16px',
              border: '1px solid var(--border-color)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              <div style={{ color: 'var(--accent-primary)', marginBottom: '6px' }}>// Core Specializations</div>
              <div>• Autonomous Agent Swarms (LangGraph)</div>
              <div>• Dual KG + Vector RAG (Neo4j, Chroma)</div>
              <div>• Self-Healing AST Engines (Tree-Sitter)</div>
              <div>• Async Enterprise SaaS (FastAPI, Kafka)</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #hero .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

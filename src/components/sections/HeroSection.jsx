import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { Terminal } from '../common/Terminal';

export const HeroSection = () => {
  return (
    <section id="hero" style={{ paddingTop: '130px', paddingBottom: '80px', position: 'relative' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center'
        }}>
          {/* Left Column: Portrait & Introduction */}
          <div>
            <div className="warm-badge" style={{ marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-amber)', boxShadow: '0 0 8px var(--accent-amber)' }} />
              <span>Available for Senior AI Engineer Roles</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', margin: '16px 0 28px 0' }}>
              <div style={{
                position: 'relative',
                width: '110px',
                height: '110px',
                flexShrink: 0
              }}>
                <img
                  src="./profile.jpg"
                  alt={personalInfo.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--accent-amber)',
                    boxShadow: '0 0 35px rgba(245, 158, 11, 0.4)'
                  }}
                  onError={(e) => {
                    e.target.src = "https://raw.githubusercontent.com/Ajeethkumar-25/Ajeethkumar-25/main/profile.jpg";
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '0px',
                  right: '0px',
                  background: 'var(--accent-amber)',
                  color: '#0c0a09',
                  borderRadius: '50%',
                  padding: '5px',
                  boxShadow: '0 0 10px rgba(0,0,0,0.5)'
                }}>
                  <Sparkles size={13} />
                </div>
              </div>

              <div>
                <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, lineHeight: 1.15 }}>
                  <span className="warm-gradient-heading">{personalInfo.name}</span>
                </h1>
                <p style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '1.05rem', marginTop: '6px', letterSpacing: '0.5px' }}>
                  {personalInfo.role}
                </p>
                <p style={{ color: 'var(--text-subtle)', fontSize: '0.85rem' }}>
                  📍 {personalInfo.location}
                </p>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '32px' }}>
              Specializing in <strong style={{ color: 'var(--text-main)' }}>Autonomous Multi-Agent Swarms</strong>, <strong style={{ color: 'var(--text-main)' }}>Dual-Memory (Knowledge Graph + Vector RAG) Cognitive Agents</strong>, and <strong style={{ color: 'var(--text-main)' }}>Enterprise Multi-Tenant AI SaaS Platforms</strong> with self-healing code automation.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
              <a href="#projects" className="warm-btn warm-btn-primary">
                <span>Explore Featured Systems</span>
                <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="warm-btn warm-btn-secondary">
                <span>Direct Collaboration</span>
              </a>
            </div>

            {/* Metric Counters */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              paddingTop: '24px',
              borderTop: '1px solid var(--border-color)'
            }}>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-amber)', fontFamily: 'var(--font-mono)' }}>{personalInfo.experienceYears}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>Years Experience</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)' }}>31+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>SaaS Modules</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#34d399', fontFamily: 'var(--font-mono)' }}>{personalInfo.accuracyMetric}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>Extraction Accuracy</div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Agent Session Terminal */}
          <div>
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
};

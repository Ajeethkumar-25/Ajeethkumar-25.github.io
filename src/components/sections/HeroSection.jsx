import React from 'react';
import { ArrowUpRight, Cpu, Sparkles, Terminal as TermIcon, Award } from 'lucide-react';
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
            <div className="section-tag">
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
              <span>Available for Senior AI Architecture</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', margin: '20px 0 28px 0' }}>
              <div style={{
                position: 'relative',
                width: '120px',
                height: '120px',
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
                    border: '3px solid var(--accent-purple)',
                    boxShadow: '0 0 35px rgba(139, 92, 246, 0.65)'
                  }}
                  onError={(e) => {
                    // Fallback to raw github content if local path differs
                    e.target.src = "https://raw.githubusercontent.com/Ajeethkumar-25/Ajeethkumar-25/main/profile.jpg";
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '2px',
                  right: '2px',
                  background: 'var(--accent-purple-dark)',
                  color: '#ffffff',
                  borderRadius: '50%',
                  padding: '5px',
                  boxShadow: '0 0 10px rgba(0,0,0,0.5)'
                }}>
                  <Sparkles size={14} />
                </div>
              </div>

              <div>
                <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, lineHeight: 1.15 }}>
                  <span className="gradient-text">{personalInfo.name}</span>
                </h1>
                <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '1rem', marginTop: '6px' }}>
                  {personalInfo.role}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  📍 {personalInfo.location}
                </p>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: '1.7', marginBottom: '32px' }}>
              Specializing in <strong>Autonomous Multi-Agent Swarms</strong>, <strong>Dual-Memory (Knowledge Graph + Vector RAG) Cognitive Agents</strong>, and <strong>Enterprise Multi-Tenant AI SaaS Platforms</strong> with self-healing code automation.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
              <a href="#projects" className="btn btn-primary">
                <span>Explore Featured Systems</span>
                <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="btn btn-glass">
                <span>Direct Collaboration</span>
              </a>
            </div>

            {/* Metric Counters */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>{personalInfo.experienceYears}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Years Experience</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-purple)' }}>31+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>SaaS Modules</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-green)' }}>{personalInfo.accuracyMetric}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Extraction Accuracy</div>
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

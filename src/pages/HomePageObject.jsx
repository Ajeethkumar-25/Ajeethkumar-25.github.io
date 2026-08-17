import React, { useState } from 'react';
import { portfolioService } from '../services/PortfolioService';
import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { Footer } from '../components/layout/Footer';

export const HomePageObject = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    portfolioService.scrollToSection(sectionId);
  };

  return (
    <div
      data-testid="aurora-portfolio-root"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: 'var(--aurora-bg)',
        color: 'var(--aurora-text)'
      }}
    >
      {/* Aurora Ambient Glow Overlays */}
      <div className="aurora-ambient-glow" data-testid="aurora-ambient-glow" />

      {/* Global Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={handleNavigate}
        data-testid="aurora-navbar"
      />

      {/* Main Single-Page Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection onExplore={() => handleNavigate('projects')} />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer data-testid="aurora-footer" />
    </div>
  );
};

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
      data-testid="anthropic-portfolio-root"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: 'var(--theme-bg)',
        color: 'var(--text-main)'
      }}
    >
      {/* Warm Ambient Terminal Glow */}
      <div className="anthropic-bg-glow" data-testid="anthropic-bg-glow" />

      {/* Global Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={handleNavigate}
        data-testid="anthropic-navbar"
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
      <Footer data-testid="anthropic-footer" />
    </div>
  );
};

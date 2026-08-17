import React, { useState } from 'react';
import { portfolioService } from '../services/PortfolioService';
import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { Footer } from '../components/layout/Footer';

/**
 * HomePageObject (Single Page POM Architecture)
 * Orchestrates page-level interactions, state transitions, and section components.
 */
export const HomePageObject = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    portfolioService.scrollToSection(sectionId);
  };

  return (
    <div
      data-testid="portfolio-single-page"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: 'var(--bg-main)',
        color: 'var(--text-main)'
      }}
    >
      {/* Background Grid Layer */}
      <div className="bg-mesh-overlay" data-testid="bg-mesh-overlay" />

      {/* Global Navigation Object */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={handleNavigate}
        data-testid="page-navbar"
      />

      {/* Main Single Page Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <section id="hero" data-testid="page-hero-section">
          <HeroSection onExplore={() => handleNavigate('projects')} />
        </section>

        <section id="projects" data-testid="page-projects-section">
          <ProjectsSection />
        </section>

        <section id="experience" data-testid="page-experience-section">
          <ExperienceSection />
        </section>

        <section id="skills" data-testid="page-skills-section">
          <SkillsSection />
        </section>

        <section id="contact" data-testid="page-contact-section">
          <ContactSection />
        </section>
      </main>

      {/* Global Footer Object */}
      <Footer data-testid="page-footer" />
    </div>
  );
};

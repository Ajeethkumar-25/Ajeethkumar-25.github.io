import React, { useState } from 'react';
import { ParticleCanvas } from './components/common/ParticleCanvas';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Background Mesh & Floating Particles */}
      <div className="bg-mesh" />
      <ParticleCanvas />

      {/* Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

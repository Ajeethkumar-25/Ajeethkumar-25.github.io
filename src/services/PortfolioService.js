import {
  personalInfo,
  projectsData,
  experienceData,
  skillsData
} from '../data/portfolioData';

/**
 * PortfolioService — Business & Data Access Layer
 * Decouples raw state & data sources from view components.
 */
class PortfolioService {
  getProfile() {
    return personalInfo;
  }

  getAllProjects() {
    return projectsData;
  }

  getProjectsByCategory(category) {
    if (!category || category === 'all') {
      return projectsData;
    }
    return projectsData.filter(p => p.category === category);
  }

  getProjectById(id) {
    return projectsData.find(p => p.id === id) || null;
  }

  getExperienceTimeline() {
    return experienceData;
  }

  getSkillCategories() {
    return skillsData;
  }

  scrollToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  copyToClipboard(text) {
    return navigator.clipboard.writeText(text);
  }
}

export const portfolioService = new PortfolioService();

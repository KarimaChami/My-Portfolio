
import { useEffect } from "react";
import { ProfileSection } from "@/components/portfolio/ProfileSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { PortfolioNavbar } from "@/components/portfolio/PortfolioNavbar";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";

const Portfolio = () => {
  // Initialize intersection observer for animation on scroll
  useEffect(() => {
    const initAnimationObserver = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // Add animation classes when element comes into view
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      // Target elements to animate
      document.querySelectorAll('.animate-on-scroll').forEach((elem) => {
        observer.observe(elem);
      });
    };
    
    initAnimationObserver();
    
    return () => {
      // Clean up
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-purple-50 dark:bg-gray-900 text-gray-800 dark:text-white overflow-x-hidden transition-colors duration-300">
      <PortfolioNavbar />
      <ThemeToggle />
      <ProfileSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;

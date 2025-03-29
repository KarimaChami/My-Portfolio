
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export const PortfolioNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-40 px-6 py-4 transition-all duration-300",
      isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="text-2xl md:text-3xl font-bold text-purple-700 dark:text-purple-400"
          >
            Portfolio
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#profile" label="Profile" />
            <NavLink href="#skills" label="Skills" />
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#contact" label="Contact" />
            
            <div className="flex items-center space-x-3 ml-4">
              <a href="https://github.com/KarimaChami" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/karima-chami-1a7b74283" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:karimachami24@gmail.com" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </nav>
          
          <button 
            className="md:hidden p-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-4 animate-slide-up">
          <nav className="flex flex-col space-y-4 px-6">
            <MobileNavLink href="#profile" label="Profile" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink href="#skills" label="Skills" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink href="#projects" label="Projects" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink href="#contact" label="Contact" onClick={() => setIsMenuOpen(false)} />
            
            <div className="flex items-center space-x-4 py-2 border-t border-gray-200 dark:border-gray-700">
              <a href="https://github.com/KarimaChami" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/karima-chami-1a7b74283" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:karimachami24@gmail.com" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <a 
    href={href}
    className="relative py-2 font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors
      after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
      after:bg-purple-600 dark:after:bg-purple-400 after:scale-x-0 after:origin-right
      after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
  >
    {label}
  </a>
);

const MobileNavLink = ({ 
  href, 
  label, 
  onClick 
}: { 
  href: string; 
  label: string;
  onClick: () => void;
}) => (
  <a 
    href={href}
    className="py-2 border-b border-gray-100 dark:border-gray-800 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
    onClick={onClick}
  >
    {label}
  </a>
);

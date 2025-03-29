
import { Github, ExternalLink } from "lucide-react";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-purple-600 dark:text-purple-400">My</span> Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project allowed me to apply different technologies and solve unique challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              project={project}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
};

type ProjectCardProps = {
  project: Project;
  delay: number;
};

const ProjectCard = ({ project, delay }: ProjectCardProps) => (
  <div 
    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="relative overflow-hidden h-48">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
    
    <div className="p-6">
      <h3 className="font-bold text-xl mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span 
            key={tech} 
            className="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex items-center gap-4 mt-4">
        <a 
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          <Github size={20} />
        </a>
        
        {project.liveUrl && (
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </div>
  </div>
);

// Sample project data
const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A fully functional e-commerce site with product catalog, cart, checkout, and admin dashboard.",
    image: "https://placehold.co/800x600/9C27B0/ffffff?text=E-commerce",
    technologies: ["Laravel", "React", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website with smooth animations and dark mode support.",
    image: "https://placehold.co/800x600/7B1FA2/ffffff?text=Portfolio",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/"
  },
  {
    title: "Task Management App",
    description: "A productivity app for managing tasks with drag and drop functionality and notifications.",
    image: "https://placehold.co/800x600/6A1B9A/ffffff?text=Task+App",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/"
  },
  {
    title: "Restaurant Booking System",
    description: "An online reservation system for restaurants with calendar integration.",
    image: "https://placehold.co/800x600/4A148C/ffffff?text=Booking+App",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/"
  },
  {
    title: "Weather Dashboard",
    description: "A weather application showing forecasts and historical data with interactive charts.",
    image: "https://placehold.co/800x600/8E24AA/ffffff?text=Weather+App",
    technologies: ["JavaScript", "API Integration", "Chart.js"],
    githubUrl: "https://github.com/",
  },
  {
    title: "Social Media Platform",
    description: "A social networking platform with real-time messaging and activity feed.",
    image: "https://placehold.co/800x600/AB47BC/ffffff?text=Social+Platform",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/"
  },
];

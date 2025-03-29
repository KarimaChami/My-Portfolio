
import { Code, Database, Layout, Server } from "lucide-react";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-purple-600 dark:text-purple-400">My</span> Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies across the full stack spectrum.
            Here are the main skills and technologies I specialize in:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard 
            icon={<Layout />}
            title="Frontend"
            skills={['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap']}
            delay={0.1}
          />
          
          <SkillCard 
            icon={<Server />}
            title="Backend"
            skills={['PHP', 'Laravel', 'Node.js']}
            delay={0.2}
          />
          
          <SkillCard 
            icon={<Database />}
            title="Databases"
            skills={['MySQL', 'MongoDB']}
            delay={0.3}
          />
          
          <SkillCard 
            icon={<Code />}
            title="Tools & Others"
            skills={['Git', 'GitHub', 'VS Code', 'WordPress']}
            delay={0.4}
          />
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10 animate-on-scroll">
            <span className="text-purple-600 dark:text-purple-400">Technology</span> Stack
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 animate-on-scroll">
            {skills.map((skill, index) => (
              <SkillBadge 
                key={skill.name} 
                name={skill.name} 
                icon={skill.icon} 
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  delay: number;
};

const SkillCard = ({ icon, title, skills, delay }: SkillCardProps) => (
  <div 
    className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-14 h-14 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="flex items-center">
          <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mr-2"></span>
          <span className="text-gray-700 dark:text-gray-300">{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);

type SkillBadgeProps = {
  name: string;
  icon: string;
  delay: number;
};

const SkillBadge = ({ name, icon, delay }: SkillBadgeProps) => (
  <div 
    className="flex flex-col items-center justify-center gap-2 opacity-0 animate-fade-in"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 p-3">
      <img src={icon} alt={name} className="w-full h-full object-contain" />
    </div>
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
  </div>
);

// Technology icons 
const skills = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
];

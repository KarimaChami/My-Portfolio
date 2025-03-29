
import { ArrowDown } from "lucide-react";

export const ProfileSection = () => {
  return (
    <section id="profile" className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24 pb-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[70%] h-[70%] bg-gradient-to-bl from-purple-300/30 to-pink-300/30 dark:from-purple-900/20 dark:to-pink-900/20 opacity-70 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-gradient-to-tr from-indigo-300/30 to-blue-300/30 dark:from-indigo-900/20 dark:to-blue-900/20 opacity-70 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 max-w-xl">
            <div className="space-y-6 stagger-children">
              <div className="inline-block">
                <span className="text-sm md:text-base uppercase tracking-widest font-medium text-purple-600 dark:text-purple-400 opacity-0 animate-fade-in">
                  Hello, I'm 
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight opacity-0 animate-fade-in">
                <span className="text-purple-700 dark:text-purple-400">Karima Chami</span> <br />
                Full Stack Developer
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 opacity-0 animate-fade-in">
                I build modern, responsive, and user-friendly web applications with a focus on clean code and great user experience.
              </p>
              
              <div className="pt-4 opacity-0 animate-fade-in">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center text-white bg-purple-600 
                    hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 
                    px-6 py-3 rounded-full font-medium 
                    transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/20"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square max-w-md mx-auto relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-xl animate-pulse-subtle"></div>
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white/50 dark:border-white/10 shadow-xl">
                <img 
                  src="https://placehold.co/600x600/9C27B0/ffffff?text=Your+Photo"
                  alt="Krima Chami- Full Stack Developer" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to discover</span>
          <ArrowDown size={20} className="animate-bounce text-purple-600 dark:text-purple-400" />
        </div>
      </div>
    </section>
  );
};

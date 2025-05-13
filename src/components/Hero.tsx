
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-50 pt-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-portfolio-dark">
              Hi, I'm <span className="text-portfolio-yellow">Roshan Kumar</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-portfolio-gray mb-6">
              BCA Student
            </h2>
            <p className="text-lg mb-8 text-portfolio-gray max-w-lg">
              Passionate about creating innovative solutions through code, 
              with a focus on full-stack development and user experience.
            </p>

            <div className="flex space-x-4 mb-8">
              <a 
                href="https://www.linkedin.com/in/roshaankumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline flex items-center space-x-2"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:isthisroshan@gmail.com" 
                className="btn-primary flex items-center space-x-2"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/roshan-kumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-gray hover:text-portfolio-dark transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/roshaankumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-gray hover:text-portfolio-dark transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:isthisroshan@gmail.com" 
                className="text-portfolio-gray hover:text-portfolio-dark transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="/lovable-uploads/f0816146-0344-4470-adee-e145e5652c56.png" 
                  alt="Roshan Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-portfolio-yellow w-24 h-24 rounded-full flex items-center justify-center text-portfolio-dark font-bold">
                <div className="text-center">
                  <div className="text-sm">BCA</div>
                  <div className="text-xs">Student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

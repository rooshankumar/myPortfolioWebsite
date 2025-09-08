
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/profile-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-background pt-16 px-4 md:px-0 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Roshan Kumar</span>
            </h1>
            <h2 className="text-lg md:text-2xl text-muted-foreground mb-6 font-medium">
              Computer Science Student & Student Consultant
            </h2>
            <p className="text-base md:text-lg mb-8 text-muted-foreground max-w-lg leading-relaxed">
              Computer Science student at Hochschule München passionate about making education more accessible. 
              I help students navigate German university admissions and build solutions for better learning experiences.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
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
                href="#contact" 
                className="btn-primary flex items-center space-x-2"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/rooshankumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/roshaankumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:isthisroshan@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl relative">
                <img 
                  src="/lovable-uploads/1291fc2d-0fcb-4737-877c-ff2e123ecc45.png" 
                  alt="Roshan Kumar - Computer Science Student & Student Consultant" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-full ring-4 ring-primary/10"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold" style={{background: 'var(--gradient-primary)'}}>
                <div className="text-center">
                  <div className="text-xs">CS Student</div>
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

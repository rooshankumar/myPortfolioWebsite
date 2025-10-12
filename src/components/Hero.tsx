
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/profile-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-background pt-20 px-4 md:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-wider text-primary uppercase">
                Portfolio
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Roshan Kumar
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
                Computer Science Student & Student Consultant
              </h2>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Computer Science student at Hochschule München specializing in Engineering Physics and Data Science. 
              Dedicated to making education more accessible through strategic consultation and innovative solutions.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <a 
                href="https://www.linkedin.com/in/roshaankumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm"
              >
                <Linkedin size={18} />
                <span>Connect on LinkedIn</span>
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border bg-background text-foreground rounded-lg font-medium hover:border-primary hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>Get in Touch</span>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-border">
              <a 
                href="https://github.com/rooshankumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/roshaankumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:isthisroshan@gmail.com" 
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
                <img 
                  src="/lovable-uploads/1291fc2d-0fcb-4737-877c-ff2e123ecc45.png" 
                  alt="Roshan Kumar - Computer Science Student & Student Consultant" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 px-6 py-4 bg-primary text-primary-foreground rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-sm font-semibold">CS Student</div>
                  <div className="text-xs opacity-90">Hochschule München</div>
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

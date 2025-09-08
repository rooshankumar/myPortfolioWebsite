
import { Calendar, MapPin, User, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <p className="text-lg mb-6 text-muted-foreground">
              Hi, I'm Roshan Kumar, a Computer Science student passionate about building solutions that make education more accessible. 
              I'm currently enrolled at Hochschule München in the Engineering Physics and Data Science program, where I'm expanding 
              my knowledge in advanced technologies and data-driven solutions.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Alongside my studies, I work as a freelance student consultant, helping students apply to universities in Germany. 
              So far, I've successfully supported 10+ students in securing admissions and visas, with a focus on guiding them 
              toward public universities, which offer high-quality education at affordable costs.
            </p>
            <p className="text-lg text-muted-foreground">
              I combine technical expertise with hands-on experience to create tools, guides, and personalized support systems 
              that simplify the study abroad process. Helping students achieve their academic goals is what drives me, and I'm 
              always open to offering guidance or sharing resources.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-xl"></div>
              <div className="card border-2 border-primary/20 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mr-4">
                    <User className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Personal Information</h3>
                </div>
                
                <div className="grid gap-6">
                  <div className="group p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                        <User className="text-primary" size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Full Name</h4>
                        <p className="text-muted-foreground">Roshan Kumar</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4 group-hover:bg-secondary/20 transition-colors">
                        <Calendar className="text-secondary" size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Current Study</h4>
                        <p className="text-muted-foreground">Engineering Physics & Data Science at Hochschule München</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors">
                        <MapPin className="text-accent" size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Location</h4>
                        <p className="text-muted-foreground">India</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                        <GraduationCap className="text-primary" size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Specialty</h4>
                        <p className="text-muted-foreground">Student Consultant - German University Admissions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

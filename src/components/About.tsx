
import { Calendar, MapPin, User, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Professional Background</h2>
        </div>
        
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-6 animate-fade-in">
            <div className="prose prose-lg max-w-none">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Hi, I'm Roshan Kumar, a Computer Science student passionate about building solutions that make education more accessible. 
                I'm currently enrolled at Hochschule München in the Engineering Physics and Data Science program, where I'm expanding 
                my knowledge in advanced technologies and data-driven solutions.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Alongside my studies, I work as a freelance student consultant, helping students apply to universities in Germany. 
                So far, I've successfully supported 10+ students in securing admissions and visas, with a focus on guiding them 
                toward public universities, which offer high-quality education at affordable costs.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I combine technical expertise with hands-on experience to create tools, guides, and personalized support systems 
                that simplify the study abroad process. Helping students achieve their academic goals is what drives me, and I'm 
                always open to offering guidance or sharing resources.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <div className="mb-6 pb-4 border-b border-border">
                <h3 className="text-xl font-semibold text-foreground">Details</h3>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <User className="text-primary" size={18} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-foreground mb-1">Full Name</h4>
                    <p className="text-sm text-muted-foreground">Roshan Kumar</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-primary" size={18} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-foreground mb-1">Current Study</h4>
                    <p className="text-sm text-muted-foreground">Engineering Physics & Data Science at Hochschule München</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-foreground mb-1">Location</h4>
                    <p className="text-sm text-muted-foreground">India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-primary" size={18} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-foreground mb-1">Specialty</h4>
                    <p className="text-sm text-muted-foreground">Student Consultant - German University Admissions</p>
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


import { Calendar, MapPin, User } from 'lucide-react';

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
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Personal Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <User className="text-primary mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-foreground">Full Name</h4>
                    <p className="text-muted-foreground">Roshan Kumar</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="text-primary mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-foreground">Current Study</h4>
                    <p className="text-muted-foreground">Engineering Physics & Data Science at Hochschule München</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-primary mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-foreground">Location</h4>
                    <p className="text-muted-foreground">München, Germany</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m7 7 10 10-5 5V2l5 5L7 17"></path>
                    </svg>
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
    </section>
  );
};

export default About;


import { Calendar, MapPin, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <p className="text-lg mb-6">
              I'm Roshan Kumar, a dedicated Computer Science student with a passion for creating innovative solutions through code. 
              Currently pursuing my Bachelor's in Computer Applications (BCA) at Patna University with a strong academic record, 
              maintaining a 9.2 CGPA.
            </p>
            <p className="text-lg mb-6">
              As a self-employed private tutor, I teach Mathematics, Scratch programming, and HTML, helping students develop 
              strong problem-solving abilities and coding skills through personalized learning plans designed to enhance 
              logical thinking and academic success.
            </p>
            <p className="text-lg">
              I'm constantly expanding my technical expertise through focused coursework and self-study, with proficiency in 
              Java, C, Python, JavaScript, HTML, and CSS. My experience extends to object-oriented programming concepts, 
              data structures & algorithms, and various development tools including Figma, Git, and cloud deployment platforms.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Personal Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <User className="text-portfolio-yellow mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Full Name</h4>
                    <p>Roshan Kumar</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="text-portfolio-yellow mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Date of Birth</h4>
                    <p>January 4, 2007</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-portfolio-yellow mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p>Patna, Bihar, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-portfolio-yellow mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m7 7 10 10-5 5V2l5 5L7 17"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Languages</h4>
                    <p>Hindi (Native), English (C1), German (A2)</p>
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

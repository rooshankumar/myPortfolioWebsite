
import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const programmingSkills = [
    { name: 'Java', level: 85 },
    { name: 'C', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
  ];
  
  const conceptSkills = [
    { name: 'Object-Oriented Programming', level: 85 },
    { name: 'Data Structures & Algorithms', level: 75 },
    { name: 'Web Development', level: 80 },
    { name: 'UI/UX Design', level: 70 },
  ];
  
  const toolsSkills = [
    { name: 'Figma', level: 75 },
    { name: 'Git/GitHub', level: 80 },
    { name: 'Vercel', level: 85 },
    { name: 'Netlify', level: 85 },
    { name: 'AI Technologies', level: 70 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Programming Languages</h3>
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-portfolio-gray">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transition: `width 1s ease-out ${index * 0.2}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Concepts</h3>
              <div className="space-y-6">
                {conceptSkills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-portfolio-gray">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transition: `width 1s ease-out ${index * 0.2}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Tools & Platforms</h3>
              <div className="space-y-6">
                {toolsSkills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-portfolio-gray">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transition: `width 1s ease-out ${index * 0.2}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6">Test Scores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h4 className="text-lg font-semibold">TestAS (04/2024)</h4>
              <div className="mt-2">
                <p><span className="font-medium">Core Test:</span> 94</p>
                <p><span className="font-medium">Subject Module (MCN):</span> 85</p>
              </div>
            </div>
            
            <div className="card animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-lg font-semibold">CUET UG (07/2023)</h4>
              <div className="mt-2">
                <p><span className="font-medium">Total Score:</span> 442</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


import { Book, Award, FileCheck } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Patna College, Patna University",
      location: "Patna, India",
      period: "August 2023 - Present (1 Year Completed)",
      grade: "9.2 / 10 CGPA",
      courses: "Data Structures, Object-Oriented Programming, Web Technologies",
      credits: "Credit Points: 40"
    },
    {
      degree: "Higher Secondary School Examination",
      institution: "Bihar School Examination Board",
      location: "Patna, India",
      period: "April 2021 - March 2023",
      grade: "70.6%",
      courses: "Emphasis: Mathematics and Science"
    },
    {
      degree: "Senior School Examination",
      institution: "Bihar School Examination Board",
      location: "Patna, India",
      period: "April 2020 - April 2021",
      grade: "74%",
      courses: "Mathematics, Science, Hindi, English, Social Science, Sanskrit"
    }
  ];
  
  const certifications = [
    {
      title: "Goethe-Zertifikat A2",
      provider: "Goethe-Institut e.V.",
      date: "September 2024",
      skills: "German",
      description: "German language proficiency certification at A2 level.",
      credential: ""
    },
    {
      title: "International English Language Testing System",
      provider: "IDP Education Ltd",
      date: "September 2024",
      skills: "English as a Second Language (ESL)",
      description: "Internationally recognized English language proficiency test.",
      credential: "Credential ID 128295"
    },
    {
      title: "Master in Business Ethics",
      provider: "Udemy",
      date: "May 2024",
      skills: "Communication",
      description: "Comprehensive understanding of ethical principles and practices in business environments.",
      credential: ""
    },
    {
      title: "TestAs",
      provider: "TestDaF-Institut",
      date: "April 2024",
      skills: "Analytical Reasoning, Problem Solving",
      description: "Aptitude test for foreign students applying to German universities.",
      credential: ""
    },
    {
      title: "Artificial Intelligence and Machine Learning",
      provider: "iMooX.at",
      date: "January 2024",
      skills: "AI, Machine Learning",
      description: "Covered core ML concepts, rule-based classification, clustering, dimensionality reduction, and ethical considerations in AI.",
      credential: ""
    },
    {
      title: "Foundations of User Experience (UX) Design",
      provider: "Coursera",
      date: "November 2023",
      skills: "UX Design",
      description: "Introduction to UX design principles, methodologies, and best practices.",
      credential: ""
    },
    {
      title: "Plan a Successful Freelancing Business",
      provider: "Coursera",
      date: "November 2023",
      skills: "Freelancing, Business Management",
      description: "Strategic planning and management of independent freelance business operations.",
      credential: ""
    },
    {
      title: "Introduction to Software Engineering",
      provider: "Coursera",
      date: "October 2023",
      description: "Learned SDLC, software development methodologies, project management, and quality assurance.",
      credential: ""
    },
    {
      title: "Object Oriented Programming in Java",
      provider: "Coursera",
      date: "October 2023",
      skills: "Java",
      description: "Gained hands-on experience with Java OOP principles, including inheritance, polymorphism, and interfaces.",
      credential: ""
    },
    {
      title: "Python Essentials I",
      provider: "Cisco",
      date: "October 2023",
      skills: "Python (Programming Language)",
      description: "Covered Python fundamentals, control structures, functions, and debugging techniques.",
      credential: ""
    },
    {
      title: "Google Certifications",
      provider: "Google Digital Garage",
      date: "November 2022",
      skills: "Digital Marketing",
      description: "Explored SEO, social media marketing, data analytics, and online campaign strategies.",
      credential: "Credential ID FXN 4TK N3N"
    }
  ];
  
  const additionalTraining = [
    {
      title: "Human Rights and Value Education",
      institution: "Patna",
      period: "July 2023 - December 2023",
      description: "Human rights fundamentals, global & regional development (UDHR), civil & political rights, value education for personal and societal development."
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Education & Training</h2>
        
        <div className="space-y-20">
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Book className="mr-2 text-portfolio-yellow" />
              Academic Education
            </h3>
            
            <div className="space-y-12">
              {education.map((item, index) => (
                <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-portfolio-yellow animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="absolute left-0 top-0 w-4 h-4 bg-portfolio-yellow rounded-full -translate-x-1.5"></div>
                  <h4 className="text-xl font-semibold">{item.degree}</h4>
                  <p className="text-portfolio-gray">{item.institution}, {item.location}</p>
                  <p className="text-sm text-portfolio-gray mt-1">{item.period}</p>
                  
                  <div className="mt-4 space-y-2">
                    <p><span className="font-medium">Grade:</span> {item.grade}</p>
                    <p><span className="font-medium">Key Courses:</span> {item.courses}</p>
                    {item.credits && <p><span className="font-medium">{item.credits}</span></p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Award className="mr-2 text-portfolio-yellow" />
              Certifications & Licenses
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="card animate-fade-in shadow-md hover:shadow-lg transition-all" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h4 className="text-lg font-semibold">{cert.title}</h4>
                  <p className="text-sm text-portfolio-yellow font-medium">{cert.provider} | {cert.date}</p>
                  {cert.skills && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {cert.skills.split(', ').map((skill, idx) => (
                        <span key={idx} className="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="mt-3 text-portfolio-gray text-sm">{cert.description}</p>
                  {cert.credential && <p className="mt-2 text-xs text-gray-500">{cert.credential}</p>}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <FileCheck className="mr-2 text-portfolio-yellow" />
              Additional Training
            </h3>
            
            <div className="space-y-6">
              {additionalTraining.map((training, index) => (
                <div key={index} className="card animate-fade-in">
                  <h4 className="text-lg font-semibold">{training.title}</h4>
                  <p className="text-sm text-portfolio-yellow">{training.institution} | {training.period}</p>
                  <p className="mt-3 text-portfolio-gray">{training.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

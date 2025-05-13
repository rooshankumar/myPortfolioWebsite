
import { Book } from 'lucide-react';

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
      title: "Artificial Intelligence & Machine Learning",
      provider: "iMooX",
      date: "January 2024",
      description: "Covered core ML concepts, rule-based classification, clustering, dimensionality reduction, and ethical considerations in AI."
    },
    {
      title: "Introduction to Software Engineering",
      provider: "Coursera",
      date: "October 2023",
      description: "Learned SDLC, software development methodologies, project management, and quality assurance."
    },
    {
      title: "Object-Oriented Programming in Java",
      provider: "Coursera",
      date: "October 2023",
      description: "Gained hands-on experience with Java OOP principles, including inheritance, polymorphism, and interfaces."
    },
    {
      title: "Python Essentials I",
      provider: "Cisco",
      date: "October 2023",
      description: "Covered Python fundamentals, control structures, functions, and debugging techniques."
    },
    {
      title: "The Fundamentals of Digital Marketing",
      provider: "Google Digital Garage",
      date: "November 2022",
      description: "Explored SEO, social media marketing, data analytics, and online campaign strategies."
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-portfolio-yellow">
                <path d="M12 9v6"></path><path d="M8 9h8.2a2 2 0 0 1 1.8 2.8L13.8 18H12"></path><circle cx="12" cy="5" r="1"></circle>
              </svg>
              Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h4 className="text-lg font-semibold">{cert.title}</h4>
                  <p className="text-sm text-portfolio-yellow">{cert.provider} | {cert.date}</p>
                  <p className="mt-3 text-portfolio-gray">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-portfolio-yellow">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3.5 3 8.5 3 12 0v-5"></path>
              </svg>
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

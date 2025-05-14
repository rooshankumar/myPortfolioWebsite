
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "roshLingua – Language Learning Platform",
      image: "/lovable-uploads/f0816146-0344-4470-adee-e145e5652c56.png",
      description: "A full-stack language exchange web app using React, TypeScript, and Supabase with real-time chat, translation assistance, and matching system for language partners.",
      technologies: ["React", "TypeScript", "Supabase", "Vercel"],
      link: "https://roshlingua.vercel.app",
      features: [
        "Global community of language learners",
        "Real conversations with native speakers",
        "Language partner matching system",
        "Progress tracking with streaks"
      ]
    },
    {
      title: "My PDF Kit – AI-Assisted Web-Based PDF Toolkit",
      image: "https://placehold.co/600x400/f5f5f5/666666?text=My+PDF+Kit",
      description: "A production-level PDF manipulation web app for merging, splitting, and compressing PDFs using Next.js, TypeScript, JavaScript, and CSS.",
      technologies: ["Next.js", "TypeScript", "JavaScript", "CSS", "Netlify"],
      link: "https://mypdfkit.netlify.app",
      features: [
        "PDF merging, splitting, and compression",
        "AI-assisted development for feature implementation",
        "Responsive UI design",
        "Cross-device compatibility"
      ]
    },
    {
      title: "Netflix UI Clone",
      image: "https://placehold.co/600x400/f5f5f5/666666?text=Netflix+Clone",
      description: "A responsive Netflix-inspired interface using HTML, CSS, and JavaScript with a focus on replicating layout and functionality.",
      technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
      link: "https://netflliiix.netlify.app",
      features: [
        "Responsive design for multiple devices",
        "Netflix-inspired UI and layout",
        "Cross-browser compatibility",
        "Smooth animations and transitions"
      ]
    },
    {
      title: "Personal Portfolio",
      image: "https://placehold.co/600x400/f5f5f5/666666?text=Portfolio",
      description: "A clean, single-page portfolio showcasing skills, projects, and background using HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
      link: "https://rooshankumar.netlify.app",
      features: [
        "Modern, user-friendly design",
        "Responsive layout",
        "Optimized for performance",
        "Easy navigation and accessibility"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card overflow-hidden flex flex-col h-full animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden rounded-lg mb-4 bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain md:object-cover transition duration-500 hover:scale-105"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              
              <p className="text-portfolio-gray mb-4 flex-grow">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-sm text-portfolio-gray">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-gray-100 text-portfolio-gray text-xs px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4 mt-auto">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center space-x-2"
                >
                  <ExternalLink size={16} />
                  <span>View Project</span>
                </a>
                
                <a 
                  href="https://github.com/roshan-kumar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center space-x-2"
                >
                  <Github size={16} />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

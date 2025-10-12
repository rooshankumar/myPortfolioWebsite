
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "PublicGermany – Study in Germany Platform",
      image: "https://placehold.co/800x600/3b5bdb/ffffff?text=PublicGermany",
      description: "A comprehensive web platform helping students navigate the entire process of studying in Germany, from APS certification to university applications and visa processes.",
      technologies: ["React", "TypeScript", "Next.js", "Vercel"],
      link: "https://publicgermany.vercel.app/",
      features: [
        "Complete guide to studying in Germany",
        "APS certification guidance",
        "University application support",
        "Visa process assistance",
        "50+ students successfully guided"
      ]
    },
    {
      title: "roshLingua – Language Learning Platform",
      image: "https://placehold.co/800x600/f5f5f5/666666?text=roshLingua",
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
      image: "https://placehold.co/800x600/f5f5f5/666666?text=My+PDF+Kit",
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
      image: "https://placehold.co/800x600/f5f5f5/666666?text=Netflix+Clone",
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
      image: "https://placehold.co/800x600/f5f5f5/666666?text=Portfolio",
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
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-xl overflow-hidden flex flex-col h-full animate-fade-in hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden bg-secondary">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain md:object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                
                <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">{project.description}</p>
              
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-3 text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-secondary text-secondary-foreground text-xs px-3 py-1.5 rounded-md font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              
                <div className="flex gap-3 mt-auto">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>View Live</span>
                  </a>
                  
                  <a 
                    href="https://github.com/rooshankumar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-border text-foreground rounded-lg font-medium hover:border-primary hover:text-primary transition-colors text-sm"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

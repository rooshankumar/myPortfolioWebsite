
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
              <p className="text-lg text-portfolio-gray">
                I'm always open to new opportunities, collaborations, or just a friendly chat about technology and development.
                Feel free to reach out through any of the channels below.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-portfolio-yellow mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:isthisroshan@gmail.com" className="text-portfolio-gray hover:text-portfolio-yellow transition-colors">
                    isthisroshan@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-portfolio-yellow mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+917320867522" className="text-portfolio-gray hover:text-portfolio-yellow transition-colors">
                    +91 7320867522
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-portfolio-yellow mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-portfolio-gray">
                    Salimpur Ahra, Gali no 3, Gandhi Maidan, Patna, Bihar, India - 800003
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Linkedin className="text-portfolio-yellow mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/roshaankumar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-gray hover:text-portfolio-yellow transition-colors"
                  >
                    linkedin.com/in/roshaankumar
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Github className="text-portfolio-yellow mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <a 
                    href="https://github.com/rooshankumar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-gray hover:text-portfolio-yellow transition-colors"
                  >
                    github.com/roshan-kumar
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <form className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-yellow focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-yellow focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-yellow focus:border-transparent"
                  placeholder="Enter subject"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-yellow focus:border-transparent"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary py-3"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

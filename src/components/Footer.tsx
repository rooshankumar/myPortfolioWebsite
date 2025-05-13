
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-portfolio-yellow">R</span>oshan Kumar
            </h3>
            <p className="text-gray-300">Developer & Computer Science Student</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <button
              onClick={scrollToTop}
              className="bg-portfolio-yellow text-portfolio-dark p-3 rounded-full hover:bg-yellow-400 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={24} />
            </button>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="text-center text-gray-400">
          <p>&copy; {currentYear} Roshan Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

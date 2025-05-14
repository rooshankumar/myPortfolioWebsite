import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please fill out all fields'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please enter a valid email address'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      if (form.current) {
        const result = await emailjs.sendForm(
          'service_iypl1fp', 
          'template_el0f05c', 
          form.current,
          'XCVL8ylKqlXhZkoE3'
        );

        console.log('Email sent successfully:', result.text);

        // Clear form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you for your message! I will get back to you soon.'
        });
      }
    } catch (error) {
      console.error('Email send failed:', error);
      setFormStatus({
        submitted: true,
        error: true,
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    github.com/rooshankumar
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <form ref={form} className="bg-gray-50 p-8 rounded-lg shadow-sm" onSubmit={handleSubmit}>
              {formStatus.submitted && (
                <div className={`mb-6 p-3 rounded-md ${formStatus.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {formStatus.message}
                </div>
              )}

              <div className="mb-6">
                <label htmlFor="from_name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-yellow focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="from_email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
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
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-yellow focus:border-transparent"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary py-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
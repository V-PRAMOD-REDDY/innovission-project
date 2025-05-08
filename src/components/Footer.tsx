import { NavLink } from 'react-router-dom';
import { GraduationCap, Twitter, Facebook, Instagram, Linkedin, Github, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">

              <span className="ml-2 text-xl font-bold">Innovission</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering students and job seekers to grow through courses, career support, and community.
            </p>
            <div className="flex space-x-4">

              <a href="https://youtube.com/@innovission14?si=6o0LDVzWkzehokFC" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/innovisio.n?igsh=MXZpamtld2toMGNsNg==" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/innovissio.n/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            <a href="https://whatsapp.com/channel/0029VaBH3MTB4hdN4CjPtM36" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.105 1.516 5.84L0 24l6.293-1.516A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.422 17.422c-.253.705-1.482 1.353-2.042 1.432-.518.073-1.18.104-3.422-.73-2.875-1.13-4.703-3.91-4.845-4.09-.14-.18-1.155-1.54-1.155-2.94 0-1.4.73-2.09.99-2.38.253-.28.554-.35.74-.35.185 0 .37.002.53.01.17.01.4-.065.63.48.23.545.78 1.88.85 2.02.07.14.12.31.02.5-.1.19-.15.31-.3.48-.15.17-.31.37-.45.5-.15.13-.3.27-.13.53.17.26.75 1.23 1.61 2 .98.87 1.8 1.14 2.06 1.27.26.13.41.11.57-.07.16-.18.66-.77.84-1.03.18-.26.35-.22.59-.13.24.09 1.52.72 1.78.85.26.13.43.2.5.31.07.11.07.65-.18 1.35z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <NavLink to="/" className="text-gray-400 hover:text-white transition-colors">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/courses" className="text-gray-400 hover:text-white transition-colors">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/services" className="text-gray-400 hover:text-white transition-colors">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">Resources</h3>
          <ul className="space-y-3">
            <li>
              <NavLink to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio Builder</NavLink>
            </li>
            <li>
              <NavLink to="/jobs" className="text-gray-400 hover:text-white transition-colors">Jobs & Career Tips</NavLink>
            </li>
            <li>
              <NavLink to="/events" className="text-gray-400 hover:text-white transition-colors">Events & Campaigns</NavLink>
            </li>
            <li>
              <NavLink to="/community" className="text-gray-400 hover:text-white transition-colors">Community</NavLink>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">Contact</h3>
          <ul className="space-y-3 text-gray-400">
            <li>Email: contact@innovission.com</li>
            <li>Phone: +91 9441663905</li>
            <li>Address: Kuppam,Ap , India</li>
            <li className="pt-4">
              <a href="#newsletter" className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900 w-full text-center">
                Subscribe to Newsletter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Innovission. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
    </footer >
  );
};

export default Footer;
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Events', path: '/events' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Community', path: '/community' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <NavLink to="/#/" className="flex items-center">
            
            <span className="ml-2 text-xl font-bold text-gray-900">Innovission</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <a
              href="https://www.instagram.com/innovisio.n?igsh=OHoxZXdsb245bnpp"
              className="ml-4 btn btn-primary text-sm px-4 py-2" target='_blank' rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Join Community
            </a>
          </nav>

          {/* Mobile Navigation Button */}
          <button
            type="button"
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-screen opacity-100 visible bg-white shadow-lg'
            : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <nav className="px-4 pt-2 pb-4 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
          <a
            href="https://www.instagram.com/innovisio.n?igsh=OHoxZXdsb245bnpp"
            className="block w-full text-center btn btn-primary mt-4"
            onClick={() => setIsOpen(false)}
            target='_blank' rel="noopener noreferrer"
          >
            Join Community
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
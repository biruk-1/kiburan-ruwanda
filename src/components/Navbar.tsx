import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Handle active section
      const sections = navItems.map(item => item.href.replace('/#', ''));
      let currentSection = sections[0];
      let minDistance = Infinity;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        const sectionId = href.replace('/#', '');
        setActiveSection(sectionId);
      }
    } else {
      navigate(href);
    }
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    const sectionId = href.replace('/#', '');
    return activeSection === sectionId || location.pathname.includes(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'py-4 bg-black/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer h-12"
              onClick={() => handleNavigation('/#home')}
            >
              <div className="flex items-center">
                <div className="h-12 w-12 relative">
                  <div className={`absolute inset-0 ${scrolled ? 'text-white' : 'text-blue-800'}`}>
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <rect x="10" y="10" width="35" height="35" rx="5" className="fill-current"/>
                      <circle cx="70" cy="27.5" r="17.5" className="fill-current"/>
                      <rect x="10" y="55" width="35" height="35" rx="5" className="fill-current"/>
                    </svg>
                  </div>
                </div>
                <span className={`ml-3 text-2xl font-bold ${scrolled ? 'text-white' : 'text-blue-800'}`}>
                  Kiburan
                </span>
                <span className={`text-sm font-normal ml-2 ${scrolled ? 'text-white/80' : 'text-blue-800/80'}`}>
                  RWANDA
                </span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group hover:bg-white/5 ${
                      isActive(item.href) 
                        ? 'text-accent bg-accent/5' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-full rounded-lg bg-accent/5"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: navItems.length * 0.1 }}
                className="ml-6"
              >
                <button
                  onClick={() => handleNavigation('/#contact')}
                  className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition-all bg-accent rounded-lg hover:bg-accent/90 group"
                >
                  <span className="relative text-black group-hover:text-black">
                    Get Started
                    <motion.div
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-black/10"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1, 1, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    />
                  </span>
                </button>
              </motion.div>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:hidden"
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 overflow-hidden rounded-lg group hover:bg-white/5"
            >
              <span className="relative z-10 text-gray-300 group-hover:text-white">
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="py-3"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className={`block w-full px-4 py-2 text-base font-medium ${
                      isActive(item.href)
                        ? 'text-accent bg-accent/5'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                className="px-4 pt-2"
              >
                <button
                  onClick={() => handleNavigation('/#contact')}
                  className="relative flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black bg-accent rounded-lg hover:bg-accent/90 transition-all duration-300"
                >
                  Get Started
                  <motion.div
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black/10"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1, 1, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 
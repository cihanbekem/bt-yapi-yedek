import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Hizmetler', href: '#services' },
    { name: 'Projeler', href: '#projects' },
    { name: 'İletişim', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#2d2d2d] bg-opacity-95 shadow-lg border-b border-[#444] transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-white-500 to-black-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">BT</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-white/90">
                BT Yapı İnşaat
              </h1>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.span
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.href)}
                className="cursor-pointer text-gray-200 font-medium transition-all duration-200 relative group px-1 py-0.5"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.span>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block bg-white text-gray-800 px-6 py-2 rounded-full font-medium shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-200 border border-gray-200"
            onClick={() => scrollToSection('#contact')}
          >
            Teklif Al
          </motion.button>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-blue-400 transition-colors duration-200"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#2d2d2d] bg-opacity-95 border-t border-[#444] shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.span
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left cursor-pointer text-gray-200 font-medium py-2 px-1 transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </motion.span>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="w-full bg-white text-gray-800 px-6 py-3 rounded-full font-medium shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-200 border border-gray-200"
                onClick={() => scrollToSection('#contact')}
              >
                Teklif Al
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaBriefcase, FaEnvelope, FaCalendarCheck } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: FaHome },
    { name: 'Services', path: '/services', icon: FaBriefcase },
    { name: 'Contact', path: '/contact', icon: FaEnvelope },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-effect sticky top-0 z-50 border-b border-white/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span className="text-2xl">🛠️</span>
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold bg-gradient-to-r from-primary-700 to-primary-900 bg-clip-text text-transparent">
                ServiceHub
              </h1>
              <p className="text-xs text-gray-600">Professional Services</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-5 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    isActive
                      ? 'text-primary-700'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  <Icon className="text-lg" />
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary-100 rounded-lg -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link
            to="/booking"
            className="btn-primary flex items-center space-x-2"
          >
            <FaCalendarCheck />
            <span className="hidden sm:inline">Book Now</span>
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
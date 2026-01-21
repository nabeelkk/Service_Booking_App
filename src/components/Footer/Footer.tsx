import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="glass-effect mt-20 border-t border-white/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">🛠️</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-primary-700">ServiceHub</h3>
                <p className="text-xs text-gray-600">Professional Services</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Your trusted partner for all home, appliance, and gadget services. Quality workmanship guaranteed.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-100 hover:bg-primary-200 flex items-center justify-center text-primary-700 transition-colors duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-100 hover:bg-primary-200 flex items-center justify-center text-primary-700 transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-100 hover:bg-primary-200 flex items-center justify-center text-primary-700 transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-100 hover:bg-primary-200 flex items-center justify-center text-primary-700 transition-colors duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Home</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Services</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Contact</Link></li>
              <li><Link to="/booking" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Book Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-600">Home Services</span></li>
              <li><span className="text-gray-600">Appliance Repair</span></li>
              <li><span className="text-gray-600">Gadget Repair</span></li>
              <li><span className="text-gray-600">Emergency Services</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-gray-900 mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-600">
                <FaMapMarkerAlt className="mt-1 text-primary-600" />
                <span className="text-sm">123 Service Street, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <FaPhone className="text-primary-600" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <FaEnvelope className="text-primary-600" />
                <span className="text-sm">hello@servicehub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} ServiceHub. All rights reserved. Built with ❤️ for quality service.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
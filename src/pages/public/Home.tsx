import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import { serviceCategories } from '@/data/services';
import { FaStar, FaUsers, FaClock, FaShieldAlt } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: FaStar,
      title: 'Expert Professionals',
      description: 'Verified and trained service providers',
    },
    {
      icon: FaClock,
      title: '24/7 Support',
      description: 'Round the clock customer service',
    },
    {
      icon: FaShieldAlt,
      title: 'Service Guarantee',
      description: '7-day warranty on all services',
    },
    {
      icon: FaUsers,
      title: '50,000+ Happy Customers',
      description: 'Join our growing community',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary-700 via-primary-600 to-accent-500 bg-clip-text text-transparent">
                  Professional
                </span>
                <br />
                <span className="text-gray-900">Services at</span>
                <br />
                <span className="text-gray-900">Your Doorstep</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Book trusted home services, appliance repairs, and gadget fixes with just a few clicks. Quality service guaranteed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking" className="btn-primary text-center text-lg px-8 py-4">
                  Book a Service
                </Link>
                <Link to="/services" className="btn-secondary text-center text-lg px-8 py-4">
                  Browse Services
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div>
                  <p className="text-3xl font-display font-bold text-primary-700">50K+</p>
                  <p className="text-gray-600 text-sm">Happy Customers</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary-700">25+</p>
                  <p className="text-gray-600 text-sm">Services</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary-700">4.8</p>
                  <p className="text-gray-600 text-sm">Average Rating</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-effect rounded-3xl p-8 shadow-2xl float-animation">
                <div className="aspect-square bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-9xl">
                  🛠️
                </div>
              </div>
              
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-effect rounded-2xl p-4 shadow-xl"
              >
                <span className="text-4xl">⚡</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 glass-effect rounded-2xl p-4 shadow-xl"
              >
                <span className="text-4xl">🔧</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of professional services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={() => navigate('/booking')}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Why Choose ServiceHub?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best service experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-8 text-center hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-3xl p-12 md:p-16 text-center bg-gradient-to-br from-primary-600 to-primary-700"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Book your service now and experience hassle-free professional service at your doorstep
            </p>
            <Link
              to="/booking"
              className="inline-block bg-white text-primary-700 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
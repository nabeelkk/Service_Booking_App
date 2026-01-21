import { motion } from 'framer-motion';
import { ServiceCategoryData } from '@/types';

interface ServiceCardProps {
  service: ServiceCategoryData;
  onClick: () => void;
  delay?: number;
}

const ServiceCard = ({ service, onClick, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="glass-effect rounded-2xl p-8 card-hover group"
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:rotate-6 transform">
          {service.icon}
        </div>
        
        <div>
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
            {service.name}
          </h3>
          <p className="text-gray-600 text-sm">
            {service.description}
          </p>
        </div>

        <div className="pt-4 border-t border-gray-200 w-full">
          <p className="text-primary-700 font-semibold text-sm">
            {service.subServices.length} Services Available
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center pt-2">
          {service.subServices.slice(0, 3).map((sub) => (
            <span
              key={sub.id}
              className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
            >
              {sub.name}
            </span>
          ))}
          {service.subServices.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
              +{service.subServices.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
import { motion } from 'framer-motion';
import { ServiceCategory } from '@/types';
import { serviceCategories } from '@/data/services';

interface Step1Props {
  selectedCategory: ServiceCategory | '';
  onSelect: (category: ServiceCategory) => void;
}

const Step1CategorySelection = ({ selectedCategory, onSelect }: Step1Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-3">
          Select Service Category
        </h2>
        <p className="text-gray-600">
          Choose the type of service you need
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {serviceCategories.map((category, index) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelect(category.id)}
            className={`glass-effect rounded-2xl p-8 text-center transition-all duration-300 ${
              selectedCategory === category.id
                ? 'ring-4 ring-primary-500 shadow-2xl scale-105'
                : 'hover:shadow-xl hover:-translate-y-1'
            }`}
          >
            <div className="text-5xl mb-4">{category.icon}</div>
            <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
              {category.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {category.description}
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary-700 font-semibold text-sm">
              <span>{category.subServices.length} services</span>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default Step1CategorySelection;
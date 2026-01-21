import { motion } from 'framer-motion';
import { ServiceCategory, SubService } from '@/types';
import { serviceCategories } from '@/data/services';

interface Step2Props {
  category: ServiceCategory;
  selectedSubCategory: string;
  onSelect: (subCategoryId: string) => void;
}

const Step2SubCategorySelection = ({ category, selectedSubCategory, onSelect }: Step2Props) => {
  const categoryData = serviceCategories.find((c) => c.id === category);

  if (!categoryData) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-3 mb-4">
          <span className="text-4xl">{categoryData.icon}</span>
          <h2 className="text-3xl font-display font-bold text-gray-900">
            {categoryData.name}
          </h2>
        </div>
        <p className="text-gray-600">
          Select the specific service you need
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryData.subServices.map((service: SubService, index: number) => (
          <motion.button
            key={service.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onSelect(service.id)}
            className={`glass-effect rounded-2xl p-6 text-left transition-all duration-300 ${
              selectedSubCategory === service.id
                ? 'ring-4 ring-primary-500 shadow-2xl scale-105'
                : 'hover:shadow-xl hover:-translate-y-1'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl">{service.icon}</div>
              <div className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold">
                ₹{service.price}
              </div>
            </div>
            
            <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
              {service.name}
            </h3>
            <p className="text-gray-600 text-sm">
              {service.description}
            </p>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default Step2SubCategorySelection;
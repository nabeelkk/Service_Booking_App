import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaHome, FaRoad, FaMapMarkedAlt, FaCity, FaMailBulk } from 'react-icons/fa';

interface Step6Props {
  address: {
    house: string;
    street: string;
    place: string;
    district: string;
    pincode: string;
  };
  onUpdate: (address: {
    house: string;
    street: string;
    place: string;
    district: string;
    pincode: string;
  }) => void;
}

const Step6AddressForm = ({ address, onUpdate }: Step6Props) => {
  const [formData, setFormData] = useState(address);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (field: string, value: string) => {
    let error = '';
    
    if (!value.trim()) {
      error = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    } else if (field === 'pincode' && !/^\d{6}$/.test(value)) {
      error = 'Please enter a valid 6-digit pincode';
    }
    
    setErrors((prev) => ({ ...prev, [field]: error }));
    return error;
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);
    validate(field, value);
    
    // Update parent only if no errors
    if (!validate(field, value)) {
      onUpdate(newFormData);
    }
  };

  const fields = [
    { name: 'house', label: 'House / Flat / Building', icon: FaHome, placeholder: 'Enter house/flat number and building name' },
    { name: 'street', label: 'Street / Area', icon: FaRoad, placeholder: 'Enter street or area name' },
    { name: 'place', label: 'Place / Locality', icon: FaMapMarkedAlt, placeholder: 'Enter place or locality' },
    { name: 'district', label: 'District', icon: FaCity, placeholder: 'Enter district name' },
    { name: 'pincode', label: 'Pincode', icon: FaMailBulk, placeholder: 'Enter 6-digit pincode', type: 'tel', maxLength: 6 },
  ];

  const isFormComplete = Object.values(formData).every(val => val.trim()) && 
                         Object.keys(errors).length === 0;

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
          Complete Address
        </h2>
        <p className="text-gray-600">
          Enter your complete address for service delivery
        </p>
      </div>

      <div className="glass-effect rounded-2xl p-8 space-y-6 max-w-2xl mx-auto">
        {fields.map((field, index) => {
          const Icon = field.icon;
          const fieldName = field.name as keyof typeof formData;
          
          return (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <label className="flex items-center space-x-2 text-gray-700 font-semibold">
                <Icon className="text-primary-600" />
                <span>{field.label}</span>
              </label>
              
              <input
                type={field.type || 'text'}
                value={formData[fieldName]}
                onChange={(e) => handleChange(fieldName, e.target.value)}
                placeholder={field.placeholder}
                maxLength={field.maxLength}
                className={`input-field ${errors[field.name] ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : ''}`}
                aria-label={field.label}
                aria-invalid={!!errors[field.name]}
                aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
              />
              
              {errors[field.name] && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  id={`${field.name}-error`}
                  className="text-red-600 text-sm flex items-center space-x-1"
                >
                  <span>⚠️</span>
                  <span>{errors[field.name]}</span>
                </motion.p>
              )}
            </motion.div>
          );
        })}

        {isFormComplete && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 rounded-xl p-6 mt-6"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaHome className="text-white text-xl" />
              </div>
              <div className="flex-1">
                <p className="text-green-800 font-semibold mb-2">Complete Address</p>
                <p className="text-green-700 text-sm">
                  {formData.house}, {formData.street}, {formData.place}, {formData.district} - {formData.pincode}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Step6AddressForm;
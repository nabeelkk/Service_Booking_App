import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaUser, FaPhone } from 'react-icons/fa';

interface Step5Props {
  userDetails: { name: string; mobile: string };
  onUpdate: (details: { name: string; mobile: string }) => void;
}

const Step5UserDetails = ({ userDetails, onUpdate }: Step5Props) => {
  const [name, setName] = useState(userDetails.name);
  const [mobile, setMobile] = useState(userDetails.mobile);
  const [errors, setErrors] = useState<{ name?: string; mobile?: string }>({});

  const validateName = (value: string) => {
    if (!value.trim()) {
      return 'Name is required';
    }
    if (value.trim().length < 2) {
      return 'Name must be at least 2 characters';
    }
    return '';
  };

  const validateMobile = (value: string) => {
    if (!value.trim()) {
      return 'Mobile number is required';
    }
    if (!/^\d{10}$/.test(value.replace(/\D/g, ''))) {
      return 'Please enter a valid 10-digit mobile number';
    }
    return '';
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    const error = validateName(value);
    setErrors((prev) => ({ ...prev, name: error }));
    if (!error) {
      onUpdate({ name: value, mobile });
    }
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobile(value);
    const error = validateMobile(value);
    setErrors((prev) => ({ ...prev, mobile: error }));
    if (!error) {
      onUpdate({ name, mobile: value });
    }
  };

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
          Your Details
        </h2>
        <p className="text-gray-600">
          Please provide your contact information
        </p>
      </div>

      <div className="glass-effect rounded-2xl p-8 space-y-6 max-w-2xl mx-auto">
        {/* Name Field */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-gray-700 font-semibold">
            <FaUser className="text-primary-600" />
            <span>Full Name</span>
          </label>
          
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your full name"
            className={`input-field ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : ''}`}
            aria-label="Full name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              id="name-error"
              className="text-red-600 text-sm flex items-center space-x-1"
            >
              <span>⚠️</span>
              <span>{errors.name}</span>
            </motion.p>
          )}
        </div>

        {/* Mobile Field */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-gray-700 font-semibold">
            <FaPhone className="text-primary-600" />
            <span>Mobile Number</span>
          </label>
          
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
              +91
            </span>
            <input
              type="tel"
              value={mobile}
              onChange={handleMobileChange}
              placeholder="Enter 10-digit mobile number"
              className={`input-field pl-14 ${errors.mobile ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : ''}`}
              aria-label="Mobile number"
              aria-invalid={!!errors.mobile}
              aria-describedby={errors.mobile ? 'mobile-error' : undefined}
            />
          </div>
          
          {errors.mobile && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              id="mobile-error"
              className="text-red-600 text-sm flex items-center space-x-1"
            >
              <span>⚠️</span>
              <span>{errors.mobile}</span>
            </motion.p>
          )}
        </div>

        {!errors.name && !errors.mobile && name && mobile && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start space-x-3"
          >
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaUser className="text-white" />
            </div>
            <div>
              <p className="text-green-800 font-semibold text-sm">Contact Information Saved</p>
              <p className="text-green-700 text-xs mt-1">
                We'll send booking confirmation to +91 {mobile}
              </p>
            </div>
          </motion.div>
        )}

        <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6 border border-primary-100">
          <div className="flex items-start space-x-4">
            <div className="text-3xl">🔒</div>
            <div>
              <h4 className="font-display font-semibold text-gray-900 mb-2">
                Your Privacy Matters
              </h4>
              <p className="text-sm text-gray-600">
                Your information is secure and will only be used for service booking and communication purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Step5UserDetails;
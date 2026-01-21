import { motion } from 'framer-motion';
import { BookingFormData } from '@/types';
import { serviceCategories } from '@/data/services';
import { FaEdit, FaCheckCircle } from 'react-icons/fa';

interface Step7Props {
  bookingData: Partial<BookingFormData>;
  onEdit: (step: number) => void;
}

const Step7ReviewConfirm = ({ bookingData, onEdit }: Step7Props) => {
  const categoryData = serviceCategories.find((c) => c.id === bookingData.category);
  const subService = categoryData?.subServices.find((s) => s.id === bookingData.subCategory);

  const reviewSections = [
    {
      title: 'Service Details',
      step: 1,
      items: [
        { label: 'Category', value: categoryData?.name },
        { label: 'Service', value: subService?.name },
        { label: 'Price', value: `₹${subService?.price || 0}` },
      ],
    },
    {
      title: 'Location',
      step: 3,
      items: [
        { label: 'Service Location', value: bookingData.location?.address },
      ],
    },
    {
      title: 'Schedule',
      step: 4,
      items: [
        {
          label: 'Date',
          value: bookingData.date
            ? new Date(bookingData.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            : '',
        },
        { label: 'Time', value: bookingData.time },
      ],
    },
    {
      title: 'Contact Information',
      step: 5,
      items: [
        { label: 'Name', value: bookingData.userDetails?.name },
        { label: 'Mobile', value: `+91 ${bookingData.userDetails?.mobile}` },
      ],
    },
    {
      title: 'Service Address',
      step: 6,
      items: [
        {
          label: 'Complete Address',
          value: bookingData.address
            ? `${bookingData.address.house}, ${bookingData.address.street}, ${bookingData.address.place}, ${bookingData.address.district} - ${bookingData.address.pincode}`
            : '',
        },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-4 shadow-lg"
        >
          <FaCheckCircle className="text-white text-4xl" />
        </motion.div>
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-3">
          Review Your Booking
        </h2>
        <p className="text-gray-600">
          Please review all details before confirming
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {reviewSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-effect rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-display font-bold text-gray-900">
                {section.title}
              </h3>
              <button
                onClick={() => onEdit(section.step)}
                className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
              >
                <FaEdit />
                <span>Edit</span>
              </button>
            </div>

            <div className="space-y-3">
              {section.items.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 border-b border-gray-100 last:border-0"
                >
                  <span className="text-gray-600 text-sm font-medium mb-1 sm:mb-0">
                    {item.label}
                  </span>
                  <span className="text-gray-900 font-semibold">
                    {item.value || 'Not provided'}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Total Amount */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-effect rounded-2xl p-8 bg-gradient-to-br from-primary-600 to-primary-700 text-white"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-primary-100 text-sm mb-1">Total Amount</p>
              <p className="text-4xl font-display font-bold">
                ₹{subService?.price || 0}
              </p>
              <p className="text-primary-100 text-sm mt-2">
                Payment can be made after service completion
              </p>
            </div>
            <div className="text-6xl opacity-20">💳</div>
          </div>
        </motion.div>

        {/* Terms and Conditions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="glass-effect rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100"
        >
          <div className="flex items-start space-x-4">
            <div className="text-3xl">📋</div>
            <div className="flex-1">
              <h4 className="font-display font-semibold text-gray-900 mb-2">
                Terms & Conditions
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Service provider will arrive within 30 minutes of scheduled time</li>
                <li>• Cancellation is free up to 2 hours before scheduled time</li>
                <li>• Payment to be made after service completion</li>
                <li>• 7-day service warranty on all work</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Step7ReviewConfirm;
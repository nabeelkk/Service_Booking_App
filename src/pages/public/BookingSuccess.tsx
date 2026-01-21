import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { FaCheckCircle, FaCalendar, FaClock, FaMapMarkerAlt, FaHome } from 'react-icons/fa';
import { Booking } from '@/types';

const BookingSuccess = () => {
  const location = useLocation();
  const booking = location.state?.booking as Booking;

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">No booking information found</p>
          <Link to="/" className="btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl mb-6">
              <FaCheckCircle className="text-white text-5xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Booking Confirmed!
            </h1>
            <p className="text-xl text-gray-600">
              Your service has been successfully booked
            </p>
          </motion.div>

          {/* Booking Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-2xl p-8 space-y-6"
          >
            <div className="flex items-center justify-between pb-6 border-b border-gray-200">
              <div>
                <p className="text-gray-600 text-sm mb-1">Booking ID</p>
                <p className="text-2xl font-display font-bold text-primary-700">{booking.id}</p>
              </div>
              <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold">
                {booking.status.toUpperCase()}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Service</p>
                  <p className="text-lg font-semibold text-gray-900">{booking.serviceName}</p>
                </div>

                <div className="flex items-start space-x-3">
                  <FaCalendar className="text-primary-600 mt-1" />
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Date</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(booking.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FaClock className="text-primary-600 mt-1" />
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Time</p>
                    <p className="font-semibold text-gray-900">{booking.time}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Customer</p>
                  <p className="text-lg font-semibold text-gray-900">{booking.userDetails.name}</p>
                  <p className="text-gray-600">+91 {booking.userDetails.mobile}</p>
                </div>

                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-primary-600 mt-1" />
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Service Location</p>
                    <p className="font-semibold text-gray-900">
                      {booking.address.house}, {booking.address.street}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {booking.address.place}, {booking.address.district} - {booking.address.pincode}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Total Amount</p>
                  <p className="text-3xl font-display font-bold text-primary-700">
                    ₹{booking.totalAmount}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 text-sm mb-1">Payment Mode</p>
                  <p className="font-semibold text-gray-900">Cash on Service</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 glass-effect rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-indigo-50"
          >
            <h3 className="font-display font-bold text-gray-900 mb-4">What's Next?</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 font-bold">1.</span>
                <span>You'll receive a confirmation SMS and email shortly</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 font-bold">2.</span>
                <span>Our service provider will contact you 30 minutes before arrival</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 font-bold">3.</span>
                <span>Please keep your phone accessible on the day of service</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 font-bold">4.</span>
                <span>Payment to be made after successful service completion</span>
              </li>
            </ul>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link to="/" className="btn-primary flex-1 text-center flex items-center justify-center space-x-2">
              <FaHome />
              <span>Back to Home</span>
            </Link>
            <Link to="/services" className="btn-secondary flex-1 text-center">
              Book Another Service
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingSuccess;
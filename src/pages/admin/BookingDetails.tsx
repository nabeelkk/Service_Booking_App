import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/useRedux';
import { updateBookingStatus } from '@/store/bookingSlice';
import { Booking } from '@/types';
import {
  FaArrowLeft,
  FaCalendar,
  FaClock,
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaMoneyBillWave,
} from 'react-icons/fa';

const BookingDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const booking = location.state?.booking as Booking;

  if (!booking) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600 mb-4">Booking not found</p>
        <button onClick={() => navigate('/admin/bookings')} className="btn-primary">
          Back to Bookings
        </button>
      </div>
    );
  }

  const getStatusColor = (status: Booking['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'confirmed':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'in-progress':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'completed':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'cancelled':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleStatusChange = (newStatus: Booking['status']) => {
    dispatch(updateBookingStatus({ id: booking.id, status: newStatus }));
    navigate('/admin/bookings');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <button
            onClick={() => navigate('/admin/bookings')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors duration-300"
          >
            <FaArrowLeft />
            <span>Back to Bookings</span>
          </button>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
            Booking Details
          </h1>
          <p className="text-gray-600">Complete information about this booking</p>
        </div>
      </motion.div>

      {/* Booking ID and Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-effect rounded-2xl p-6"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-gray-600 text-sm mb-1">Booking ID</p>
            <p className="text-2xl font-mono font-bold text-primary-700">{booking.id}</p>
            <p className="text-gray-600 text-sm mt-2">
              Created on {new Date(booking.createdAt).toLocaleString()}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-gray-600 text-sm">Update Status</p>
            <select
              value={booking.status}
              onChange={(e) => handleStatusChange(e.target.value as Booking['status'])}
              className={`px-4 py-2 rounded-xl font-semibold border-2 cursor-pointer ${getStatusColor(
                booking.status
              )}`}
            >
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Service Details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-effect rounded-2xl p-6"
        >
          <h2 className="text-xl font-display font-bold text-gray-900 mb-6">
            Service Information
          </h2>

          <div className="space-y-4">
            <div>
              <p className="text-gray-600 text-sm mb-1">Service Name</p>
              <p className="text-lg font-semibold text-gray-900">{booking.serviceName}</p>
            </div>

            <div className="flex items-center space-x-3">
              <FaCalendar className="text-primary-600 text-xl" />
              <div>
                <p className="text-gray-600 text-sm mb-1">Service Date</p>
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

            <div className="flex items-center space-x-3">
              <FaClock className="text-primary-600 text-xl" />
              <div>
                <p className="text-gray-600 text-sm mb-1">Service Time</p>
                <p className="font-semibold text-gray-900">{booking.time}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <FaMoneyBillWave className="text-primary-600 text-xl" />
              <div>
                <p className="text-gray-600 text-sm mb-1">Total Amount</p>
                <p className="text-2xl font-display font-bold text-primary-700">
                  ₹{booking.totalAmount}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Customer Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-effect rounded-2xl p-6"
        >
          <h2 className="text-xl font-display font-bold text-gray-900 mb-6">
            Customer Information
          </h2>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaUser className="text-primary-600 text-xl" />
              <div>
                <p className="text-gray-600 text-sm mb-1">Customer Name</p>
                <p className="text-lg font-semibold text-gray-900">{booking.userDetails.name}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <FaPhone className="text-primary-600 text-xl" />
              <div>
                <p className="text-gray-600 text-sm mb-1">Mobile Number</p>
                <p className="font-semibold text-gray-900">+91 {booking.userDetails.mobile}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-primary-600 text-xl mt-1" />
              <div>
                <p className="text-gray-600 text-sm mb-1">Service Address</p>
                <p className="font-semibold text-gray-900">{booking.address.house}</p>
                <p className="text-gray-700">{booking.address.street}</p>
                <p className="text-gray-700">
                  {booking.address.place}, {booking.address.district}
                </p>
                <p className="text-gray-700">PIN: {booking.address.pincode}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Location */}
      {booking.location.address && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-effect rounded-2xl p-6"
        >
          <h2 className="text-xl font-display font-bold text-gray-900 mb-4">
            Location Details
          </h2>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-primary-600 text-xl" />
            <p className="text-gray-700">{booking.location.address}</p>
          </div>
          {booking.location.latitude && booking.location.longitude && (
            <p className="text-gray-600 text-sm mt-2">
              Coordinates: {booking.location.latitude.toFixed(4)}, {booking.location.longitude.toFixed(4)}
            </p>
          )}
        </motion.div>
      )}

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex gap-4"
      >
        <button
          onClick={() => window.print()}
          className="btn-secondary flex-1"
        >
          Print Details
        </button>
        <button
          onClick={() => navigate('/admin/bookings')}
          className="btn-primary flex-1"
        >
          Back to List
        </button>
      </motion.div>
    </div>
  );
};

export default BookingDetails;
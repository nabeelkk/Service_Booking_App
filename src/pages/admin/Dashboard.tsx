import { motion } from 'framer-motion';
import { useAppSelector } from '@/hooks/useRedux';
import StatsCard from '@/components/StatsCard/StatsCard';
import { FaCalendarCheck, FaClock, FaCheckCircle, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';
import { Booking } from '@/types';

const Dashboard = () => {
  const bookings = useAppSelector((state) => state.booking.bookings);

  // Calculate stats
  const totalBookings = bookings.length;
  const pendingBookings = bookings.filter((b) => b.status === 'pending').length;
  const completedBookings = bookings.filter((b) => b.status === 'completed').length;
  const totalRevenue = bookings
    .filter((b) => b.status === 'completed')
    .reduce((sum, b) => sum + b.totalAmount, 0);

  const today = new Date().toDateString();
  const todayBookings = bookings.filter(
    (b) => new Date(b.createdAt).toDateString() === today
  ).length;

  // Recent bookings
  const recentBookings = [...bookings].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ).slice(0, 5);

  const getStatusColor = (status: Booking['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'confirmed':
        return 'bg-blue-100 text-blue-700';
      case 'in-progress':
        return 'bg-purple-100 text-purple-700';
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-600">Monitor your business performance</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Bookings"
          value={totalBookings}
          icon={FaCalendarCheck}
          trend={{ value: 12, isPositive: true }}
          delay={0}
        />
        <StatsCard
          title="Pending"
          value={pendingBookings}
          icon={FaClock}
          delay={0.1}
        />
        <StatsCard
          title="Completed"
          value={completedBookings}
          icon={FaCheckCircle}
          trend={{ value: 8, isPositive: true }}
          delay={0.2}
        />
        <StatsCard
          title="Revenue"
          value={`₹${totalRevenue.toLocaleString()}`}
          icon={FaMoneyBillWave}
          trend={{ value: 15, isPositive: true }}
          delay={0.3}
        />
      </div>

      {/* Today's Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-effect rounded-2xl p-6 bg-gradient-to-br from-primary-600 to-primary-700 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-primary-100 mb-2">Today's Bookings</p>
            <p className="text-4xl font-display font-bold">{todayBookings}</p>
            <p className="text-primary-100 text-sm mt-2">
              {todayBookings > 0 ? 'Great start to the day!' : 'No bookings yet today'}
            </p>
          </div>
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
            <FaChartLine className="text-5xl" />
          </div>
        </div>
      </motion.div>

      {/* Recent Bookings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-effect rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-display font-bold text-gray-900">
            Recent Bookings
          </h2>
          <a href="/admin/bookings" className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
            View All →
          </a>
        </div>

        {recentBookings.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📋</div>
            <p className="text-gray-600">No bookings yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {recentBookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{booking.serviceName}</p>
                  <p className="text-sm text-gray-600">{booking.userDetails.name}</p>
                </div>

                <div className="text-right mr-6">
                  <p className="font-semibold text-gray-900">
                    {new Date(booking.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600">{booking.time}</p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                    booking.status
                  )}`}
                >
                  {booking.status}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Dashboard;
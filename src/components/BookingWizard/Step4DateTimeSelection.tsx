import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCalendar, FaClock } from 'react-icons/fa';

interface Step4Props {
  date: string;
  time: string;
  onUpdate: (data: { date: string; time: string }) => void;
}

const Step4DateTimeSelection = ({ date, time, onUpdate }: Step4Props) => {
  const [selectedDate, setSelectedDate] = useState(date);
  const [selectedTime, setSelectedTime] = useState(time);

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM',
  ];

  const handleDateChange = (newDate: string) => {
    setSelectedDate(newDate);
    onUpdate({ date: newDate, time: selectedTime });
  };

  const handleTimeSelect = (slot: string) => {
    setSelectedTime(slot);
    onUpdate({ date: selectedDate, time: slot });
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

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
          Choose Date & Time
        </h2>
        <p className="text-gray-600">
          Select your preferred date and time slot
        </p>
      </div>

      <div className="glass-effect rounded-2xl p-8 space-y-8 max-w-3xl mx-auto">
        {/* Date Selection */}
        <div className="space-y-4">
          <label className="flex items-center space-x-2 text-gray-700 font-semibold mb-2">
            <FaCalendar className="text-primary-600" />
            <span>Select Date</span>
          </label>
          
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => handleDateChange(e.target.value)}
            min={today}
            className="input-field text-lg"
            aria-label="Service date"
          />
        </div>

        {/* Time Slot Selection */}
        <div className="space-y-4">
          <label className="flex items-center space-x-2 text-gray-700 font-semibold mb-2">
            <FaClock className="text-primary-600" />
            <span>Select Time Slot</span>
          </label>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {timeSlots.map((slot) => (
              <motion.button
                key={slot}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleTimeSelect(slot)}
                className={`py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                  selectedTime === slot
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-primary-300 hover:bg-primary-50'
                }`}
              >
                {slot}
              </motion.button>
            ))}
          </div>
        </div>

        {selectedDate && selectedTime && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6 border border-primary-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-900 font-semibold">Selected Schedule</p>
                <p className="text-primary-700 text-lg font-display font-bold mt-1">
                  {new Date(selectedDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <p className="text-primary-600 font-semibold">{selectedTime}</p>
              </div>
              <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center">
                <FaCalendar className="text-white text-2xl" />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Step4DateTimeSelection;
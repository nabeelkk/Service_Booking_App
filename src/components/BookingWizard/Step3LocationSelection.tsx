import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

interface Step3Props {
  location: { address: string; latitude?: number; longitude?: number };
  onUpdate: (location: { address: string; latitude?: number; longitude?: number }) => void;
}

const Step3LocationSelection = ({ location, onUpdate }: Step3Props) => {
  const [address, setAddress] = useState(location.address);

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    onUpdate({ address: e.target.value });
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          onUpdate({
            address: `Lat: ${position.coords.latitude.toFixed(4)}, Lng: ${position.coords.longitude.toFixed(4)}`,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setAddress(`Lat: ${position.coords.latitude.toFixed(4)}, Lng: ${position.coords.longitude.toFixed(4)}`);
        },
        (error) => {
          alert('Unable to get your location. Please enter address manually.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
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
          Select Your Location
        </h2>
        <p className="text-gray-600">
          Enter your address or use current location
        </p>
      </div>

      <div className="glass-effect rounded-2xl p-8 space-y-6 max-w-2xl mx-auto">
        <div className="space-y-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Service Location
          </label>
          
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={address}
              onChange={handleAddressChange}
              placeholder="Enter your address or area"
              className="input-field pl-12"
              aria-label="Service location address"
            />
          </div>

          <button
            type="button"
            onClick={getCurrentLocation}
            className="w-full btn-secondary flex items-center justify-center space-x-2"
          >
            <FaMapMarkerAlt />
            <span>Use My Current Location</span>
          </button>
        </div>

        <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6 border border-primary-100">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaMapMarkerAlt className="text-white text-xl" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-gray-900 mb-2">
                Location Tips
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Use your current location for faster service</li>
                <li>• Enter complete address including landmarks</li>
                <li>• Service available within 50km radius</li>
              </ul>
            </div>
          </div>
        </div>

        {location.latitude && location.longitude && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <FaMapMarkerAlt className="text-white" />
            </div>
            <div>
              <p className="text-green-800 font-semibold text-sm">Location detected!</p>
              <p className="text-green-700 text-xs">We'll send a technician to your location</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Step3LocationSelection;
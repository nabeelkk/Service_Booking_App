import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import {
  updateBookingData,
  setCurrentStep,
  nextStep,
  previousStep,
  submitBooking,
} from '@/store/bookingSlice';
import Stepper from '@/components/Stepper/Stepper';
import Step1CategorySelection from './Step1CategorySelection';
import Step2SubCategorySelection from './Step2SubCategorySelection';
import Step3LocationSelection from './Step3LocationSelection';
import Step4DateTimeSelection from './Step4DateTimeSelection';
import Step5UserDetails from './Step5UserDetails';
import Step6AddressForm from './Step6AddressForm';
import Step7ReviewConfirm from './Step7ReviewConfirm';
import { ServiceCategory, Booking } from '@/types';
import { serviceCategories } from '@/data/services';
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';

const BookingWizard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { currentBooking, currentStep } = useAppSelector((state) => state.booking);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    'Category',
    'Service',
    'Location',
    'Date & Time',
    'Details',
    'Address',
    'Review',
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return currentBooking.category !== '';
      case 2:
        return currentBooking.subCategory !== '';
      case 3:
        return currentBooking.location?.address !== '';
      case 4:
        return currentBooking.date !== '' && currentBooking.time !== '';
      case 5:
        return (
          currentBooking.userDetails?.name !== '' &&
          currentBooking.userDetails?.mobile !== '' &&
          currentBooking.userDetails?.mobile.length === 10
        );
      case 6:
        return (
          currentBooking.address?.house !== '' &&
          currentBooking.address?.street !== '' &&
          currentBooking.address?.place !== '' &&
          currentBooking.address?.district !== '' &&
          currentBooking.address?.pincode !== '' &&
          currentBooking.address?.pincode.length === 6
        );
      case 7:
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceed()) {
      dispatch(nextStep());
    }
  };

  const handlePrevious = () => {
    dispatch(previousStep());
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const categoryData = serviceCategories.find((c) => c.id === currentBooking.category);
    const subService = categoryData?.subServices.find((s) => s.id === currentBooking.subCategory);

    const booking: Booking = {
      id: `BK${Date.now()}`,
      category: currentBooking.category as ServiceCategory,
      subCategory: currentBooking.subCategory || '',
      location: currentBooking.location || { address: '' },
      date: currentBooking.date || '',
      time: currentBooking.time || '',
      userDetails: currentBooking.userDetails || { name: '', mobile: '' },
      address: currentBooking.address || {
        house: '',
        street: '',
        place: '',
        district: '',
        pincode: '',
      },
      status: 'pending',
      createdAt: new Date().toISOString(),
      serviceName: subService?.name || '',
      totalAmount: subService?.price || 0,
    };

    dispatch(submitBooking(booking));
    setIsSubmitting(false);

    // Show success message and navigate
    navigate('/booking-success', { state: { booking } });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1CategorySelection
            selectedCategory={currentBooking.category as ServiceCategory | ''}
            onSelect={(category) => dispatch(updateBookingData({ category }))}
          />
        );
      case 2:
        return (
          <Step2SubCategorySelection
            category={currentBooking.category as ServiceCategory}
            selectedSubCategory={currentBooking.subCategory || ''}
            onSelect={(subCategory) => dispatch(updateBookingData({ subCategory }))}
          />
        );
      case 3:
        return (
          <Step3LocationSelection
            location={currentBooking.location || { address: '' }}
            onUpdate={(location) => dispatch(updateBookingData({ location }))}
          />
        );
      case 4:
        return (
          <Step4DateTimeSelection
            date={currentBooking.date || ''}
            time={currentBooking.time || ''}
            onUpdate={(data) => dispatch(updateBookingData(data))}
          />
        );
      case 5:
        return (
          <Step5UserDetails
            userDetails={currentBooking.userDetails || { name: '', mobile: '' }}
            onUpdate={(userDetails) => dispatch(updateBookingData({ userDetails }))}
          />
        );
      case 6:
        return (
          <Step6AddressForm
            address={
              currentBooking.address || {
                house: '',
                street: '',
                place: '',
                district: '',
                pincode: '',
              }
            }
            onUpdate={(address) => dispatch(updateBookingData({ address }))}
          />
        );
      case 7:
        return (
          <Step7ReviewConfirm
            bookingData={currentBooking}
            onEdit={(step) => dispatch(setCurrentStep(step))}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-3xl p-8 max-w-6xl mx-auto"
        >
          <Stepper currentStep={currentStep} steps={steps} />

          <div className="mt-8">
            <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200"
          >
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="btn-secondary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaArrowLeft />
              <span>Previous</span>
            </button>

            {currentStep < 7 ? (
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Next</span>
                <FaArrowRight />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="btn-primary flex items-center space-x-2 min-w-[200px] justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <FaCheck />
                    <span>Confirm Booking</span>
                  </>
                )}
              </button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingWizard;
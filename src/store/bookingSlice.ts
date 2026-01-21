import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Booking, BookingFormData } from '@/types';

interface BookingState {
  currentBooking: Partial<BookingFormData>;
  currentStep: number;
  bookings: Booking[];
}

const initialState: BookingState = {
  currentBooking: {
    category: '',
    subCategory: '',
    location: { address: '' },
    date: '',
    time: '',
    userDetails: { name: '', mobile: '' },
    address: { house: '', street: '', place: '', district: '', pincode: '' },
  },
  currentStep: 1,
  bookings: [],
};

// Load from localStorage if available
const loadState = (): BookingState => {
  try {
    const serializedState = localStorage.getItem('bookingState');
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return initialState;
  }
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState: loadState(),
  reducers: {
    updateBookingData: (state, action: PayloadAction<Partial<BookingFormData>>) => {
      state.currentBooking = { ...state.currentBooking, ...action.payload };
      localStorage.setItem('bookingState', JSON.stringify(state));
    },
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
      localStorage.setItem('bookingState', JSON.stringify(state));
    },
    nextStep: (state) => {
      if (state.currentStep < 7) {
        state.currentStep += 1;
        localStorage.setItem('bookingState', JSON.stringify(state));
      }
    },
    previousStep: (state) => {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
        localStorage.setItem('bookingState', JSON.stringify(state));
      }
    },
    submitBooking: (state, action: PayloadAction<Booking>) => {
      state.bookings.push(action.payload);
      state.currentBooking = initialState.currentBooking;
      state.currentStep = 1;
      localStorage.setItem('bookingState', JSON.stringify(state));
    },
    updateBookingStatus: (state, action: PayloadAction<{ id: string; status: Booking['status'] }>) => {
      const booking = state.bookings.find(b => b.id === action.payload.id);
      if (booking) {
        booking.status = action.payload.status;
        localStorage.setItem('bookingState', JSON.stringify(state));
      }
    },
    resetBooking: (state) => {
      state.currentBooking = initialState.currentBooking;
      state.currentStep = 1;
      localStorage.setItem('bookingState', JSON.stringify(state));
    },
  },
});

export const {
  updateBookingData,
  setCurrentStep,
  nextStep,
  previousStep,
  submitBooking,
  updateBookingStatus,
  resetBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
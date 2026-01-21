export type ServiceCategory = 'home' | 'appliance' | 'gadget';

export interface SubService {
  id: string;
  name: string;
  icon: string;
  description: string;
  price: number;
}

export interface ServiceCategoryData {
  id: ServiceCategory;
  name: string;
  icon: string;
  description: string;
  subServices: SubService[];
}

export interface BookingFormData {
  category: ServiceCategory | '';
  subCategory: string;
  location: {
    latitude?: number;
    longitude?: number;
    address: string;
  };
  date: string;
  time: string;
  userDetails: {
    name: string;
    mobile: string;
  };
  address: {
    house: string;
    street: string;
    place: string;
    district: string;
    pincode: string;
  };
}

export interface Booking extends BookingFormData {
  id: string;
  status: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';
  createdAt: string;
  serviceName: string;
  totalAmount: number;
}

export interface BookingStats {
  totalBookings: number;
  pendingBookings: number;
  completedBookings: number;
  totalRevenue: number;
  todayBookings: number;
  monthlyGrowth: number;
}
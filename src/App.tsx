import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AdminLayout from './components/AdminLayout/AdminLayout';

// Public Pages
import Home from './pages/public/Home';
import Services from './pages/public/Services';
import Contact from './pages/public/Contact';
import BookingSuccess from './pages/public/BookingSuccess';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import BookingsList from './pages/admin/BookingList';
import BookingDetails from './pages/admin/BookingDetails';

// Booking
import BookingWizard from './components/BookingWizard/BookingWizard';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Public Routes with Header and Footer */}
          <Route
            path="/*"
            element={
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/booking" element={<BookingWizard />} />
                    <Route path="/booking-success" element={<BookingSuccess />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            }
          />

          {/* Admin Routes without Header and Footer */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="bookings" element={<BookingsList />} />
            <Route path="bookings/:id" element={<BookingDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
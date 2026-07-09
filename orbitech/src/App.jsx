import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AdminLayout from "./components/layout/AdminLayout";

import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Coverage from "./pages/Coverage";
import Register from "./pages/Register";
import TrackStatus from "./pages/TrackStatus";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

import Dashboard from "./pages/admin/Dashboard";
import Customers from "./pages/admin/Customers";
import AdminPackages from "./pages/admin/AdminPackages";
import Areas from "./pages/admin/Areas";
import Schedules from "./pages/admin/Schedules";
import Promos from "./pages/admin/Promos";
import Testimonials from "./pages/admin/Testimonials";
import Statistics from "./pages/admin/Statistics";

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col text-on-background">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/coverage" element={<Coverage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/track" element={<TrackStatus />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="packages" element={<AdminPackages />} />
          <Route path="areas" element={<Areas />} />
          <Route path="schedules" element={<Schedules />} />
          <Route path="promos" element={<Promos />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="statistics" element={<Statistics />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppLayout />
      </AppProvider>
    </BrowserRouter>
  );
}

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import UserProfile from "./components/Profile/UserProfile";
import HomePage from "./components/Homepage/HomePage";
import MealBooking from "./components/Booking/MealBooking";
import Dashboard from "./components/Dashboard/Dashboard";
import SignupLogin from "./components/SignupLogin/SignupLogin";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <Router>
        <Navbar />
        <div className="sm:w-full dark:bg-gray-700 bg-gray-100 content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/mealbooking" element={<MealBooking />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup-login" element={<SignupLogin />} />
          </Routes>
        </div>
        <Footer />

    </Router>
  );
}

export default App;

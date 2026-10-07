import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";

import UniversityList from "./pages/universities/UniversityList";
import UniversityDetail from "./pages/universities/UniversityDetail";
import CompanyList from "./pages/companies/CompanyList/CompanyList";
import CompanyDetail from "./pages/companies/CompanyDetail/CompanyDetail";
import HotelList from "./pages/hotels/HotelList";
import HotelDetail from "./pages/hotels/HotelDetail";
import HospitalList from "./pages/hospitals/HospitalList";
import HospitalDetail from "./pages/hospitals/HospitalDetail";
import CityDetail from "./pages/CityDetail/CityDetail";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Header />
      {/* <BrowserRouter> */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Universities routes */}
        <Route path="/universities" element={<UniversityList />} />
        <Route path="/universities/:id" element={<UniversityDetail />} />

        {/* Companies Routes */}
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/:id" element={<CompanyDetail />} />

        {/* Hotels Routes */}
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/hotels/:id" element={<HotelDetail />} />

        {/* Hospitals Routes */}
        <Route path="/hospitals" element={<HospitalList />} />
        <Route path="/hospitals/:id" element={<HospitalDetail />} />

        {/* City Route */}
        <Route path="/cities/:city" element={<CityDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </BrowserRouter> */}
      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}

export default App;

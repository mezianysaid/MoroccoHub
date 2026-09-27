import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UniversityList from "./pages/universities/UniversityList";
import UniversityDetail from "./pages/universities/UniversityDetail";
import CompanyList from "./pages/companies/CompanyList";
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Universities */}
          <Route path="/universities" element={<UniversityList />} />
          <Route path="/universities/:id" element={<UniversityDetail />} />

          {/* Other categories */}
          <Route path="/companies" element={<CompanyList />} />
          {/* <Route path="/hotels" element={<Hotels />} /> */}
          {/* <Route path="/hospitals" element={<Hospitals />} /> */}

          {/* 404 */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}

export default App;

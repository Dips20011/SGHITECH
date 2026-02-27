import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Topbar from "./pages/Topbar";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";
import Portfolio from "./pages/Portfolio";



function Loader() {
  return (
    <div className="loader">
      <div className="spinner-border text-success"></div>
    </div>
  );
}

function Wrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}

      <Topbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products/>} />
   
        <Route path="/career" element={<Career />} />
        <Route path="/contacts" element={<Contacts />} />
       
        
        
      </Routes>

      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Wrapper />
    </BrowserRouter>
  );
}

export default App;
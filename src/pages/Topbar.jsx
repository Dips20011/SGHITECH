import { Link } from "react-router-dom"
import logo from "../assets/img/masonry-portfolio/sglogo.png";
import { useEffect, useState } from "react";


const Topbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);



  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeMenu = () => {
    setMobileOpen(false);
  };

 


  return (
    <>
    <div className="topbar bg-dark text-white py-2">
      <div className="container d-flex align-items-center justify-content-between">

        {/* LEFT */}
        <div className="d-flex gap-4 align-items-center">
          <span>
            <i className="bi bi-telephone me-2"></i>
            Phone: (+91) 9096408111
          </span>

          <span>
            <i className="bi bi-envelope me-2"></i>
            Email: info@sghitech.in
          </span>
        </div>

        {/* RIGHT */}
        <div className="d-flex align-items-center gap-3">

          <Link to="/login" className="text-white text-decoration-none">
            <i className="bi bi-person me-1"></i> Sign in
          </Link>

          <a href="https://x.com/sg_hitech" className="text-white">
            <i className="bi bi-twitter"></i>
          </a>

          <a href="https://www.facebook.com/people/Sghi-Tech/100069333823684/#" className="text-white">
            <i className="bi bi-facebook"></i>
          </a>

         

        </div>

      </div>

    </div>
    <div>
      <>
          <>
     

       <header className="header sticky-top">
        <div className="container d-flex align-items-center justify-content-between">

          {/* ✅ Logo LEFT */}
          <Link to="/" className="logo">
            <img src={logo} alt="logo" className="logo-img" />
          </Link>

          {/* Desktop Menu */}
          <nav className="navmenu">
            <ul className="desktop-menu">
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/about" onClick={closeMenu}>Aboutus</Link></li>
              <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
              <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
              <li><Link to="/career" onClick={closeMenu}>Career</Link></li>
              <li><Link to="/contacts" onClick={closeMenu}>Contact</Link></li>
            </ul>
          </nav>

          {/* ✅ Hamburger RIGHT */}
          <div
            className="mobile-nav-toggle"
            onClick={toggleMenu}
          >
            <i className={`bi ${mobileOpen ? "bi-x" : "bi-list"}`}></i>
          </div>

        </div>
      </header>

      {/* ✅ MOBILE OVERLAY MENU */}
      {mobileOpen && (
        <div className="mobile-overlay">

          <div className="mobile-close" onClick={toggleMenu}>
            <i className="bi bi-x"></i>
          </div>

          <ul className="mobile-menu">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>Aboutus</Link></li>
            <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
            <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/career" onClick={closeMenu}>Career</Link></li>
            <li><Link to="/contacts" onClick={closeMenu}>Contact</Link></li>
          </ul>

        </div>
      )}
    </></>
   


    
    </div>
    </>

  )
}

export default Topbar
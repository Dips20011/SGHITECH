import { Link } from "react-router-dom"

const Topbar = () => {
  return (
    <>
    <div className="topbar bg-dark text-white py-2">
      <div className="container d-flex justify-content-between align-items-center">

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
       <header id="header" className="header d-flex align-items-center sticky-top">
    <div className="container position-relative d-flex align-items-center">

      <a href="/" className="logo d-flex align-items-center me-auto">
       
        <h1 className="sitename"><img src="src/assets/img/masonry-portfolio/sglogo.png"></img></h1><span>.</span>
      </a>

     <nav id="navmenu" className="navmenu">
  <ul>

    <li>
      <Link to="/" className="active">Home</Link>
    </li>

    <li className="dropdown">
      <Link to="/about">Aboutus</Link>
    </li>

    <li>
      <Link to="/products">Products</Link>
    </li>
     <li>
      <Link to="/services">Services</Link>
    </li>

    <li>
      <Link to="/career">Career</Link>
    </li>


    <li>
      <Link to="/contacts">Contact</Link>
    </li>

  </ul>

  <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
</nav>

     

    </div>
  </header>
    </div>
    </>

  )
}

export default Topbar
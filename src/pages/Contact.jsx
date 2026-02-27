const Contact = () => {
  return (
    <div>
      <footer id="footer" className="footer dark-background">

        <div className="container footer-top " >
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">Company</span>
              </a>
              <div className="footer-contact pt-3">
                <p>SGHI-TECH Swedaganga Society, Pasaydan Building, Warje Pune, 411058</p>

                <p className="mt-3"><strong>Phone:</strong> <span> 9096408111</span></p>
                <p><strong>Email:</strong> <span>info@sghitech.in</span></p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="https://x.com/sg_hitech"><i className="bi bi-twitter-x"></i></a>
                <a href="https://www.facebook.com/people/Sghi-Tech/100069333823684/#"><i className="bi bi-facebook"></i></a>
               
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Recent Project</h4>
              <ul>
                <li><a href="#"> School ERP</a></li>
                <li><a href="#">Payroll System</a></li>
                <li><a href="#"> Blood Bank</a></li>
                <li><a href="#">Co-op Bank</a></li>

              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Twitter</h4>
              <ul>
                <li><a href="https://x.com/Ram_Magar1">
                  @Ram_Magar1 Here we got the best web apps for school management thanks SGHI-TECH</a></li>
                <li><a href="https://x.com/pra2win">
                  @Pra2win All different web services got in one place.</a></li>
                <li><a href="https://x.com/powar_nikhil">
                  @powar_nikhil I'm satisfy. my all requirements full filled by company within time.</a></li>

              </ul>
            </div>



          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">Company</strong> <span>All Rights Reserved</span></p>
          <div className="credits">

            <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by
          </div>
        </div>

      </footer>
    </div>
  )
}

export default Contact
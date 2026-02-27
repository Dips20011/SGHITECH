const Services = () => {
  return (
    <div>
      <main className="main">


        <div className="page-title accent-background" >
          <div className="container r">
            <h1 className="mb-2 mb-lg-0 text-center">Services</h1>

          </div>
        </div>


        <section id="services" className="services section light-background">
          <div className="container">

            {/* ROW 1 */}
            <div className="row gy-4 ">
              <div className="col-lg-4 col-md-6 mb-4  " data-aos="fade-up" data-aos-delay="100">
                <div className="serviceBox_1 text-center p-4 shadow-sm service-item item-cyan position-relative">
                  <div className="icon_service mb-3">
                    <i className="fa fa-globe fs-1 text-success"></i>
                    <h3>Web Development</h3>
                  </div>
                  <p>
                    Web development can range from simple static pages to complex
                    web applications and e-commerce systems.
                  </p>
                 
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                <div className="serviceBox_1 text-center p-4 shadow-sm service-item item-cyan position-relative">
                  <i className="fa fa-windows fs-1 text-success"></i>
                  <h3>Desktop Application</h3>
                  <p>
                    Standalone software installed on client systems with
                    platform-independent compatibility.
                  </p>
                  
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100" >
                <div className="serviceBox_1 text-center p-4 shadow-sm service-item item-cyan position-relative">
                  <i className="fa fa-android fs-1 text-success"></i>
                  <h3>Mobile Application</h3>
                  <p>
                    Mobile app development focused on smooth performance and
                    user-friendly experiences.
                  </p>
                  
                </div>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                <div className="serviceBox_1 text-center p-4 shadow-sm service-item item-cyan position-relative">
                  <i className="fa fa-truck fs-1 text-success"></i>
                  <h3>Sales and Services</h3>
                  <p>
                    Enhancing customer satisfaction through reliable sales and
                    support services.
                  </p>
                
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                <div className="serviceBox_1 text-center p-4 shadow-sm service-item item-cyan position-relative">
                  <i className="fa fa-globe fs-1 text-success"></i>
                  <h3>Domain Registration</h3>
                  <p>
                    Reserve and manage domain names for your online presence with
                    secure registration.
                  </p>
                  
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                <div className="serviceBox_1 text-center p-4 shadow-sm service-item item-cyan position-relative">
                  <i className="fa fa-wrench fs-1 text-success"></i>
                  <h3>Hardware & Networking</h3>
                  <p>
                    Network setup and hardware solutions including switches,
                    gateways, and cables.
                  </p>
                 
                </div>
              </div>
            </div>

          </div>
        </section>


        <section id="features" className="features section">


          <div className="container section-title" data-aos="fade-up" >
            <h2>Features</h2>
          
          </div>

          <div className="container">

            <div className="row gy-4">

              <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100" >
                <div className="features-item">
               
                  <h3><a href="" className="stretched-link">Dot Net</a></h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="features-item">
                  
                  <h3><a href="" className="stretched-link">Sql</a></h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100" >
                <div className="features-item">
                 
                  <h3><a href="" className="stretched-link">React</a></h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100" >
                <div className="features-item">
                  
                  <h3><a href="" className="stretched-link">React Native</a></h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100" >
                <div className="features-item">
                  
                  <h3><a href="" className="stretched-link">PHP</a></h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100" >
                <div className="features-item">
                 
                  <h3><a href="" className="stretched-link">Android</a></h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="features-item">
                  
                  <h3><a href="" className="stretched-link">JAVA</a></h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="features-item">
                 
                  <h3><a href="" className="stretched-link">HTML 5</a></h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="features-item">
                  
                  <h3><a href="" className="stretched-link">CSS</a></h3>
                </div>
              </div>

              

              

             
              

            </div>

          </div>

        </section>

      </main>
    </div>
  )
}

export default Services
import React from 'react'
import { useEffect, useRef } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import img1 from "../assets/img/masonry-portfolio/1.jpeg";
import img2 from "../assets/img/masonry-portfolio/2.jpeg";
import img3 from "../assets/img/masonry-portfolio/3.jpeg";
import img5 from "../assets/img/masonry-portfolio/5.jpeg";
import img6 from "../assets/img/masonry-portfolio/6.jpeg";
import img7 from "../assets/img/masonry-portfolio/7.jpeg";
import img8 from "../assets/img/masonry-portfolio/8.jpeg";
import img9 from "../assets/img/masonry-portfolio/9.jpeg";
import img10 from "../assets/img/masonry-portfolio/10.jpeg";
import img11 from "../assets/img/masonry-portfolio/11.jpeg";
import img12 from "../assets/img/masonry-portfolio/12.jpeg";
import img13 from "../assets/img/masonry-portfolio/13.jpeg";


function PortFolio() {
    const isotope = useRef(null);

    useEffect(() => {
        const container = document.querySelector(".isotope-container");

        // init isotope
        isotope.current = new Isotope(container, {
            itemSelector: ".isotope-item",
            layoutMode: "masonry",
        });

        // images load झाल्यावर layout fix
        imagesLoaded(container, () => {
            isotope.current.layout();
        });

        // filter logic
        const filters = document.querySelectorAll(".portfolio-filters li");

        filters.forEach((filter) => {
            filter.addEventListener("click", () => {
                filters.forEach((el) => el.classList.remove("filter-active"));
                filter.classList.add("filter-active");

                const filterValue = filter.getAttribute("data-filter");
                isotope.current.arrange({ filter: filterValue });
            });
        });

        return () => isotope.current.destroy();
    }, []);
    return (
        <div>  <section id="portfolio" className="portfolio section">


            <div className="container section-title" data-aos="fade-up">
                <h2>Gallery</h2>
               
            </div>

            <div className="container">

                <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

                    <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                        <li data-filter="*" className="filter-active">All</li>
                        <li data-filter=".filter-app">Achievements</li>
                        <li data-filter=".filter-product">Functions</li>
                        <li data-filter=".filter-branding">Clients</li>
                        <li data-filter=".filter-em">Employees</li>

                    </ul>

                    <div className="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

                        <div className="col-lg-4 col-md-6  portfolio-item isotope-item filter-app">
                           <img src={img1} className="img-fluid img" alt="" />

                        </div>

                       
  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
    <img src={img5} className="img-fluid" alt="" />
  </div>

  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
    <img src={img8} className="img-fluid" alt="" />
  </div>

  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-em">
    <img src={img11} className="img-fluid" alt="" />
  </div>

  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
    <img src={img2} className="img-fluid" alt="" />
  </div>

  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
    <img src={img6} className="img-fluid" alt="" />
  </div>

  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
    <img src={img9} className="img-fluid" alt="" />
  </div>

  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-em">
    <img src={img13} className="img-fluid" alt="" />
  </div>

  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
    <img src={img3} className="img-fluid" alt="" />
  </div>

  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
    <img src={img7} className="img-fluid" alt="" />
  </div>

  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
    <img src={img10} className="img-fluid" alt="" />
  </div>

  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-em">
    <img src={img12} className="img-fluid" alt="" />
  </div>

                    </div>

                </div>

            </div>

        </section> </div>
    )
}

export default PortFolio

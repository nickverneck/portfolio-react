import React from "react";
import "../styles/portfolio.css";
function Portfolio() {
    return (
      <div id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>A collection of my work</p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-JS">JS</li>
              <li data-filter=".filter-handlebars">Handlebars</li>
              <li data-filter=".filter-wordpress">WordPress</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-4 col-md-6 portfolio-item filter-JS">
            <div className="portfolio-wrap">
              <img src="/images/surfup.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-links">
      
                <a href="https://github.com/nickverneck/Surfs-Up">Surfs-Up</a>
              </div>
            </div>
          </div>


          <div className="col-lg-4 col-md-6 portfolio-item filter-handlebars">
            <div className="portfolio-wrap">
              <img src="/images/parthub.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-links">
      
                <a href="https://github.com/Arecio3/PartHub">PartHub</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 portfolio-item filter-wordpress">
            <div className="portfolio-wrap">
              <img src="/images/aprendiz.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-links">
      
                <a href="https://www.aprendizdeviajante.com/">Aprendiz de Viajante</a>
              </div>
            </div>
          </div>
         
        </div>

      </div>
    </div>
    );
  }
  
  export default Portfolio;
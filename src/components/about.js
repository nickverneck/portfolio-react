import React from "react";

function About() {
    return (
        <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
              Born and raised in Brazil with a passion for adventure and problem
              solving.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src="/images/avatar.png" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Full Stack Developer & Photographer</h3>
              <p className="fst-italic">Here are some of my favorite hobbies.</p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><strong>Surfing</strong></li>
                    <li><strong>Traveling</strong></li>
                    <li><strong>cooking</strong></li>
                    <li><strong>SnowBoarding</strong></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><strong>Rock Climbing</strong></li>
                    <li><strong>Gaming</strong></li>
                    <li><strong>Racing</strong></li>
                    <li><strong>Watching Movies</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
  
  export default About;
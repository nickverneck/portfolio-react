import React from "react";

function Contact() {
    return (
      <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>If you like my work feel free to reach me on my social medias or my email.</p>
        </div>

        <div className="row" data-aos="fade-in">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="linkedin">
              <h1><i className="bx bxl-linkedin"></i></h1>  
               
                <p><a href="https://www.linkedin.com/in/nicollas-verneck-1727971a9/">nickVerneck</a></p>
              </div>
              <div className="instagram">
                <h1><i className="bx bxl-instagram"></i></h1>
               
                <p><a href="https://instagram.com/nickverneck">@nickVerneck</a></p>
              </div>
              </div></div>
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
              <div className="email">
               <h1><i className="bi bi-envelope"></i></h1>
              
                <p>nicollas@gmail.com</p>
              </div>

              <div className="phone">
               <h1><i className="bi bi-phone"></i></h1>
                
                <p>+1 (407) 222 0189</p>
              </div>

             
            </div>

          </div>


        </div>

      </div>
    </section>
    );
  }
  
  export default Contact;
import React from "react";
import img1 from "../assets/img/team/team-1.jpg";
import img2 from "../assets/img/team/team-2.jpg";
import img3 from "../assets/img/team/team-3.jpg";
import img4 from "../assets/img/team/team-4.jpg";

const Team = () => {
    return(
        <section id="team" className="team">
        <div className="container">
  
          <div className="section-title" >
            <h2>Team</h2>
            <p>Our team is always here to help</p>
          </div>
  
          <div className="row">
  
            <div className="col-xl-3 col-lg-4 col-md-6" >
              <div className="member">
                <img src={img1} className="img-fluid" alt=""/>
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-md-6" >
              <div className="member">
                <img src={img2} className="img-fluid" alt=""/>
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                  </div>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-md-6" >
              <div className="member">
                <img src={img3} className="img-fluid" alt=""/>
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                  </div>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-md-6" >
              <div className="member">
                <img src={img4} className="img-fluid" alt=""/>
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                  </div>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
    )
}

export default Team;
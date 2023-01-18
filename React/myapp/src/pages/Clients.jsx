import React from "react";
import img1 from "../assets/img/clients/client-1.png";
import img2 from "../assets/img/clients/client-2.png";
import img3 from "../assets/img/clients/client-3.png";
import img4 from "../assets/img/clients/client-4.png";
import img5 from "../assets/img/clients/client-5.png";
import img6 from "../assets/img/clients/client-6.png";
import img7 from "../assets/img/clients/client-7.png";
import img8 from "../assets/img/clients/client-8.png";

const Clients = () => {
    return(
        <section id="clients" className="clients section-bg">
        <div className="container" >
  
          <div className="section-title">
            <h2>Clients</h2>
            <p>They trusted us</p>
          </div>
  
          <div className="clients-slider swiper"  >
            <div className="swiper-wrapper align-items-center">
              <div className="swiper-slide"><img src={img1} className="img-fluid" alt=""/></div>
              <div className="swiper-slide"><img src={img2} className="img-fluid" alt=""/></div>
              <div className="swiper-slide"><img src={img3} className="img-fluid" alt=""/></div>
              <div className="swiper-slide"><img src={img4} className="img-fluid" alt=""/></div>
              <div className="swiper-slide"><img src={img5} className="img-fluid" alt=""/></div>
              <div className="swiper-slide"><img src={img6} className="img-fluid" alt=""/></div>
              <div className="swiper-slide"><img src={img7} className="img-fluid" alt=""/></div>
              <div className="swiper-slide"><img src={img8} className="img-fluid" alt=""/></div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
  
        </div>
      </section>
    )
}
export default Clients;
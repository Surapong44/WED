import React from "react";
import img1 from "../assets/img/portfolio/portfolio-1.jpg";
import img2 from "../assets/img/portfolio/portfolio-2.jpg";
import img3 from "../assets/img/portfolio/portfolio-3.jpg";
import img4 from "../assets/img/portfolio/portfolio-4.jpg";
import img5 from "../assets/img/portfolio/portfolio-5.jpg";
import img6 from "../assets/img/portfolio/portfolio-6.jpg";
import img7 from "../assets/img/portfolio/portfolio-7.jpg";
import img8 from "../assets/img/portfolio/portfolio-8.jpg";
import img9 from "../assets/img/portfolio/portfolio-9.jpg";


const Portfolio = () => {
    return(
        <div>
            <section id="portfolio" className="portfolio">
        <div className="container" >
  
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>Check out our beautifull portfolio</p>
          </div>
  
          <div className="row">
            <div className="col-lg-12">
              <ul id="portfolio-flters">
                <li  className="filter-active">All</li>
                <li >App</li>
                <li >Card</li>
                <li >Web</li>
              </ul>
            </div>
          </div>
  
          <div className="row portfolio-container" >
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={img1} className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg"  className="portfolio-lightbox" title="App 1"><i className="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                </div>
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={img2} className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="../assets/img/portfolio/portfolio-2.jpg"  className="portfolio-lightbox" title="Web 3"><i className="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                </div>
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={img3} className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-3.jpg" className="portfolio-lightbox" title="App 2"><i className="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                </div>
                <div className="portfolio-info">
                  <h4>App 2</h4>
                  <p>App</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={img4} className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-4.jpg"  className="portfolio-lightbox" title="Card 2"><i className="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                </div>
                <div className="portfolio-info">
                  <h4>Card 2</h4>
                  <p>Card</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={img5} className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-5.jpg"  className="portfolio-lightbox" title="Web 2"><i className="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                </div>
                <div className="portfolio-info">
                  <h4>Web 2</h4>
                  <p>Web</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={img6} className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-6.jpg"  className="portfolio-lightbox" title="App 3"><i className="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                </div>
                <div className="portfolio-info">
                  <h4>App 3</h4>
                  <p>App</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={img7} className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-7.jpg"  className="portfolio-lightbox" title="Card 1"><i className="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                </div>
                <div className="portfolio-info">
                  <h4>Card 1</h4>
                  <p>Card</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={img8} className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-8.jpg"  className="portfolio-lightbox" title="Card 3"><i className="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                </div>
                <div className="portfolio-info">
                  <h4>Card 3</h4>
                  <p>Card</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={img9} className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-9.jpg"  className="portfolio-lightbox" title="Web 3"><i className="bi bi-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                </div>
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                </div>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
        </div>
        
    )
}

export default Portfolio;
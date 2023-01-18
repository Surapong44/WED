import React from "react";
import Header from "./header";
import Footer from "./Footer";
import Home from "../pages/Home";
import Service from "../pages/Service";
import Portfolio from "../pages/Portfolio";
import FAQ from "../pages/FAQ";
import About from "./About";
import Team from "../pages/Team";
import Clients from "../pages/Clients";
import Contact from "../pages/Contact";
import Contecttest from "../pages/Contecttest";

const Main = ({ children }) => {
    
    return (
        <div>
            <Header />
            <main id="main">{children}</main>
            <Footer />
        </div>

    )

    // return (
    //     <div>
    //         <Header />
    //         <Home />
    //         <About />
    //         <Service />
    //         <Portfolio />
    //         <FAQ />
    //         <Team />
    //         <Clients />
    //         <Contact />
    //         <Contecttest />
    //         <Footer />
    //     </div>

    // )
}

export default Main;
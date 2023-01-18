import  Home  from "../pages/Home";
import About from "../layout/About"
import Service from "../pages/Service";
import Portfolio from "../pages/Portfolio";
import FAQ from "../pages/FAQ";
import Team from "../pages/Team"
import Clients from "../pages/Clients";
import Contact from "../pages/Contact";

export const PublicRoute = [
    {
        id: "1",
        path: "*",
        element: <Home/>,
    },
    {
        id: "2",
        path: "/about",
        element: <About/>,
    },
    {
        id: "3",
        path: "/portfolio",
        element: <Portfolio/>,
    },
    {
        id: "4",
        path: "/faq",
        element: <FAQ/>,
    },
    {
        id: "5",
        path: "/team",
        element: <Team/>,
    },
    {
        id: "6",
        path: "/clients",
        element: <Clients/>,
    },
    {
        id: "7",
        path: "/contact",
        element: <Contact/>,
    },
    {
        id: "8",
        path: "/services",
        element: <Service/>,
    },
];
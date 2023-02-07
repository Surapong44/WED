import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import { Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import userIcon from "../../assets/userIcon.png";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  return (
    <header>
      <Container className="header">
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Com Store</h1>
              </div>
            </div>

            <div className="navigation">
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navclass) =>
                        navclass.isActive ? "nav__action" : "a"
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                {/* <span className="badge">1</span> */}
              </span>

              <span className="cart__icon">
                <i className="ri-shopping-bag-line"></i>
                {/* <span className="badge">1</span> */}
              </span>

              <span>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={userIcon}
                  alt="user"
                />
              </span>
            </div>

            <div className="mobile__menu">
              <span>
                <AiOutlineMenu />
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

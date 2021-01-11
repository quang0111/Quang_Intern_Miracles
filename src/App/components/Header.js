import React, {useState, useEffect} from "react";

import Logo from "../../assets/images/logo.png";
import Search from "../../assets/icons/search.png";
import Cart from "../../assets/icons/shopping-cart.png";
import Dropdown from "../../assets/icons/dropdown-arrow.png";

import NavMenu from "../../assets/icons/nav-menu.png";


import Homepage from "../Page/Homepage/Homepage";
import About from "../Page/About";
import Map from "../Page/Map";
import News from "../Page/News";
import Contact from "../Page/Contact";


import { Container, Row} from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const Header =() => {
  const [open, isOpen] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);


  useEffect(() => {

    const handleSize = () => {
      setWidth(window.innerWidth);
      size();
    }

    window.addEventListener('size', handleSize);
    return () => window.removeEventListener("size", handleSize);
  }, [width]);


  const size = () => {
    if(width <= 992){
      isOpen(false);
    }
    else{
      isOpen(true)
    }
  }

  const toggle = () => isOpen(!open);



  return (
    <Router>
   
    <div className="header">
      <Container>
        <Row className="header__row">
          <div className=" header__logo">
            <img
             src={Logo} alt="Logo" 
             />
          </div>
          <div className="header__menu"
           style={{display: open ? 'block': 'none'}}>
       
            <ul className="header__menu-list">
              <li className="header__menu-item">
                <Link className="header__menu-link" to="/Homepage">
                  Trang Chủ
                </Link>
              </li>
              <li className="header__menu-item">
                <Link className="header__menu-link" to="/About">
                  Giới thiệu
                </Link>
              </li>
              <li className="header__menu-item">
                <a className="header__menu-link" href="">
                  Sản phẩm
                  <img
                   src={Dropdown} alt="dropdown" 
                   />
                </a>
                <div className="header__menu-link-overlay"></div>
                 <div className="dropdown">
                  <div className="arrow-up"></div>
                    <div className="dropdown__content">
                      <ul className="dropdown__list">
                        <p>Dưỡng da</p>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Áo khoác
                          </a>
                        </li>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Bộ áo liền quần
                          </a>
                        </li>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Dresses
                          </a>
                        </li>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Quần / Váy
                          </a>
                        </li>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Quần short
                          </a>
                        </li>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Quần jean
                          </a>
                        </li>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Đồ đan
                          </a>
                        </li>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Áo nỉ
                          </a>
                        </li>
                      </ul>
                      <ul className="dropdown__list">
                        <p>Nước hoa</p>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Áo cánh / Áo sơ mi
                          </a>
                        </li>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Túi xách & Ba lô
                          </a>
                        </li>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Khăn quàng cổ và Foulards
                          </a>
                        </li>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Dệt kira Hats & Gloves
                          </a>
                        </li>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Vớ & Socks
                          </a>
                        </li>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Jewerly
                          </a>
                        </li>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Bị bảo vệ
                          </a>
                        </li>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Gìay
                          </a>
                        </li>
                      </ul>
                      <ul className="dropdown__list">
                        <p>Trang sức</p>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Áo cánh / Áo sơ mi
                          </a>
                        </li>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Túi xách & Ba lô
                          </a>
                        </li>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Khăn quàng cổ và Foulards
                          </a>
                        </li>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Dệt kira Hats & Gloves
                          </a>
                        </li>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Vớ & Socks
                          </a>
                        </li>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Jewerly
                          </a>
                        </li>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Bị bảo vệ
                          </a>
                        </li>
                        <li className="dropdown__list-item">
                          <a className="dropdown__list-link" href="#">
                            Gìay
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="header__menu-item">
                  <Link className="header__menu-link" to="/News">
                    Tin tức
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link className="header__menu-link" to="/Map">
                    Bản đồ
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link className="header__menu-link" to="/Contact">
                    Liên hệ
                  </Link>
                </li>
              </ul>

          </div>

          <div className="header__icon">
            <img src={Cart} alt="cart icon" />
            <img src={Search} alt="search icon" />
            <img src={NavMenu} alt="navbar icon" 
            style={{width:'1.5rem'}}
            onClick={toggle}
            />
          </div>
        </Row>
      </Container>
    </div>
    
        <Switch>
          <Route path="/Homepage">
            <Homepage />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/News">
            <News />
          </Route>
          <Route path="/Map">
            <Map />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>

        </Switch>

  </Router>
  );
}

export default Header;

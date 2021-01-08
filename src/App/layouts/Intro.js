import React from 'react';

import Slider from "react-slick";


import Product1 from '../../assets/images/product_1.jpg';
import Product2 from '../../assets/images/product_2.jpg';
import Product3 from '../../assets/images/product_3.jpg';
import Product4 from '../../assets/images/product_4.jpg';
import Product5 from '../../assets/images/product_5.jpg';
import Product6 from '../../assets/images/product_6.jpg';
import Product8 from '../../assets/images/product_8.png';
import Product9 from '../../assets/images/product9.png';

const Intro = (props) => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 return (
  <section className="product">
    <div className="list_products">
      <div className="container">
        <ul className="list_products-list">
          <li className="list__item"><a className="list__item-link" href="#">Sản phẩm mới</a></li>
          <li className="list__item"><a className="list__item-link active" href="#">Sản phẩm bán chạy</a></li>
          <li className="list__item"><a className="list__item-link" href="#">Sản phẩm đặc biệt</a></li>
        </ul>
        <div className="line"><span className="line-before" /><span className="line-center">//////////////</span><span className="line-after" /></div>
      </div>
    </div>
    <div className="list_products-menu">
      <div className="container">

        <ul className="menu-list">
          <div className="left">
            <li className="menu-list-item">Mỹ phẩm</li>
            <li className="menu-list-item">Chăm sóc da</li>
            <li className="menu-list-item">Dành cho tóc</li>
          </div>
          <div className="right">
            <li className="menu-list-item">Nước hoa</li>
            <li className="menu-list-item">Trang sức</li>
            <li className="menu-list-item">Quà tặng</li>
          </div>
        </ul>
      </div>
    </div>
    <div className="SliderProduct">
    <div>
        <Slider {...settings}>
        <div className="product__item">
          <div className="item__img"><img src={Product1} alt="product" /></div>
          <div className="item__content">
            <p className="item__content-title">Debora</p>
            <p className="item__content-name">Mỹ phẩm châu Âu</p>
              <div className="line" />
              <div className="item__content-price"> 
                <p>355.000Đ</p>
                <p className="price-sale">450.000Đ</p>
              </div>
            </div>
          <div className="item__btn">
            <button className="item__btn-icon item__btn-buy"><span className="icon-text">Mua hàng</span></button>
            <button className="item__btn-icon"> <i className="fas fa-heart" /></button>
            <button className="item__btn-icon item__btn-reload"> <i className="fas fa-sync-alt" /></button>
          </div>
        </div>
        <div className="product__item">
          <div className="item__img"><img src={Product2} alt="product" /></div>
          <div className="item__content">
            <p className="item__content-title">Debora</p>
            <p className="item__content-name">Mỹ phẩm châu Âu</p>
              <div className="line" />
              <div className="item__content-price"> 
                <p>355.000Đ</p>
                <p className="price-sale">450.000Đ</p>
              </div>
            </div>
          <div className="item__btn">
            <button className="item__btn-icon item__btn-buy"><span className="icon-text">Mua hàng</span></button>
            <button className="item__btn-icon"> <i className="fas fa-heart" /></button>
            <button className="item__btn-icon item__btn-reload"> <i className="fas fa-sync-alt" /></button>
          </div>
        </div>
        <div className="product__item">
          <div className="item__img"><img src={Product3} alt="product" /></div>
          <div className="item__content">
            <p className="item__content-title">Debora</p>
            <p className="item__content-name">Mỹ phẩm châu Âu</p>
              <div className="line" />
              <div className="item__content-price"> 
                <p>355.000Đ</p>
                <p className="price-sale">450.000Đ</p>
              </div>
            </div>
          <div className="item__btn">
            <button className="item__btn-icon item__btn-buy"><span className="icon-text">Mua hàng</span></button>
            <button className="item__btn-icon"> <i className="fas fa-heart" /></button>
            <button className="item__btn-icon item__btn-reload"> <i className="fas fa-sync-alt" /></button>
          </div>
        </div>
        <div className="product__item">
          <div className="item__img"><img src={Product4} alt="product" /></div>
          <div className="item__content">
            <p className="item__content-title">Debora</p>
            <p className="item__content-name">Mỹ phẩm châu Âu</p>
              <div className="line" />
              <div className="item__content-price"> 
                <p>355.000Đ</p>
                <p className="price-sale">450.000Đ</p>
              </div>
            </div>
          <div className="item__btn">
            <button className="item__btn-icon item__btn-buy"><span className="icon-text">Mua hàng</span></button>
            <button className="item__btn-icon"> <i className="fas fa-heart" /></button>
            <button className="item__btn-icon item__btn-reload"> <i className="fas fa-sync-alt" /></button>
          </div>
        </div>
        <div className="product__item">
          <div className="item__img"><img src={Product5} alt="product" /></div>
          <div className="item__content">
            <p className="item__content-title">Debora</p>
            <p className="item__content-name">Mỹ phẩm châu Âu</p>
              <div className="line" />
              <div className="item__content-price"> 
                <p>355.000Đ</p>
                <p className="price-sale">450.000Đ</p>
              </div>
            </div>
          <div className="item__btn">
            <button className="item__btn-icon item__btn-buy"><span className="icon-text">Mua hàng</span></button>
            <button className="item__btn-icon"> <i className="fas fa-heart" /></button>
            <button className="item__btn-icon item__btn-reload"> <i className="fas fa-sync-alt" /></button>
          </div>
        </div>
        <div className="product__item">
          <div className="item__img"><img src={Product6} alt="product" /></div>
          <div className="item__content">
            <p className="item__content-title">Debora</p>
            <p className="item__content-name">Mỹ phẩm châu Âu</p>
              <div className="line" />
              <div className="item__content-price"> 
                <p>355.000Đ</p>
                <p className="price-sale">450.000Đ</p>
              </div>
            </div>
          <div className="item__btn">
            <button className="item__btn-icon item__btn-buy"><span className="icon-text">Mua hàng</span></button>
            <button className="item__btn-icon"> <i className="fas fa-heart" /></button>
            <button className="item__btn-icon item__btn-reload"> <i className="fas fa-sync-alt" /></button>
          </div>
        </div>
        <div className="product__item">
          <div className="item__img"><img src={Product8} alt="product" /></div>
          <div className="item__content">
            <p className="item__content-title">Debora</p>
            <p className="item__content-name">Mỹ phẩm châu Âu</p>
              <div className="line" />
              <div className="item__content-price"> 
                <p>355.000Đ</p>
                <p className="price-sale">450.000Đ</p>
              </div>
            </div>
          <div className="item__btn">
            <button className="item__btn-icon item__btn-buy"><span className="icon-text">Mua hàng</span></button>
            <button className="item__btn-icon"> <i className="fas fa-heart" /></button>
            <button className="item__btn-icon item__btn-reload"> <i className="fas fa-sync-alt" /></button>
          </div>
        </div>
        <div className="product__item">
          <div className="item__img"><img src={Product9} alt="product" /></div>
          <div className="item__content">
            <p className="item__content-title">Debora</p>
            <p className="item__content-name">Mỹ phẩm châu Âu</p>
              <div className="line" />
              <div className="item__content-price"> 
                <p>355.000Đ</p>
                <p className="price-sale">450.000Đ</p>
              </div>
            </div>
          <div className="item__btn">
            <button className="item__btn-icon item__btn-buy"><span className="icon-text">Mua hàng</span></button>
            <button className="item__btn-icon"> <i className="fas fa-heart" /></button>
            <button className="item__btn-icon item__btn-reload"> <i className="fas fa-sync-alt" /></button>
          </div>
        </div>
 
        </Slider>
      </div>
    </div>
</section>
 );
}

export default Intro;
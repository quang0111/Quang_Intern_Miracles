import React from 'react';

import AboutImg from '../../assets/images/about.png';
import Logo from '../../assets/images/logo.png';


const AboutMe = (props) => {
 return (
  <section className="section-about">
  <div className="container">
    <div className="path">
      <a className="path__name" href="#home">Home</a>
      <a className="path__name" href="#blog">Về chúng tôi</a>
     </div>
    <div className="section-about__wrap">
      <h3 className="heading-main">Về chúng tôi</h3>
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <div className="section-about__img">
           <img src={AboutImg} alt="about" />
          </div>
        </div>
        <div className="col-sm-12 col-lg-6">
          <div className="section-about__content">
            <div className="section-about__logo">
             <img src={Logo} alt="logo" />
            </div>
            <h3 className="section-about__title">Giới thiệu chung về mỹ phẩm handmade Mandala</h3>
            <p className="section-about__text">Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay
             tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt
             . Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức,
              khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
              sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức,
               khi mà dân tình xô nhau đi tắm Free để giải nhiệt.</p>
             <a className="section-about__link" href="#">Xem thêm</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 );
}

export default AboutMe;
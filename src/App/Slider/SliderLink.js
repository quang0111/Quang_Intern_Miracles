import React from 'react';

import Slider from 'react-slick';


import FaceBook from '../../assets/icons/facebook.svg';
import Google from '../../assets/icons/google.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Linkedin from '../../assets/icons/linkedin.svg';
import Pinterest from '../../assets/icons/pinterest.svg';
import Twitter from '../../assets/icons/twitter.svg';


const SliderLink = (props) => {

 const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 6,
  speed: 500,
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


       <Slider {...settings}>
          <div>
            <div className="contact__link-item">
            <div className="item-icon"><img src={FaceBook} alt="facebook" /></div>
            <div className="item-link"><span>Facebook</span></div>
            </div>
          </div>
          <div>
          <div className="contact__link-item">
            <div className="item-icon"><img src={Google} alt="facebook" /></div>
            <div className="item-link"><span>Google</span></div>
            </div>
          </div>
          <div>
          <div className="contact__link-item">
            <div className="item-icon"><img src={Instagram} alt="facebook" /></div>
            <div className="item-link"><span>Instagram</span></div>
            </div>
          </div>
          <div>
          <div className="contact__link-item">
            <div className="item-icon"><img src={Linkedin} alt="facebook" /></div>
            <div className="item-link"><span>Linkedin</span></div>
            </div>
          </div>
          <div>
          <div className="contact__link-item">
            <div className="item-icon"><img src={Pinterest} alt="facebook" /></div>
            <div className="item-link"><span>Pinterest</span></div>
            </div>
          </div>
          <div>
          <div className="contact__link-item">
            <div className="item-icon"><img src={Twitter} alt="facebook" /></div>
            <div className="item-link"><span>Twitter</span></div>
            </div>
          </div>
          
        </Slider>


 );
}

export default SliderLink;
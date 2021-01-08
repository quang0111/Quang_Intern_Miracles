import React from 'react';


import Slider from 'react-slick';

import { Container } from 'reactstrap';

import Woman from "../../assets/images/feedback_woman.png";
import Man from "../../assets/images/feedback_man.png";



const Feelback = (props) => {
  
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    appendDots: dots => (
      <div
        style={{
          position:"absolute",
          bottom:".5%",
          left: "10%",
          width: "200px",
        }}
      >
        <ul style={{ margin: "22px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "5px",
          height: "5px",
          backgroundColor: "gray",
          opacity: ".5",
        }}
      >
      </div>
    )
  };
 return (
 
  <Container className="FeelbackSlider">
    <Slider {...settings}>
      <div className="FeelbackSlider__category">
        <p className="FeelbackSlider__category-content">
          Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm
          chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản
          phẩm ấy! Với công nghệ cải tiến mới nhất, hảng Rohto
        </p>
        <div className="avartar_feedback">
          <img className="avartar_feedback-image" src={Woman} />
          <p className="avartar_feedback-name">TUTILE <span>Giảm đốc phát trển sản phẩm</span></p>
        </div>
      </div>
      <div className="FeelbackSlider__category">
        <p className="FeelbackSlider__category-content">
          Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm
          chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản
          phẩm ấy! Với công nghệ cải tiến mới nhất, hảng Rohto
        </p>
        <div className="avartar_feedback">
          <img className="avartar_feedback-image" src={Woman} />
          <p className="avartar_feedback-name">TUTILE <span>Giảm đốc phát trển sản phẩm</span></p>
        </div>
      </div>
      <div className="FeelbackSlider__category">
        <p className="FeelbackSlider__category-content">
          Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm
          chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản
          phẩm ấy! Với công nghệ cải tiến mới nhất, hảng Rohto
        </p>
        <div className="avartar_feedback">
          <img className="avartar_feedback-image" src={Man} />
          <p className="avartar_feedback-name">TUTILE <span>Giảm đốc phát trển sản phẩm</span></p>
        </div>
      </div>
    </Slider>
</Container>
 );
}

export default Feelback;
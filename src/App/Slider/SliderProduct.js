import React from 'react';

import Slider from "react-slick";


const SliderProduct = (props) => {

 const data = [
  {ID: 1,title:'Mỹ phẩm châu âu', name: 'Ohui', price:'350.000D', sale:'450.000D',img : 'https://fe-mandala.vercel.app/images/product_1.jpg'},
  {ID: 2,title:'Mỹ phẩm châu âu', name: 'Sarvon', price:'350.000D', sale:'450.000D',img :'https://fe-mandala.vercel.app/images/product_2.jpg'},
  {ID: 3,title:'Mỹ phẩm châu âu', name: 'Home', price:'350.000D', sale:'450.000D',img :'https://fe-mandala.vercel.app/images/product_3.jpg'},
  {ID: 4,title:'Mỹ phẩm châu âu', name: 'Debora', price:'350.000D', sale:'450.000D',img :'https://fe-mandala.vercel.app/images/product_4.jpg'},
  {ID: 5,title:'Mỹ phẩm châu âu', name: 'Tyffany', price:'350.000D', sale:'450.000D',img :'https://fe-mandala.vercel.app/images/product_5.jpg'},
  {ID: 6,title:'Mỹ phẩm châu âu', name: 'Tyffany', price:'350.000D', sale:'450.000D',img :'https://fe-mandala.vercel.app/images/product_6.jpg'},
  {ID: 8,title:'Mỹ phẩm châu âuo', name: 'Debora', price:'350.000D', sale:'450.000D',img :'https://fe-mandala.vercel.app/images/product_4.jpg'},
  {ID: 9,title:'Mỹ phẩm châu âu', name: 'Sarvon', price:'350.000D', sale:'450.000D',img :'https://fe-mandala.vercel.app/images/product_1.jpg'},


];

 const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 6,
  swipeToSlide: true,
  afterChange: function(index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  },
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
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
        {data.map(category =>(
            <div className="product__item">
             <div className="item__img">
              <img src={category.img}/>
             </div>
             <div className="item__content">
               <p className="item__content-title">{category.title}</p>
               <p className="item__content-name">{category.name}</p>
                 <div className="line" />
                 <div className="item__content-price"> 
                   <p>{category.price}</p>
                   <p className="price-sale">{category.sale}</p>
                 </div>
               </div>
             <div className="item__btn">
               <button className="item__btn-icon item__btn-buy"><span className="icon-text">Mua hàng</span></button>
               <button className="item__btn-icon"> <i className="fas fa-heart" /></button>
               <button className="item__btn-icon item__btn-reload"> <i className="fas fa-sync-alt" /></button>
             </div>
          </div>
          ))}
        </Slider>

 );
}

export default SliderProduct;
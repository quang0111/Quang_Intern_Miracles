import React from 'react';

import Slider from "react-slick";


const SliderProduct = (props) => {

 const data = [
  {ID: 1,title:'Mỹ phẩm châu âu', name: 'Ohui', price:'350.000D', sale:'450.000D',img : '/static/media/product_1.0ed408a1.jpg'},
  {ID: 2,title:'Mỹ phẩm châu âu', name: 'Sarvon', price:'350.000D', sale:'450.000D',img :'/static/media/product_2.78a39301.jpg'},
  {ID: 3,title:'Mỹ phẩm châu âu', name: 'Home', price:'350.000D', sale:'450.000D',img :'/static/media/product_3.842c6be1.jpg'},
  {ID: 4,title:'Mỹ phẩm châu âu', name: 'Debora', price:'350.000D', sale:'450.000D',img :'/static/media/product_4.2b15315e.jpg'},
  {ID: 5,title:'Mỹ phẩm châu âu', name: 'Tyffany', price:'350.000D', sale:'450.000D',img :'/static/media/product_5.2b5300cc.jpg'},
  {ID: 6,title:'Mỹ phẩm châu âu', name: 'Tyffany', price:'350.000D', sale:'450.000D',img :'/static/media/product_6.b6e50322.jpg'},
  {ID: 8,title:'Mỹ phẩm châu âuo', name: 'Debora', price:'350.000D', sale:'450.000D',img :'/static/media/product_8.c8ec1133.png'},
  {ID: 9,title:'Mỹ phẩm châu âu', name: 'Sarvon', price:'350.000D', sale:'450.000D',img :'/static/media/product9.d73f778b.png'},


];

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
  <div>
       <div className="SliderProduct">
    <div>
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
      </div>
    </div>
  </div>
 );
}

export default SliderProduct;
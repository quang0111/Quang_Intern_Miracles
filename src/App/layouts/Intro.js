import React from 'react';

import SliderProduct from '../Slider/SliderProduct';

const Intro = (props) => {


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
    <SliderProduct />
</section>
 );
}

export default Intro;
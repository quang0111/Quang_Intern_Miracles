import React from "react";

import Product from "../../assets/images/product-banner.png";
import Woman from "../../assets/images/woman.png";

const Banner = () => {
  return (
    <div className="banner">
    <div className="container">
      <div className="banner__wrapper">
        <div className="col-sm-6">
          <div className="banner__wrapper-product"><img className="banner__product-img" src={Product} alt="layer product" />
            <div className="product__introduction">
              <p className="product__introduction-name">GreenVera</p>
              <p className="product__introduction-info">Sản phẩm tinh dầu dưỡng da mới nhất của mandala</p>
              <p className="product__introduction-price">GIÁ CHỈ 750.000<span>đ</span></p><a className="product__introduction-buy" href="#">Mua hàng </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="layer__block-img"><img className="layer-img" src={Woman} alt="layer" /></div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Banner;

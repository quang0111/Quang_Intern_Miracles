import React from 'react';

import Mother1 from '../../assets/images/item-mother-1.png';
import Mother2 from '../../assets/images/item-mother-2.png';
import Mother3 from '../../assets/images/item_2--right--img.png';
import Mother6 from '../../assets/images/Item_3--left--img.jpg';
import Mother4 from '../../assets/images/item-mother-3.png';
import Mother5 from '../../assets/images/item-mother-4.png';



const SectionSale = (props) => {
 return (
  <section className="section__product">
  <div className="container">
    <div className="product__sub">
      <div className="product__sub-1">
        <div className="item__box-1">
          <div className="item__sub-1"><img className="img-fluid" src={Mother1} /></div>
          <div className="item__sub-2"><img className="img-fluid" src={Mother2} alt="item_2" /></div>
        </div>
        <div className="item__box-2">
          <button className="box-2--btn">
            <div className="icon__play"> </div>
          </button><img className="img" src={Mother3} alt="item_3" />
        </div>
      </div>
      <div className="product__sub-2">       
        <div className="item__box-1">
          <div className="item__sub-1"><img className="img-fluid" src={Mother4} alt="item_4" /></div>
          <div className="item__sub-2"><img className="img-fluid" src={Mother5} alt="item_5" /></div>
        </div>
        <div className="item__box-2"><img className="img-fluid" src={Mother6} /></div>
      </div>
    </div>
  </div>
</section>
 );
}

export default SectionSale;
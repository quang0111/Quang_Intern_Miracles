import React from 'react';

const Footer = (props) => {
 return (
  <div className="footer">
    <div className="container">
      <div className="row">
        
        <div className="col-sm-12 col-lg-4">
          <div className="footer__main">
            <p className="footer__main-title">LIÊN HỆ VỚI CHÚNG TÔI</p>
            <ul className="footer__list footer__address">
              <li className="footer__address-item">
                <div className="list__item-address"> <img src="https://fe-mandala.vercel.app/images/map.svg" alt="map" /></div><a className="address__item-add" href="#">Tầng 4, Tòa nhà Hanoi Group  Số 442 Đội Cấn, P.Cống Vị, Q. Ba Đình, Hà Nội</a>
              </li>
              <li className="footer__address-item">
                <div><img src="https://fe-mandala.vercel.app/images/phone.svg" alt="phone" /></div><a href="#">(04) 6674 2332 </a><span className="space-line">-</span>
                <div><img src="https://fe-mandala.vercel.app/images/fax.svg" alt="fax" /></div><a href="#"> (04) 3786 8904</a>
              </li>
              <li className="footer__address-item">
                <div><img src="https://fe-mandala.vercel.app/images/phone.svg" alt="phone" /></div><a href="#">(08) 6680 9686</a><span className="space" />
                <div><img src="https://fe-mandala.vercel.app/images/email.svg" alt="email" /></div><a className="address__item-email" href="#">Support@bizweb.vn</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-lg-2">
          <div className="footer__main">
            <p className="footer__main-title">CHUYỂN HÀNG
            </p><ul className="footer__list footer__menu">
              <li className="footer__menu-item"><a className="item__link" href="#">Mua sắm trực tuyến</a></li>
              <li className="footer__menu-item"><a className="item__link" href="#">Đến từ chúng tôi gửi đến</a></li>
              <li className="footer__menu-item"><a className="item__link" href="#">Chính sách vận chuyển</a></li>
              <li className="footer__menu-item"><a className="item__link" href="#">vận chuyển thông tin</a></li>
            </ul>
            <p />
          </div>
        </div>
        <div className="col-sm-12 col-lg-2">
          <div className="footer__main">
            <p className="footer__main-title">HỖ TRỢ
            </p><ul className="footer__list footer__menu">
              <li className="footer__menu-item"><a className="item__link" href="#">Câu chuyện của chúng tôi</a></li>
              <li className="footer__menu-item"><a className="item__link" href="#">Thanh toán an toàn</a></li>
              <li className="footer__menu-item"><a className="item__link" href="#">Tùy chọn vận chuyển</a></li>
              <li className="footer__menu-item"><a className="item__link" href="#">Chính sách vận chuyển</a></li>
            </ul>
            <p />
          </div>
        </div>
        <div className="col-sm-12 col-lg-2">
          <div className="footer__main">
            <p className="footer__main-title">THÔNG TIN
            </p><ul className="footer__list footer__menu">
              <li className="footer__menu-item"><a className="item__link" href="#">Về Chúng Tôi</a></li>
              <li className="footer__menu-item"><a className="item__link" href="#">Điều khoản &amp; điều kiện</a></li>
              <li className="footer__menu-item"><a className="item__link" href="#">Chính Sách Riêng Tư</a></li>
              <li className="footer__menu-item"><a className="item__link" href="#">Đơn đặt hàng và Returns</a></li>
            </ul>
            <p />
          </div>
        </div>
        <div className="col-sm-12 col-lg-2">
          <div className="footer__main">
            <p className="footer__main-title">MY ACCOUNT
            </p><ul className="footer__list footer__menu footer__last">
              <li className="footer__menu-item"><a className="item__link" href="#">Xem Giỏ Hàng</a></li>
              <li className="footer__menu-item"><a className="item__link" href="#">Sản phẩm yêu thích</a></li>
              <li className="footer__menu-item"><a className="item__link" href="#">kiểm tra</a></li>
              <li className="footer__menu-item"><a className="item__link" href="#">Theo dõi đặt hàng của tôi</a></li>
            </ul>
            <p />
          </div>
        </div>
      </div>
    </div>
    <div className="footer__extend">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <div className="footer__extend-copy">
              <p className="footer__extend-text">© Copyright 2008-2014 DKT Technology JSC</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="footer__extend-image"><img src="https://fe-mandala.vercel.app/images/footer_extend.png" alt="pay" /></div>
          </div>
        </div>
      </div>
    </div>
</div>
 );
}

export default Footer;
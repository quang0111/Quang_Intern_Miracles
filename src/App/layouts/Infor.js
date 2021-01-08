import React from 'react';

import FaceBook from '../../assets/icons/facebook.svg';
import Google from '../../assets/icons/google.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Linkedin from '../../assets/icons/linkedin.svg';
import Pinterest from '../../assets/icons/pinterest.svg';
import Twitter from '../../assets/icons/twitter.svg';

import Logo from '../../assets/images/logo.png';
import Woman from '../../assets/images/123123.png';

import Slider from 'react-slick';



const Infor = (props) => {

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
  <section className="section__information">
  <div className="container">
    
    <div className="infor__contact">
      <div className="contact__link contact__link-control">
        <div className="contact__link-item">
          <div className="item-icon"><img src={FaceBook} alt="facebook" /></div>
          <div className="item-link"><span>Facebook</span></div>
        </div>
        <div className="contact__link-item">
          <div className="item-icon"><img src={Twitter} alt="twitter" /></div>
          <div className="item-link"><span>Twitter</span></div>
        </div>
        <div className="contact__link-item">
          <div className="item-icon"><img src={Instagram} alt="instagram" /></div>
          <div className="item-link"><span>Instagram</span></div>
        </div>
        <div className="contact__link-item">
          <div className="item-icon"><img src={Google} alt="google" /></div>
          <div className="item-link"><span>Google ++</span></div>
        </div>
        <div className="contact__link-item">
          <div className="item-icon"><img src={Pinterest} alt="pinterest" /></div>
          <div className="item-link"><span>Pinterest</span></div>
        </div>
        <div className="contact__link-item">
          <div className="item-icon"><img src={Linkedin} alt="linkedin" /></div>
          <div className="item-link"><span>Linkedin</span></div>
        </div>
      </div>
    </div>
    <div className="infor">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-lg-4">
          <div className="infor__aboutUs">
            <div className="destail__log">
              <h2 className="destail__log-title">Về chúng tôi</h2><span className="line-center">///////////////////</span>
            </div>
            <div className="destail__content">
              <div className="destail__content-logo"><a href="#"><img src={Logo} /></a></div>
              <div className="destail__content-title">
                <h2>giới thiệu chung về mỹ phẩm handmade mandala</h2>
              </div>
              <div className="destail__content-introduce">
                <p>Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.Hi, chào các nàng ...
                   sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức
                   , khi mà dân tình xô nhau đi tắm Free để giải nhiệt.Hi, chào các nàng ... 
                   sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, 
                   khi mà dân tình xô nhau đi tắm Free để giải nhiệt.</p>
                   <a className="introduce-link" href="#">Xem thêm</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-lg-4">
          <div className="destail__blog">
            <div className="destail__log">
              <h2 className="destail__log-title">blog</h2><span className="line-center">///////////////////</span>
            </div>
          </div>
          <div className="destail__blog-img"><img src={Woman} alt="blog" /></div>
          <p className="destail__blog-title">Review son kem bourjois velvet</p>
          <p className="destail__blog-introduce">Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hăm nóng cái Blog này vào một ngày đầu hè nóng oi bức
          , khi mà dân tình xô nhau đi tắm Free để giải nhiệt.</p><a className="destail__blog-author" href="#">Bởi NamTran (27/05/2015)</a>
          <div className="destail__blog-detail">
            <a className="introduce-link" href="#">Đọc thêm
             <i className="fas fa-angle-right" />
            </a>
            <a className="comment-index" href="#">23 Bình luận</a>
            </div>
        </div>
        <div className="col-sm-12 col-lg-4">   
          <div className="row">
            <div className="col-sm-6 col-lg-12">
              <div className="destail__send-email">
                <div className="destail__log">
                  <h2 className="destail__log-title">gửi email cho chúng tôi</h2>
                  <span className="line-center">/////////////////////</span>
                </div>
                <div className="send__email-from">
                  <form>
                    <input className="email-input" type="text" placeholder="Email của bạn" />
                    <p className="email-text">Gửi email để nhận những ưu đãi mới nhất</p>
                    <button className="email-btn" type="submit">Gửi</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-12">
              <div className="destail__tag">
                <div className="destail__log">
                  <h2 className="destail__log-title">tag sản phẩm</h2>
                  <span className="line-center">///////////////////</span>
                </div>
                <ul className="product__tag-list">
                  <li className="tag-item">
                   <a className="tag-item-link" href="#">Đồng hồ</a>
                  </li>
                  <li className="tag-item">
                   <a className="tag-item-link" href="#">Túi
                  </a>
                  </li>
                  <li className="tag-item">
                   <a className="tag-item-link" href="#">Phụ kiện
                  </a>
                  </li>
                  <li className="tag-item">
                   <a className="tag-item-link" href="#">Đồng hồ
                  </a>
                  </li>
                  <li className="tag-item">
                   <a className="tag-item-link" href="#">Túi
                  </a>
                  </li>
                  <li className="tag-item">
                   <a className="tag-item-link" href="#">Giày
                  </a>
                  </li>
                  <li className="tag-item">
                   <a className="tag-item-link" href="#">Sandal
                  </a>
                  </li>
                  <li className="tag-item">
                   <a className="tag-item-link" href="#">Áo sơ mi
                  </a>
                  </li>
                  <li className="tag-item">
                   <a className="tag-item-link" href="#">Nước hoa
                  </a>
                  </li>
                  <li className="tag-item">
                   <a className="tag-item-link" href="#">Giày
                  </a>
                  </li>
                  <li className="tag-item">
                   <a className="tag-item-link" href="#">Sandal
                  </a>
                  </li>
                  <li className="tag-item">
                   <a className="tag-item-link" href="#">Trẻ em
                  </a>
                  </li>
                  <li className="tag-item">
                   <a className="tag-item-link" href="#">Thời trang nữ
                  </a>
                  </li>
                  <li className="tag-item">
                   <a className="tag-item-link" href="#">Trẻ em
                  </a>
                  </li>
                  <li className="tag-item">
                   <a className="tag-item-link" href="#">Thời trang nữ
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 );
}

export default Infor;
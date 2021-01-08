import React from 'react'


const Sale = () => {
    return (
        <section className="sale">
        <div className="container">
          <div className="sale__wrapper">
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <div className="sale__wrapper-img"><img className="sale-img" src="https://fe-mandala.vercel.app/images/plane.svg" alt="plane_icon" />
                  <p className="sale-title">Miễn phí vận chuyển trên toàn quốc</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="sale__wrapper-img sale__wrapper-center"><img className="sale-img" src="https://fe-mandala.vercel.app/images/gift.svg" alt="gift_icon" />
                  <p className="sale-title">Nhận ngay quà tặng trị giá 350.000đ</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="sale__wrapper-img"><img className="sale-img" src="https://fe-mandala.vercel.app/images/star.svg" alt="star_icon" />
                  <p className="sale-title">Giảm 30% cho đơn hàng trên 5.000.000đ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Sale;

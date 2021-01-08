import React from 'react'


const Sale = () => {

  const data = [
    {ID :1,Image: 'https://fe-mandala.vercel.app/images/plane.svg', Title: 'Miễn phí vận chuyển trên toàn quốc'},
    {ID :2,Image: 'https://fe-mandala.vercel.app/images/gift.svg', Title: 'Nhận ngay quà tặng trị giá 350.000đ'},
    {ID :3,Image: 'https://fe-mandala.vercel.app/images/star.svg', Title: 'Giảm 30% cho đơn hàng trên 5.000.000đ'},
  ]

    return (
        <section className="sale">
        <div className="container">
          <div className="sale__wrapper">
            <div className="row">
              {data.map(category =>(
                <div className="col-xs-12 col-sm-4">
                <div className="sale__wrapper-img"><img className="sale-img" src={category.Image} alt="plane_icon" />
                  <p className="sale-title">{category.Title}</p>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
}

export default Sale;

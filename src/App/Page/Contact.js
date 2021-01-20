import React from 'react';

function Contact(props) {
 return (
  <section className="section-contact">
  <div className="container">
    <div className="path"><a className="path__name" href="#home">Home</a><a className="path__name" href="#dangky">Liên hệ</a></div>
    <div className="section-contact__wrap">
      <h3 className="heading-main">Liên hệ</h3>
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <div className="section-contact__map">
            <iframe width="100%" height={400} src="https://maps.google.com/maps?q=105+Duy+Tân,+Hòa+Thuận+Nam,+Hải+Châu,+Đà+Nẵng+550000,+Việt+Nam&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
          </div>
        </div>
        <div className="col-sm-12 col-lg-6">
          <div className="section-contact__form">
            <h4 className="form__title">gửi email cho chúng tôi</h4>
            <form className="form" action="#">
              <div className="form__group">
                <label className="form__lable">Tên<span className="form__obligatory">*</span></label>
                <input className="form__input" type="text" />
              </div>
              <div className="form__group">
                <label className="form__lable">Email<span className="form__obligatory">*</span></label>
                <input className="form__input" type="text" />
              </div>
              <div className="form__group">
                <label className="form__lable form__lable-textarea">Tin nhắn<span className="form__obligatory">*</span></label>
                <textarea className="form__input form__textarea" rows={10} defaultValue={""} />
              </div>
              <div className="form__buttons">
                <button className="btn btn--border btn--black" type="submit">Gửi</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 );
}

export default Contact;
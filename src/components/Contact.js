import "./contact.css";
import Image from "../image/quang.jpg";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container-contact">
        <div className="contact-left">
          <img src={Image}></img>
        </div>
        <div className="contact-right">
          <ul>
            <li>Skype-live : phamquang22192</li>
            <li>FaceBook : Phạm Khắc Quang</li>
            <li>Email : phamquang22192@gmail.com</li>
            <li>Phone : 0787083950</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;

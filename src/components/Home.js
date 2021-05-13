import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Home() {
  return (
    <div className="home" id="home">
      <h1>About me</h1>
      <p data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000">
        Hello, my name is Pham Khac Quang, currently studying in my final year
        at Aptech, I am currently on my way to becoming a front-end developer, I
        used to work as a web developer for the company, contribute to the
        development. of the company Experience in a restaurant project for the
        European and American market, direct communication with customers via
        skype, experienced many successful projects in the field in time , my
        goal in the next 2 years is to have a stable job and long-term goals.
        long will become a project manager ...
      </p>
      <div className="pdf">
        <a
          href="https://www.topcv.vn/xem-cv/C1sGDgcBD1YIWgAAVQUGV1IBU1UGAgEAVwACCQ1a70?utm_source=link_i_topcv&utm_campaign=link_i_topcv&utm_medium=link_i_topcv"
          target="_blank"
        >
          My CV Pdf
        </a>
      </div>
    </div>
  );
}

export default Home;

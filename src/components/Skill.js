import "./skill.css";

function Skill() {
  return (
    <div
      className="skill"
      id="skill"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="4000"
    >
      <h1>My Skills</h1>

      <p>HTML</p>
      <div className="container">
        <div className="skills html">90%</div>
      </div>

      <p>CSS</p>
      <div className="container">
        <div className="skills css">80%</div>
      </div>

      <p>JavaScript</p>
      <div className="container">
        <div className="skills js">65%</div>
      </div>

      <p>React</p>
      <div className="container">
        <div className="skills react">60%</div>
      </div>

      <p>EngLish</p>
      <div className="container">
        <div className="skills English">60%</div>
      </div>
    </div>
  );
}

export default Skill;

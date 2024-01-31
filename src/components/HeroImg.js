import "./HeroImgStyle.css";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";


export default function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER.</p>
        <h1>React Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/Contact" className=" btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

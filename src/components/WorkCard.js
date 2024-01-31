import "./WorkCardStyles.css"
import pro1 from "../assets/project1.png"
import { NavLink } from "react-router-dom"
import "./WorkCardData"
const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="Project 1 Preview"/>
    <h2 className="project-title"> {props.title}</h2>
    <div className="pro-details">
        <p> {props.text}</p>
        <div className="pro-btns">
            <NavLink to={props.view} className="btn" > View</NavLink>
            <NavLink to="https://main--amazon-cloan.netlify.app/" className="btn" > Source</NavLink>

        </div>
    </div>
</div>
  )
}
export default WorkCard
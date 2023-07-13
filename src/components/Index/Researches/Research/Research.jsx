import "./Research.scss";
import { NavLink } from "react-router-dom";

const Research = (props) => {
  return (
    <div className="researches__researche">
      <img src={props.img} className="researches__img" />
      <p>{props.title}</p>
      <NavLink to={props.href}>Подробнее</NavLink>
    </div>
  );
};

export default Research;

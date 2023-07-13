import Research from "./Research/Research";
import "./Researches.scss";
import { NavLink } from "react-router-dom";

const Researches = (props) => {
  let researchContent = props.researches.map((research) => {
    return (
      <Research
        img={research.image}
        title={research.title}
        href={`/research/${research.id}`}
      />
    );
  });
  return (
    <section className="researches">
      <div className="container">
        <h2 className="researches__title">Текущие исследования:</h2>
        <div className="researches__row">{researchContent}</div>
        <NavLink to="research" className="researches__link">
          Посмотреть больше исследований
        </NavLink>
      </div>
    </section>
  );
};

export default Researches;

import "./Searching.scss";
import { NavLink } from "react-router-dom";

const Searching = (props) => {
  return (
    <section className="searching">
      <div className="container">
        <div className="searching__row">
          <form className="searching__form" action="#">
            <input
              type="search"
              name="search-research"
              id="search-research"
              placeholder="Какое исследование вы ищете?"
              autoComplete="false"
            />
            <button type="submit">
              <img src="image/svgicons/search.svg" alt="search" />
            </button>
          </form>
          <NavLink to="my" className="searching__link">
            Мои исследования
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Searching;

import { useContext } from "react";
import "./Searching.scss";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const Searching = (props) => {
  let { email } = useContext(AuthContext)
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
          {email && <NavLink to="my" className="searching__link">
            Мои исследования
          </NavLink>}
        </div>
      </div>
    </section>
  );
};

export default Searching;

import "./Research.scss";
import "./Searching/Searching.scss";
import Researches from "./Researches/Researches";
import { NavLink } from "react-router-dom";

const MyResearches = (props) => {
  console.log(props);
  return (
    <main className="content bg">
      <section className="searching">
        <div className="container">
          <h1>Мои исследования</h1>
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
          </div>
        </div>
      </section>
      <div className="filters__block">
        <div className="filters">
          <p className="active">Все</p>
          <p>Актуальные</p>
          <p>Скрытые</p>
          <p>Заверешнные</p>
          <p>Архив</p>
        </div>
        <NavLink to="/add" className="add-btn" />
      </div>

      <Researches researches={props.state.researches}></Researches>
    </main>
  );
};

export default MyResearches;

import "./Research.scss";
import "./Searching/Searching.scss";
import Researches from "./Researches/Researches";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useContext, useLayoutEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import Research from "./Researches/Research/Research";

const MyResearches = () => {
  let [researches, setResearches] = useState([])
  let { user } = useContext(AuthContext)
  function filter(research) {
    return research.researcherId === user.userId 
  }
  async function fetchResearches() {
    await axios.get('http://localhost:5130/api/study',{
      'headers': {
        'Accept': "*/*",
        'Content-Type': 'application/json;charset=UTF-8',
      }},
      ).then(response => {
        console.log(response.data)
        setResearches(response.data)
      })
  }
  
  if (user.userType === "Researcher") {
    var myResearches = researches.filter(filter).map((research) => {
      return (
        <Research
          id={research.id}
          researcherId={research.researcherId}
          title={research.title}
          createdAt={research.createdAt}
          duration={research.duration}
          studyArea={research.studyArea}
          description={research.description}
          planedParticipantNumber={research.planedParticipantNumber}
          actualParticipantNumber={research.actualParticipantNumber}
        />
      );
    });
  }
console.log(myResearches)
  useLayoutEffect(() => {
    fetchResearches()
  }, [])
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
      <div className="container">
        <div className="filters__block">
          <div className="filters">
            <p className="active">Все</p>
            <p>Актуальные</p>
            <p>Скрытые</p>
            <p>Заверешнные</p>
            <p>Архив</p>
          </div>
          {user.userType === "Researcher" && <NavLink to="/add" className="add-btn" />}
        </div>
      </div>

      {/* <Researches researches={myResearches}></Researches> */}
      
      <section className="researches">
      <div className="container">
        <div className="researches__items">{myResearches}</div>
      </div>
    </section>
    </main>
  );
};

export default MyResearches;

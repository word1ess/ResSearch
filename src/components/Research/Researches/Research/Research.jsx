import AuthContext from "../../../../context/AuthContext";
import "./Research.scss";
import React, { useContext } from "react";
const Research = (props) => {
  let widthForCount = (props.count * 100) / props.maxCount;
  let researchCountWidth = React.createRef();
  let research = React.createRef();
  let researchContent = React.createRef();

  let { email } = useContext(AuthContext)

  const openResearch = () => {
    research.current.classList.toggle("active");
    researchContent.current.classList.toggle("active");
  };

  return (
    <>
      <div
        data-id={props.id}
        className="research"
        ref={research}
        onClick={openResearch}
      >
        <div className="research__img">
          <img src={props.image} alt="" />
        </div>
        <div className="research__text">
          <h3>{props.owner}</h3>
          <p>{props.title}</p>
        </div>
        <div className="research__info">
          <p className="research__date">{props.date}</p>
          <p className="research__max-count">
            Требуется участников: <b>{props.maxCount}</b>
          </p>
          <div className="research__count">
            <p ref={researchCountWidth} data-width={`${widthForCount}%`}>
              {props.count}
            </p>
          </div>
        </div>
      </div>
      <div ref={researchContent} className="research-page">
        <div className="research-page__row">
          <div className="research-page__date">{props.date}</div>
          <div className="research-page__info">
            <div className="research-page__owner">
              <div className="research__img">
                <img src={props.image} alt="" />
              </div>
              <h3>{props.owner}</h3>
            </div>
            <h2 className="research-page__title">{props.title}</h2>
          </div>
          <p className="research-page__text">{props.text}</p>
          <div className="research-page__property">
            <h4>Длительность</h4>
            <p>{props.duration}</p>
          </div>
          <div className="research-page__property">
            <h4>Требования к участникам</h4>
            <div className="research-page__property__items">
              <p>{props.requirements.gender}</p>
              <p>{props.requirements.age}</p>
              <p>{props.requirements.city}</p>
              <p>{props.requirements.education}</p>
            </div>
          </div>
          <div className="research-page__property">
            <h4>Количество участников</h4>
            <p>
              {props.count}/{props.maxCount}
            </p>
          </div>
          {email && <button className="research-page__btn">Участвовать</button>}
        </div>
      </div>
    </>
  );
};

export default Research;

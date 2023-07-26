import axios from "axios";
import AuthContext from "../../../../context/AuthContext";
import "./Research.scss";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Research = (props) => {
  let [countOfParticipants, setCountOfParticipants] = useState([])
  let widthForCount = (countOfParticipants * 100) / props.planedParticipantNumber;
  let researchCountWidth = React.createRef();
  let research = React.createRef();
  let researchContent = React.createRef();

  let { user } = useContext(AuthContext);
  const openResearch = () => {
    research.current.classList.toggle("active");
    researchContent.current.classList.toggle("active");
  };
  async function fetchResearches() {
    let response = axios({
      method: "get",
      url: `http://127.0.0.1:5130/api/study/${props.id}/response`,
      headers: {
        "Accept": "/",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    let data = await response
    setCountOfParticipants(data?.data.length)
  }
  useEffect(() => {
    fetchResearches()
  }, [])

  let ResponseResearch = async () => {
    let response = axios({
      method: "post",
      url: `http://127.0.0.1:5130/api/study/${props.id}/response/${user?.userId}`,
      headers: {
        Accept: "/",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    if (response.status === 201) {
      alert('Вы успешно откликнулись на прохождение исследования')
    }
    if (response.status === 409) {
      alert('Вы уже откликались на прохождение данного исследования')
    }
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
          <img src="image/image/main/1" alt="" />
        </div>
        <div className="research__text">
          <h3>УрФУ</h3>
          <p>{props.title}</p>
        </div>
        <div className="research__info">
          <p className="research__date">{props.createdAt.split("T")[0]}</p>
          <p className="research__max-count">
            Требуется участников: <b>{props.planedParticipantNumber}</b>
          </p>
          <div className="research__count">
            <p ref={researchCountWidth} style={{width: widthForCount  + "%"}} >
              {countOfParticipants}
            </p>
          </div>
        </div>
      </div>
      <div ref={researchContent} className="research-page">
        <div className="research-page__row">
          <div className="research-page__date">
            {props.createdAt.split("T")[0]}
          </div>
          <div className="research-page__info">
            <div className="research-page__owner">
              <div className="research__img">
                <img src="image/image/main/1" alt="" />
              </div>
              <h3>УрФУ</h3>
            </div>
            <h2 className="research-page__title">{props.title}</h2>
          </div>
          <p className="research-page__text">{props.description}</p>
          <div className="research-page__property">
            <h4>Длительность</h4>
            <p>{props.duration === 1 ? "Долгосрочное" : "Краткосрочное"}</p>
          </div>
          <div className="research-page__property">
            <h4>
              Требования <br></br>к участникам
            </h4>
            <div className="research-page__property__items">
              <p>Мужской</p>
              <p>От 20 лет</p>
              <p>{props.studyArea}</p>
              <p>Среднее профессиональное</p>
            </div>
          </div>
          <div className="research-page__property">
            <h4>Количество участников</h4>
            <p>
              {countOfParticipants}/{props.planedParticipantNumber}
            </p>
          </div>
          {user?.userType === "Participant" && (
            <button
              className="research-page__btn"
              onClick={() => ResponseResearch()}
            >
              Участвовать
            </button>
          )}
          {user?.userId === props.researcherId && <NavLink to="/edit" className="research-page__btn" state={props} >Редактировать</NavLink>}
        </div>
      </div>
    </>
  );
};

export default Research;

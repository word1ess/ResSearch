import { createRef, useMemo, useState } from "react";
import "./EditReseach.scss";
import Stage from "../AddReseach/Stage/Stage";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const EditReseach = (props) => {
    const location = useLocation();
    let nav = useNavigate()
    let [count, setCount] = useState(1)
    const arr = useMemo(() => new Array(count).fill(), [count]);
    console.log(location.state)
    let [name, setName] = useState(location.state.title)
    let [description, setDescription] = useState(location.state.description)
    let [city, setCity] = useState(location.state.studyArea)
    let [particepents, setParticepents] = useState(location.state.planedParticipantNumber)
    let [length, setLength] = useState(location.state.duration)
    let [id, setId] = useState(location.state.id)

    let nameInput = createRef()
    let descriptionInput = createRef()
    let cityInput = createRef()
    let particepentsInput = createRef()
    let lengthInput = createRef()

    let EditResearch = async(e) => {
      /* e.preventDefault() */
      await axios
          .put("http://127.0.0.1:5130/api/study",
          {
            "title": name,
            "description": description,
            "studyArea": city,
            "duration": +length,
            "studyId": id,
            "status": 0
          },
              {
                  'headers': {
                      'Content-Type': 'application/json',
                      /* 'Authorization': `Bearer ${String(authToken.access)}` */
                  }
              })
          .then(response => {
              console.log(response)
              if (response.status === 204) {
                  /* nav(`/resume/${response.data.id}`, {
                      state: response.data
                  }) */
                  nav("/research")
              }
          }
          )
          .catch(error => console.log(error.response))
  }
  return (
    <main className="content bg">
      <div className="container">
        <div className="add">
          <div className="add__btns">
            <button className="back" onClick={() => nav(-1)}>Назад</button>
            <button className="save" onClick={() => EditResearch()}>Сохранить</button>
          </div>
          <h1>Редактирование исследования</h1>
          <div className="add__inputs">
            <div className="add__input">
              <label>Название</label>
              <input className="name" onChange={() => setName(nameInput.current.value)} ref={nameInput} value={name}></input>
            </div>
            <div className="add__input description">
              <label>Описание</label>
              <textarea ref={descriptionInput} onChange={() => setDescription(descriptionInput.current.value)} value={description}></textarea>
            </div>
            <div className="add__input">
              <label>Длительность</label>
              <select className="length" ref={lengthInput} onChange={() => setLength(lengthInput.current.value)} value={length}>
                <option value="0">Краткосрочное</option>
                <option value="1">Долгосрочное</option>
              </select>
            </div>
            <div className="add__input__requirements">
                <label>Требования <br></br>к участникам</label>
              <div className="add__input">
                <select className="gender">
                  <option>Мужской</option>
                  <option>Женский</option>
                  <option>Все</option>
                </select>
              </div>
              <div className="add__input">
                <select className="age">
                  <option>От 16 лет</option>
                  <option>От 30 лет</option>
                  <option>От 50 лет</option>
                </select>
              </div>
              <div className="add__input">
                <select className="city" ref={cityInput} onChange={() => setCity(cityInput.current.value)} value={city}>
                  <option>Samali</option>
                  <option>Амурская область</option>
                </select>
              </div>
              <div className="add__input">
                <select className="education">
                  <option>Среднее</option>
                  <option>Высшее</option>
                </select>
              </div>
            </div>
            <div className="add__input">
              <label>Количество участников</label>
              <input className="count" ref={particepentsInput} onChange={() => setParticepents(particepentsInput.current.value)} value={particepents}></input>
            </div>
            <div className="add__input">
              <label>Статус исследования</label>
              <select className="status">
                <option>Актуальное</option>
                <option>Завершенное</option>
              </select>
            </div>
          </div>
        </div>
        <div className="stages">
            <div className="stages__title">
                <h2>Этапы</h2>
                <img src="image/svgicons/plus.svg" alt="+" onClick={() => setCount(count => count+1)}/>
            </div>
            {arr.map((_, index) => <Stage key={index} />)}
        </div>
      </div>
    </main>
  );
};

export default EditReseach;
import { createRef, useMemo, useState } from "react";
import "./AddReseach.scss";
import Stage from "./Stage/Stage";
import { useNavigate } from "react-router-dom";

const AddReseach = () => {
  let nav = useNavigate();
  let [count, setCount] = useState(1);
  const arr = useMemo(() => new Array(count).fill(), [count]);
  let name = createRef()
  let description = createRef()
  let length = createRef()
  let gender = createRef()
  let age = createRef()
  let city = createRef()
  let education = createRef()
  let particepents = createRef()
  let status = createRef()

  return (
    <main className="content bg">
      <div className="container">
        <div className="add">
          <div className="add__btns">
            <button onClick={() => nav(-1)} className="back">
              Назад
            </button>
            <button className="save" onClick={() => nav("/research/my")}>Сохранить</button>
          </div>
          <h1>Создание исследования</h1>
          <div className="add__inputs">
            <div className="add__input">
              <label>Название</label>
              <input type="text" className="name" placeholder="Изучение влияния смартфонов" ref={name}></input>
            </div>
            <div className="add__input description">
              <label>Описание</label>
              <textarea placeholder="Информация об исследовании, его этапах и целях" ref={description}></textarea>
            </div>
            <div className="add__input">
              <label>Длительность</label>
              <select className="length" ref={length}>
                <option>Краткосрочное</option>
                <option>Долгосрочное</option>
              </select>
            </div>
            <div className="add__input__requirements">
              <label>
                Требования <br></br>к участникам
              </label>
              <div className="add__input">
                <select className="gender" ref={gender}>
                  <option>Мужской</option>
                  <option>Женский</option>
                  <option>Все</option>
                </select>
              </div>
              <div className="add__input">
                <select className="age" ref={age}>
                  <option>От 16 лет</option>
                  <option>От 30 лет</option>
                  <option>От 50 лет</option>
                </select>
              </div>
              <div className="add__input">
                <select className="city" ref={city}>
                  <option>Архангельская область</option>
                  <option>Амурская область</option>
                </select>
              </div>
              <div className="add__input">
                <select className="education" ref={education}>
                  <option>Среднее</option>
                  <option>Высшее</option>
                </select>
              </div>
            </div>
            <div className="add__input">
              <label>Количество участников</label>
              <input className="count" ref={particepents} placeholder="250"></input>
            </div>
            <div className="add__input">
              <label>Статус исследования</label>
              <select className="status" ref={status}>
                <option>Актуальное</option>
                <option>Завершенное</option>
              </select>
            </div>
          </div>
        </div>
        <div className="stages">
          <div className="stages__title">
            <h2>Этапы</h2>
            <img
              src="image/svgicons/plus.svg"
              alt="+"
              onClick={() => setCount((count) => count + 1)}
            />
          </div>
          {arr.map((_, index) => (
            <Stage key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AddReseach;

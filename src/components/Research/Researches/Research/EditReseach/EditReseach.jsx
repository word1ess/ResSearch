import { useMemo, useState } from "react";
import "./EditReseach.scss";
import Stage from "../AddReseach/Stage/Stage";

const EditReseach = () => {
    let [count, setCount] = useState(1)
    const arr = useMemo(() => new Array(count).fill(), [count]);
  return (
    <main className="content bg">
      <div className="container">
        <div className="add">
          <div className="add__btns">
            <button className="back">Назад</button>
            <button className="save">Сохранить</button>
          </div>
          <h1>Редактирование исследования</h1>
          <div className="add__inputs">
            <div className="add__input">
              <label>Название</label>
              <input className="name" ></input>
            </div>
            <div className="add__input description">
              <label>Описание</label>
              <textarea></textarea>
            </div>
            <div className="add__input">
              <label>Длительность</label>
              <select className="length">
                <option>Краткосрочное</option>
                <option>Долгосрочное</option>
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
                <select className="city">
                  <option>Архангельская область</option>
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
              <input className="count"></input>
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
import { useState } from "react";
import "./Support.scss";
import Success from "./Success/Success";
const Support = () => {
  let [success, setSuccess] = useState()

  return (
    <main className="content bg">
      <div className="container">
        {!success && <div className="support">
          <h1>Задайте вопрос</h1>
          <div className="support__inputs">
            <div className="support__input">
              <label>Имя</label>
              <input></input>
            </div>
            <div className="support__input">
              <label>Электронная почта<span>*</span></label>
              <input></input>
            </div>
            <div className="support__input">
              <label>Номер телефона<span>*</span></label>
              <input></input>
            </div>
            <div className="support__input">
              <label>Вопрос<span>*</span></label>
              <textarea></textarea>
            </div>
            <div className="form__checkbox">
              <input type="checkbox" className="custom-checkbox" id="data"></input>
              <label for="data">Согласие на обработку персональных данных</label>
            </div>
          </div>
          <button className="support__btn" onClick={() => setSuccess(success => !success)}>Отправить</button>
        </div>}
        {success && <Success />}
      </div>

    </main>
  );
};

export default Support;

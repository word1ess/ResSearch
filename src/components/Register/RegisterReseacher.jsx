import { useContext } from "react";
import "./Register.scss";
import AuthContext from "../../context/AuthContext";

const RegisterReseacher = () => {
  let { registerUser } = useContext(AuthContext)
  return (
    <div className="container">
      <form className="form" onSubmit={registerUser}>
        <div className="form__item">
          <label>
            Название компании<span>*</span>
          </label>
          <input type="text" name="name" placeholder="ОАО Мегабанк"></input>
        </div>
        <div className="form__item">
          <label>
            ИНН компании<span>*</span>
          </label>
          <input type="number" name="inn" placeholder="123456789000"></input>
        </div>
        <div className="form__address">
          <label>Юридический адрес</label>
          <div className="form__item">
            <label className="label">
              Субъект<span>*</span>
            </label>
            <select type="text" name="subject">
              <option>Архангельская область</option>
              <option>Амурская область</option>
            </select>
          </div>
          <div className="form__item">
            <label className="label">
              Город<span>*</span>
            </label>
            <select type="text" name="city">
              <option>Москва</option>
              <option>Санкт-Петербург</option>
            </select>
          </div>
        </div>
        <div className="form__item">
          <label>
            Номер телефона<span>*</span>
          </label>
          <input type="tel" name="tel" placeholder="89123456789"></input>
        </div>
        <div className="form__item">
          <label>
            Электронная почта<span>*</span>
          </label>
          <input type="email" name="email" placeholder="example@mail.com"></input>
        </div>
        <div className="form__item">
          <label>Сайт компании</label>
          <input type="text" name="site" placeholder="www.my-site"></input>
        </div>
        <div className="form__item">
          <label>
            Пароль<span>*</span>
          </label>
          <input type="password" name="password1"></input>
        </div>
        <div className="form__item">
          <label>
            Подтвердите пароль<span>*</span>
          </label>
          <input type="password" name="password2"></input>
        </div>
        <div className="checkbox-block">
          <div className="form__checkbox">
            <input
              type="checkbox"
              className="custom-checkbox"
              id="data"
              name="checkbox-age"
            ></input>
            <label for="data">Я подтверждаю, что мне больше 18 лет</label>
          </div>
          <div className="form__checkbox">
            <input
              type="checkbox"
              className="custom-checkbox"
              id="data"
              name="checkbox-data"
            ></input>
            <label for="data">Согласие на обработку персональных данных</label>
          </div>
        </div>

        <button type="submit" className="form__btn">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegisterReseacher;

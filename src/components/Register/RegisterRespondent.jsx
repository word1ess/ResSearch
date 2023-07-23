import "./Register.scss";

const RegisterRespondent = () => {
  return (
    <form className="form" /* onSubmit={registerUser} */>
      <div className="form__item">
        <label>
          Имя пользователя<span>*</span>
        </label>
        <input type="text" name="name" placeholder="Михаил"></input>
      </div>
      <div className="form__item">
        <label>
          Дата рождения<span>*</span>
        </label>
        <input type="date" name="birthday"></input>
      </div>
      <div className="form__item">
        <label>
          Пол<span>*</span>
        </label>
        <select type="text" name="gender">
          <option>Мужской</option>
          <option>Женский</option>
        </select>
      </div>
      <div className="form__address">
        <label>Место проживания</label>
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
          Уровень образования<span>*</span>
        </label>
        <select type="text" name="education">
          <option>Среднее</option>
          <option>Высшее</option>
        </select>
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
        <input type="email" name="email" placeholder="example@mai;.com"></input>
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
      <div className="form__checkbox">
        <input
          type="checkbox"
          className="custom-checkbox"
          id="data"
          name="checkbox"
        ></input>
        <label for="data">Согласие на обработку персональных данных</label>
      </div>
      <button type="submit" className="form__btn">
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegisterRespondent;

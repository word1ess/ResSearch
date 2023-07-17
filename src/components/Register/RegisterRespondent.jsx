import "./Register.scss"

const RegisterRespondent = () => {
    return (
        <div className="container">
            <form className="form">
                <div className="form__item">
                    <label>Имя пользователя<span>*</span></label>
                    <input type="text"></input>
                </div>
                <div className="form__item">
                    <label>Дата рождения<span>*</span></label>
                    <input type="date"></input>
                </div>
                <div className="form__item">
                    <label>Пол<span>*</span></label>
                    <select>
                        <option>Мужской</option>
                        <option>Женский</option>
                    </select>
                </div>
                <div className="form__address">
                    <label>Место проживания</label>
                    <div className="form__item">
                        <label className="label">Субъект<span>*</span></label>
                        <select>
                        <option>Архангельская область</option>
                        <option>Амурская область</option>
                    </select>
                    </div>
                    <div className="form__item">
                        <label className="label">Город<span>*</span></label>
                        <select>
                        <option>Москва</option>
                        <option>Санкт-Петербург</option>
                        </select>
                        
                    </div>
                </div>
                <div className="form__item">
                    <label>Уровень образования<span>*</span></label>
                    <select>
                        <option>Среднее</option>
                        <option>Высшее</option>
                    </select>
                </div>
                <div className="form__item">
                    <label>Номер телефона<span>*</span></label>
                    <input type="tel"></input>
                </div>
                <div className="form__item">
                    <label>Электронная почта<span>*</span></label>
                    <input type="email"></input>
                </div>
                <div className="form__item">
                    <label>Пароль<span>*</span></label>
                    <input type="password"></input>
                </div>
                <div className="form__item">
                    <label>Подтвердите пароль<span>*</span></label>
                    <input type="password"></input>
                </div>
                <div className="form__checkbox">
                    <input type="checkbox" className="custom-checkbox" id="data"></input>
                    <label for="data">Согласие на обработку персональных данных</label>
                </div>
                <button className="form__btn">Зарегистрироваться</button>
            </form>
            
        </div>
    );
};

export default RegisterRespondent;
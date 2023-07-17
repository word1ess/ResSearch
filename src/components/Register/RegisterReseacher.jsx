import "./Register.scss"

const RegisterReseacher = () => {
    return (
        <div className="container">
            <form className="form">
                <div className="form__item">
                    <label>Название компании<span>*</span></label>
                    <input type="text"></input>
                </div>
                <div className="form__item">
                    <label>ИНН компании<span>*</span></label>
                    <input type="number"></input>
                </div>
                <div className="form__address">
                    <label>Юридический адрес</label>
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
                    <label>Номер телефона<span>*</span></label>
                    <input type="tel"></input>
                </div>
                <div className="form__item">
                    <label>Электронная почта<span>*</span></label>
                    <input type="email"></input>
                </div>
                <div className="form__item">
                    <label>Сайт компании</label>
                    <input type="text"></input>
                </div>
                <div className="form__item">
                    <label>Пароль<span>*</span></label>
                    <input type="password"></input>
                </div>
                <div className="form__item">
                    <label>Подтвердите пароль<span>*</span></label>
                    <input type="password"></input>
                </div>
                <div className="checkbox-block">
                    <div className="form__checkbox">
                        <input type="checkbox" className="custom-checkbox" id="data"></input>
                        <label for="data">Я подтверждаю, что мне больше 18 лет</label>
                    </div>
                    <div className="form__checkbox">
                        <input type="checkbox" className="custom-checkbox" id="data"></input>
                        <label for="data">Согласие на обработку персональных данных</label>
                    </div>
                </div>

                <button className="form__btn">Зарегистрироваться</button>
            </form>

        </div>
    );
};

export default RegisterReseacher;
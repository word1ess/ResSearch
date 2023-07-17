import { NavLink } from "react-router-dom";
import "./Success.scss";

const Success = () => {
    return (
        <div className="success">
            <img src="image/svgicons/ok.svg"></img>
            <h1>Спасибо!</h1>
            <p>Ваш вопрос отправлен. Мы свяжемся с вами<br></br>
                в ближайшее время</p>
            <NavLink to="/research" className="success__btn">Вернуться к исследованиям</NavLink>
        </div>
    );
};

export default Success;
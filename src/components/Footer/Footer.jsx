import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
    return (
        <main className="footer">
            <div className="container">
                <div className="footer__menu">
                    <p to="/">Главная</p>
                    <p to="/faq">Как это работает?</p>
                    <p to="/research">Исследования</p>
                    <p>О нас</p>
                </div>
                <div className="footer__networks">
                    <p href="">ВКонтакте</p>
                    <p href="">Telegram</p>
                    <p href="">Discord</p>
                </div>
                <div className="footer__contacts">
                    <p>Поддержка</p>
                </div>
            </div>
            
        </main>
    );
};

export default Footer;
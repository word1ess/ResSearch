import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <main className="footer">
      <div className="container">
        <div className="footer__menu">
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/faq">Как это работает?</NavLink>
          <NavLink to="/research">Исследования</NavLink>
          <NavLink to="/support">Поддержка</NavLink>
          <NavLink>О нас</NavLink>
          <NavLink>Контакты</NavLink>
        </div>
        <div className="footer__networks">
          <div className="social" href="">
            <img src="image/svgicons/vk.svg" alt="" />
          </div>
          <div className="social" href="">
            <img src="image/svgicons/tg.svg" alt="" />
          </div>
          <div className="social" href="">
            <img src="image/svgicons/driscord.svg" alt="" />
          </div>
        </div>
        <div className="footer__copy">© 2023 ResSearch</div>
      </div>
    </main>
  );
};

export default Footer;

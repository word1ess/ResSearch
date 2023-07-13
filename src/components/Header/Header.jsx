import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <NavLink to="/">
              <img src="image/svgicons/logo.svg" alt="logo" />
            </NavLink>
          </div>
          <ul className="header__links">
            <li className="header__link">
              <NavLink to="research">Исследования</NavLink>
            </li>
            <li className="header__link">
              <NavLink to="faq">Как это работает?</NavLink>
            </li>
            <li className="header__link">
              <NavLink to="support">Поддержка</NavLink>
            </li>
            <li className="header__link">
              <NavLink to="user">Войти</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

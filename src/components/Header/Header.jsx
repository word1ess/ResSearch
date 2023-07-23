import { useContext } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const Header = () => {
  let { email } = useContext(AuthContext)
  let { logoutUser } = useContext(AuthContext)
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
            {email && <li className="header__link">
              <NavLink to="user" className="profile">Профиль</NavLink>
            </li>}
            {!email && <li className="header__link">
              <NavLink to="login">Войти</NavLink>
            </li>}
            {email && <li className="header__link">
              <NavLink to="/" onClick={logoutUser}>Выйти</NavLink>
            </li>}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

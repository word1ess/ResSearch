import { NavLink } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <main className="content bg">
      <div className="container">
        <div className="login">
          <h1>Вход</h1>
          <div className="login__inputs">
            <div className="login__input">
              <label>Логин</label>
              <input></input>
            </div>
            <div className="login__input passwd">
              <div>
                <label>Пароль</label>
                <input></input>
              </div>
              <p>Забыли пароль?</p>
            </div>
            <button className="login__btn">Войти</button>
            <div className="login__register">
              Нет аккаунта? <NavLink to="/register">Зарегистрироваться</NavLink>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
};

export default Login;

import { NavLink } from "react-router-dom";
import "./Login.scss";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import Success from "./Success";

const Login = () => {
  let [success, setSuccess] = useState(false)
  console.log(success)
  let { loginUser } = useContext(AuthContext)
  return (
    <main className="content bg">
      <div className="container">
        {!success && <div className="login">
          <h1>Вход</h1>
          <form className="login__inputs" onSubmit={loginUser}>
            <div className="login__input">
              <label>Логин</label>
              <input name="email"></input>
            </div>
            <div className="login__input passwd">
              <div>
                <label>Пароль</label>
                <input name="password" type="password"></input>
              </div>
              <p>Забыли пароль?</p>
            </div>
            <button className="login__btn" type="submit" to="/research"  /* onClick={() => setSuccess(success => !success)} */>Войти</button>
            <div className="login__register">
              Нет аккаунта? <NavLink to="/register">Зарегистрироваться</NavLink>
            </div>
          </form>

        </div>}
        {success && <Success />}
      </div>

    </main>
  );
};

export default Login;

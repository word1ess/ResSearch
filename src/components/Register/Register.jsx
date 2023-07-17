import { useState } from "react";
import "./Register.scss";
import RegisterReseacher from "./RegisterReseacher";
import RegisterRespondent from "./RegisterRespondent";

const Register = () => {
    const [tumbler, setTumbler] = useState()
    return (
        <main className="content bg">
            <div className="container">
                <div className="register">
                    <h1>Регистрация</h1>
                    <div class="switch-block">
                        <p>Участник</p>
                        <label className="checkbox">
                            <input type="checkbox" id="check" onChange={() => setTumbler(tumbler => !tumbler)}/>
                            <span className="checkbox-switch"></span>
                        </label>
                        <p>Исследователь</p>
                    </div>
                {tumbler ? <RegisterReseacher /> : <RegisterRespondent />}
                </div>

            </div>
        </main>
    );
};

export default Register;

import React from "react";
import "./User.scss";

const OldUser = (props) => {
  let userName = React.createRef();
  let birthDay = React.createRef();
  let sex = React.createRef();
  let country = React.createRef();
  let education = React.createRef();
  let phone = React.createRef();
  let email = React.createRef();

  let userChange = React.createRef();
  let userSave = React.createRef();
  let userInfo = React.createRef();

  const clickUserChange = () => {
    userInfo.current.classList.add("edit");
  };
  const clickUserSave = () => {
    props.changeUserInfo(
      userName.current.value,
      birthDay.current.value,
      sex.current.value,
      country.current.value,
      education.current.value,
      phone.current.value,
      email.current.value
    );
    userInfo.current.classList.remove("edit");
  };
  return (
    <>
      <main className="content bg">
        <section className="user">
          <div className="container">
            <div className="user__row">
              <div className="user__img">
                <img src={props.state.userInfo.image} alt="" />
              </div>
              <div ref={userInfo} className="user__info">
                <header className="user__header">
                  <h1>Профиль</h1>
                  <button
                    onClick={clickUserChange}
                    className="user__btn btn-change"
                    ref={userChange}
                  >
                    <img src="/image/svgicons/edit.svg" alt="" />
                  </button>
                  <button
                    onClick={clickUserSave}
                    className="user__btn btn-save"
                    ref={userSave}
                  >
                    <img src="/image/svgicons/save.svg" alt="" />
                  </button>
                </header>
                <div className="user__characteristic">
                  <p>Имя пользователя</p>
                  <p className="hidden">{props.state.userInfo.userName}</p>
                  <input
                    type="text"
                    className="user__input"
                    ref={userName}
                    placeholder={props.state.userInfo.userName}
                  />
                </div>
                <div className="user__characteristic">
                  <p>Дата рождения</p>
                  <p className="hidden">{props.state.userInfo.birthDay}</p>
                  <input
                    type="date"
                    className="user__input"
                    ref={birthDay}
                    placeholder={props.state.userInfo.birthDay}
                  />
                </div>
                <div className="user__characteristic">
                  <p>Пол</p>
                  <p className="hidden">{props.state.userInfo.sex}</p>
                  <input
                    type="text"
                    className="user__input"
                    ref={sex}
                    placeholder={props.state.userInfo.sex}
                  />
                </div>
                <div className="user__characteristic column">
                  <p className="no-flex">Место жительства</p>
                  <div className="flex">
                    <p>Субъект</p>
                    <p className="hidden">{props.state.userInfo.country}</p>
                    <input
                      type="text"
                      className="user__input"
                      ref={country}
                      placeholder={props.state.userInfo.country}
                    />
                  </div>
                  <div className="flex">
                    <p>Город</p>
                    <p className="hidden">{props.state.userInfo.country}</p>
                    <input
                      type="text"
                      className="user__input"
                      ref={country}
                      placeholder={props.state.userInfo.country}
                    />
                  </div>
                </div>
                <div className="user__characteristic">
                  <p>Образование</p>
                  <p className="hidden">{props.state.userInfo.education}</p>
                  <input
                    type="text"
                    className="user__input"
                    ref={education}
                    placeholder={props.state.userInfo.education}
                  />
                </div>
                <div className="user__characteristic">
                  <p>Номер телефона</p>
                  <p className="hidden">{props.state.userInfo.phone}</p>
                  <input
                    type="text"
                    className="user__input"
                    ref={phone}
                    placeholder={props.state.userInfo.phone}
                  />
                </div>
                <div className="user__characteristic">
                  <p>Электронная почта</p>
                  <p className="hidden">{props.state.userInfo.email}</p>
                  <input
                    type="text"
                    className="user__input"
                    ref={email}
                    placeholder={props.state.userInfo.email}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default OldUser;

import axios from "axios";
import "./User.scss";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import avatar from "../Research/Researches/Research/avatar.jpg"

const Participant = () => {
    let { user } = useContext(AuthContext);
    let [profile, setProfile] = useState()
    async function fetchResearches() {
        let response = axios({
            method: "get",
            url: `http://127.0.0.1:5130/api/user/${user.userId}`,
            headers: {
              "Accept": "/",
              "Content-Type": "application/json;charset=UTF-8",
            },
          });
          let data = await response
          setProfile(data.data)
          console.log(data.data)
      }
      useEffect(() => {
        fetchResearches()
      }, [])
    return (
        <div className="user__row">
              <div className="user__img">
                <img src={avatar} alt="" />
              </div>
              <div /* ref={userInfo}  */className="user__info">
                <header className="user__header">
                  <h1>Профиль</h1>
                  <button
                    /* onClick={clickUserChange} */
                    className="user__btn btn-change"
                    /* ref={userChange} */
                  >
                    <img src="/image/svgicons/edit.svg" alt="" />
                  </button>
                  <button
                    /* onClick={clickUserSave} */
                    className="user__btn btn-save"
                    /* ref={userSave} */
                  >
                    <img src="/image/svgicons/save.svg" alt="" />
                  </button>
                </header>
                <div className="user__characteristic">
                  <p>Имя пользователя</p>
                  <p /* className="hidden" */>{profile?.firstName}</p>
                  
                </div>
                <div className="user__characteristic">
                  <p>Дата рождения</p>
                  <p className="hidden">{profile?.birthDay.split("T")[0]}</p>
                  
                </div>
                <div className="user__characteristic">
                  <p>Пол</p>
                  <p className="hidden">{profile?.gender === 0 ? "Мужской" : "Женский"}</p>
                  
                </div>
                <div className="user__characteristic column">
                  <p className="no-flex">Место жительства</p>
                  <div className="flex">
                    <p>Субъект</p>
                    <p className="hidden">{profile?.regionName}</p>
                    
                  </div>
                  <div className="flex">
                    <p>Город</p>
                    <p className="hidden">{profile?.cityName}</p>
                    
                  </div>
                </div>
                <div className="user__characteristic">
                  <p>Образование</p>
                  <p className="hidden">{profile?.educationLevel === 2 && "Высшее"}</p>
                  
                </div>
                <div className="user__characteristic">
                  <p>Номер телефона</p>
                  <p className="hidden">{profile?.phoneNumber}</p>
                  
                </div>
                <div className="user__characteristic">
                  <p>Электронная почта</p>
                  <p className="hidden">{profile?.email}</p>
                  
                </div>
              </div>
            </div>
    );
};

export default Participant;
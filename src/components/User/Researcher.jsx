import { useContext, useEffect, useState } from "react";
import "./User.scss";
import AuthContext from "../../context/AuthContext";
import axios from "axios";

const Researcher = () => {
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
                <img /* src={props.state.userInfo.image}  */alt="" />
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
                  <p>Название компании</p>
                  <p /* className="hidden" */>{profile?.companyName}</p>
                  
                </div>
                <div className="user__characteristic">
                  <p>ИНН компании</p>
                  <p className="hidden">{profile?.inn}</p>
                  
                </div>
                <div className="user__characteristic">
                  <p>Сайт компании</p>
                  <p className="hidden">{profile?.webAddress}</p>
                  
                </div>
                <div className="user__characteristic column">
                  <p className="no-flex">Юридический адрес</p>
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

export default Researcher;
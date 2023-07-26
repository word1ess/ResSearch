import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(() =>
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const nav = useNavigate();

  let loginUser = async(e) => {
    e.preventDefault()
        let response = await fetch('http://localhost:5130/api/signin', {
            method: 'POST',
            headers: {
                'Accept': "*/*",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'email': e.target.email.value, 'password': e.target.password.value })
        })
        console.log(response)
        let data = await response.json()
        console.log(data)
        if (response.status === 200) {
          localStorage.setItem('user', JSON.stringify(data))
          nav('/research')
      } else {
          alert('Проверьте логин или пароль')
      }
  };

  let registerParticipant = async (e) => {
    e.preventDefault()
    /* if (e.target.password1.value !== e.target.password2.value) {
        alert('Пароли не совпадают')
        return
    } */
    let response = await fetch(
        "http://127.0.0.1:5130/api/signup/participant",
        {
            method: "POST",
            headers: {
                'Accept': "/",
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                "regionName": e.target.subject.value,
                "cityName": e.target.city.value,
                "phoneNumber": e.target.tel.value,
                "email": e.target.email.value,
                "password": e.target.password1.value,
                "firstName": e.target.name.value,
                "lastName": e.target.name.value,
                "birthDate": "2002-07-10T11:12:42.741Z",
                "gender": +e.target.gender.value,
                "educationLevel": +e.target.education.value,
                /* "regionName": "Samali",
                "cityName": "London",
                "phoneNumber": "8912365392",
                "email": "aboba@aboba.aboba",
                "password": "Aboba123",
                "firstName": "aboba",
                "lastName": "aboba",
                "birthDate": "2023-07-26T11:12:42.741Z",
                "gender": 0,
                "educationLevel": 0, */
            }),
        }
    )
    if (response.status === 201) {
        nav("/login")
    } else {
        alert('Ошибочка')
    }
}

let registerResearcher = async (e) => {
  e.preventDefault()
  if (e.target.password1.value !== e.target.password2.value) {
      alert('Пароли не совпадают')
      return
  }
  let response = await fetch(
      "http://127.0.0.1:5130/api/signup/researcher",
      {
          method: "POST",
          headers: {
              'Accept': "/",
              'Content-Type': 'application/json;charset=UTF-8',
          },
          body: JSON.stringify({
              "regionName": e.target.subject.value,
              "cityName": e.target.city.value,
              "phoneNumber": e.target.tel.value,
              "email": e.target.email.value,
              "password": e.target.password1.value,
              "companyName": e.target.name.value,
              "inn": e.target.inn.value,
              "webAddress": e.target.site.value,
          }),
      }
  )
  nav("/login")
  /* if (response.status === 200) {
    nav("/login")
  } else {
      alert('Ошибочка')
  } */
}

  let logoutUser = async(e) => {
    let response = await fetch(
      "http://127.0.0.1:5130/api/signout",
      {
          method: "POST",
          headers: {
              'Accept': "/",
              'Content-Type': 'application/json;charset=UTF-8',
          }
      }
  )
    setUser(null);
    localStorage.removeItem("user");
    nav("");
  };

  let updateUser = (newUser) => {
    setUser(newUser);
  };

  
  let contextData = {
    user: user,
    updateUser: updateUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
    registerParticipant: registerParticipant,
    registerResearcher: registerResearcher,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({ children }) => {

    let [email, setEmail] = useState(() =>
    localStorage.getItem('email')
        ? (localStorage.getItem('email'))
        : null)
    let [passwd, setPasswd] = useState(() =>
    localStorage.getItem('password')
        ? (localStorage.getItem('password'))
        : null)
    let [research, setResearch] = useState()

    let [authToken, setAuthToken] = useState(() =>
        localStorage.getItem('authTokens')
            ? JSON.parse(localStorage.getItem('authTokens'))
            : null)

    let [user, setUser] = useState(() =>
        localStorage.getItem('user')
            ? JSON.parse(localStorage.getItem('user'))
            : null)

    let [loading, setLoading] = useState(true)

    const nav = useNavigate()

    let loginUser =  (e) => {
        /* e.preventDefault()

        let response = await fetch('http://127.0.0.1:8000/auth/jwt/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'email': e.target.email.value, 'password': e.target.password.value })
        })
        let data = await response.json()
        let getUser = await fetch('http://127.0.0.1:8000/api/profile/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${data.access}`
            }
        })
        let dataUser = await getUser.json()
        if (response.status === 200) {
            setAuthToken(data)
            setUser(dataUser.user)
            localStorage.setItem('authTokens', JSON.stringify(data))
            localStorage.setItem('user', JSON.stringify(dataUser.user))
            console.log(dataUser)
            if (dataUser.user.full_name === null) nav('/profile')
            else nav('/vacansies')
        } else {
            alert('Ошибочка')
        } */
        /* setEmail(e.target.email.value)
        setPasswd(e.target.passsword.value) */
        e.preventDefault()
        localStorage.setItem('email', e.target.email.value)
        localStorage.setItem('password', e.target.passsword.value)
        nav("research")
    }

    let registerUser = async (e) => {
        /* e.preventDefault()
        if (e.target.password.value !== e.target.password2.value) {
            alert('Пароли не совпадают')
            return
        }
        let response = await fetch('http://127.0.0.1:8000/auth/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': e.target.email.value,
                'password': e.target.password.value
            })
        })
        if (response.status === 201) {
            alert('На вашу почту отправлено письмо. Проверьте её и подтвердите ваш email.')
        } else {
            alert('Ошибочка')
        }
 */
    }

    let logoutUser = () => {
        setAuthToken(null)
        setUser(null)
        setEmail(null)
        localStorage.removeItem('authTokens')
        localStorage.removeItem('user')
        localStorage.removeItem('email')
        nav('')
    }

    let updateUser = (newUser) => {
        setUser(newUser)
    }

    let updateToken = async () => {
        console.log('Обновилиии')
        let response = await fetch('http://127.0.0.1:8000/auth/jwt/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'refresh': authToken.refresh })
        })
        let data = await response.json()
        let tokens = {
            'refresh': authToken.refresh,
            'access': data.access
        }
        if (response.status === 200) {
            setAuthToken(tokens)
            localStorage.setItem('authTokens', JSON.stringify(tokens))
        } else {
            logoutUser()
        }

    }

    let contextData = {
        user: user,
        authToken: authToken,
        updateUser: updateUser,
        loginUser: loginUser,
        logoutUser: logoutUser,
        registerUser: registerUser,
        email: email,
        passwd: passwd
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
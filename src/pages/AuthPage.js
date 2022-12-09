import React, { useContext } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const AuthPage = () => {
    let { user } = useContext(AuthContext)
    const disNone = {
        display: 'none'
    }
    return (
        user ? <div style={disNone}></div>
            : <div>
                <NavLink to="/auth/login" className="">Войти </NavLink>
                <NavLink to="/auth/register" className="">Зарегистрироваться </NavLink>
            </div>
    )
}

export default AuthPage
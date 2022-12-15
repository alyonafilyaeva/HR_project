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
                <div className='auth'>
                <NavLink to="/auth/login" className="">Войти </NavLink>
                <NavLink to="/auth/register" className="">Зарегистрироваться </NavLink>
                </div>
                <img src=''/>
            </div>
    )
}

export default AuthPage
import React, { useContext } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import main from '../imgs/main.png'
import logo from '../imgs/logo.png'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

const AuthPage = () => {
    let { user } = useContext(AuthContext)
    const disNone = {
        display: 'none'
    }
    const [status, setStatus] = React.useState(0)
    return (
        user ? <div style={disNone}></div>
            : <div className='auth-page'>
                <div className='auth'>
                    {/* <NavLink to="/auth/login" className="">Войти </NavLink>
                    <NavLink to="/auth/register" className="">Зарегистрироваться </NavLink> */}
                    <img src={logo} className='logo' />
                    <div className='auth_form'>
                        <div className='list_auth'>
                            <h2 onClick={() => setStatus(0)} className={`${status === 0 && 'clicked'}`}>Вход</h2>
                            <h2 onClick={() => setStatus(1)} className={`${status === 1 && 'clicked'}`}>Регистрация</h2>
                        </div>
                        {status == 0 ? <LoginPage /> : <RegisterPage />}
                    </div>

                </div>
                <div className='plitka'>
                <img src={main} />    
                </div>
                
            </div>
    )
}

export default AuthPage;
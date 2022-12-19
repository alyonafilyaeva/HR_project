import React, { useContext, useLayoutEffect } from 'react'
import AuthContext from '../context/AuthContext'
import main from '../imgs/main.png'

const LoginPage = (props) => {
    let { loginUser } = useContext(AuthContext)
    return (
        <div className='login'>
            <form onSubmit={loginUser}>
                <input type='text' name='email' placeholder='Email' className='input_auth log'/>
                <input type='password' name='password' placeholder='Пароль' className='input_auth password log'/>
                <button type='submit' className='btn_auth'>Войти</button>
            </form>
            
        </div>
    )
}

export default LoginPage
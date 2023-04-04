import React, { useContext, useLayoutEffect } from 'react'
import AuthContext from '../context/AuthContext'
import main from '../imgs/main.png'

const LoginPage = (props) => {
    let { loginUser } = useContext(AuthContext)

    /* var pass = document.querySelector('.password');
    var login = document.querySelector('.login');


    pass.addEventListener('input', changeBackground);
    login.addEventListener('input', changeBackground);

    function changeBackground() {
        if (pass.value !== '' && login.value !== '') {
            document.querySelector('btn_auth').style.background = '#E58025';
        } else {
            document.querySelector('btn_auth').style.background = '#A6A8B1';
        }
    } */

    return (
        <div className='login'>
            <form onSubmit={loginUser}>
                <input type='text' name='email' placeholder='Email' className='input_auth ' />
                <input type='password' name='password' placeholder='Пароль' className='input_auth password log' />
                <button type='submit' className='btn_auth'>Войти</button>
            </form>

        </div>
    )
}

export default LoginPage
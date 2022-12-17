import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import main from '../imgs/main.png'

const RegisterPage = () => {
    let { registerUser } = useContext(AuthContext)
    return (
        <div className='register'>
            <div className=''>
            <form onSubmit={registerUser}>
                <input type='text' name='email' placeholder='Email' className='input_auth'/>
                <input type='password' name='password' placeholder='Пароль' className='input_auth'/>
                <input type='password' name='password2' placeholder='Пароль ещё раз' className='input_auth'/>
                <button type='submit' className='btn_auth'>Зарегистрироваться</button>
            </form>
            </div>
            
            {/* <img src={main} /> */}
        </div>
    )
}

export default RegisterPage
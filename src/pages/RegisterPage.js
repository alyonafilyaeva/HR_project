import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import main from '../imgs/main.png'

const RegisterPage = () => {
    let { registerUser } = useContext(AuthContext)
    return (
        <div className='register'>
            <div className=''>
            <form onSubmit={registerUser}>
                <input type='text' name='email' placeholder='Email' className='input_reg'/>
                <input type='password' name='password' placeholder='Придумайте пароль' className='input_reg password'/>
                <input type='password' name='password2' placeholder='Повторите пароль' className='input_reg password'/>
                <button type='submit' className='btn_reg'>Зарегистрироваться</button>
            </form>
            </div>
            
            {/* <img src={main} /> */}
        </div>
    )
}

export default RegisterPage
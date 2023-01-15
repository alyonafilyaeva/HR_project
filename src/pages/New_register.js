import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import main from '../imgs/main.png'

const New_register = () => {
    let { registerUser } = useContext(AuthContext)
    return (
        <div className='register'>
            <div className='auth_form'>
            <form >
                <input type='password' name='password' placeholder='Введите новый пароль' className='input_reg password'/>
                <input type='password' name='password2' placeholder='Повторите пароль' className='input_reg password'/>
                <button type='submit' className='btn_reg'>Сохранить</button>
            </form>
            </div>
        </div>
    )
}

export default New_register;
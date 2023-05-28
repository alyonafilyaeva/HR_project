import React, { createRef, useContext, useRef, useState } from 'react'
import AuthContext from '../context/AuthContext'
import main from '../imgs/main.png'
import { useReducer } from 'react'

const RegisterPage = () => {
    let { registerUser } = useContext(AuthContext)
    let pswd1 = createRef()
    let pswd2 = createRef()
    let [pswd, setPswd] = useState('')
    let handlePswd = () => {
        
        {pswd1.current.value === pswd2.current.value ? setPswd('green') : setPswd('red')}
        console.log(pswd)
    }
    
    return (
        <div className='register'>
            <div className=''>
            <form onSubmit={registerUser}>
                <input  name='email' placeholder='Email' className='input_reg'/>
                <input type='password' ref={pswd1} name='password' className={`${pswd} input_reg password`} placeholder='Придумайте пароль'/>
                <input type='password' ref={pswd2} name='password2' onChange={handlePswd} className={`${pswd} input_reg password`} placeholder='Повторите пароль'/>
                <p className='pswd-ad'>{pswd == 'red' ? "Пароли должны совпадать" : "Пароли совпадают"}</p>
                <button type='submit' className='btn_reg'>Зарегистрироваться</button>
            </form>
            </div>
            
            {/* <img src={main} /> */}
        </div>
    )
}

export default RegisterPage;
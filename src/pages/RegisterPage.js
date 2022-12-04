import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const RegisterPage = () => {
    let { registerUser } = useContext(AuthContext)
    return (
        <div>
            <form onSubmit={registerUser}>
                <input type='text' name='email' placeholder='Email' />
                <input type='password' name='password' placeholder='Пароль' />
                <input type='password' name='password2' placeholder='Пароль ещё раз' />
                <input type='submit' />
            </form>
        </div>
    )
}

export default RegisterPage
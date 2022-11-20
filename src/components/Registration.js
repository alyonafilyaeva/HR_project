import React from 'react';

function Registration() {
    const [status, setStatus] = React.useState('SignIn')
    return (
        <div>
            Регистрация
            <form>
                <div>
                    <h2 onClick={() => setStatus('SignIn')} className={`${status === 'SignIn' && 'active'}`}>Вход</h2>
                    <h2 onClick={() => setStatus('SignUp')} className={`${status === 'SignUp' && 'active'}`}>Регистрация</h2>
                </div>
                    <input type="email" placeholder='E-mail'/>
                    {status === 'SignUp' && <input type="text" placeholder="Введите ваше ФИО через пробел"></input>}
                    <input type="password" placeholder={status === 'SignIn' ? 'Пароль': 'Придумайте пароль'}/>
                    {status === 'SignUp' && <input type="password" placeholder="Повторите пароль"></input>}
                
                <div>
                    <button type='submit'>{status === 'SignIn' ? 'Войти': 'Зарегистрироваться'}</button>
                </div>
            </form>
        </div>
    )
} 

export default Registration;
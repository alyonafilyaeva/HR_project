import React from "react";
import { NavLink } from "react-router-dom";


const Profile = () => {
    return(
        <div>
            <p>Профиль</p>
            <div className="cart">
                <div >
                    <p>Фамилия Имя Отчество</p>
                    <p>Сотрудник</p>
                    <div className="data">
                        <p>E-mail: email@email.com</p>
                        <p>Телефон: 88005553535</p>
                    </div>
                    <div>
                        <NavLink to="/profile/edit">Изменить данные</NavLink>
                        <button>Изменить пароль</button>
                    </div>
                </div>
                <div>
                    photo
                </div>
            </div>
        </div>
    )
}

export default Profile;
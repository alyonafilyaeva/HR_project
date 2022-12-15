import React from "react";
import { useContext, useLayoutEffect} from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import axios from "axios"

function Profile(props) {
    let { authToken } = useContext(AuthContext)
    
    useLayoutEffect(() => {
        axios.get("http://127.0.0.1:8000/api/profile/", {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }
        }).then(response => {
            props.setUser(response.data.user)
        })
    }, [])
    let { user } = useContext(AuthContext)
    return(
        <div>
            <p>Профиль</p>
            <div className="cart">
                <div >
                    <p>{user.full_name}</p>
                    <p>{user.is_header_dep ? 'Глава департамента': 'Сотрудник'}</p>
                    <div className="data">
                        <p>E-mail: {user.email}</p>
                        <p>Телефон: 88005553535</p>
                    </div>
                    <div>
                        <NavLink to="/profile/edit">Изменить данные</NavLink>
                        <button>Изменить пароль</button>
                    </div>
                </div>
                <div>
                <img src={user.image}></img>
                </div>
            </div>
        </div>
    )
}

export default Profile;
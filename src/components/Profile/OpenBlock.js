import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const OpenBlock = () => {
    let { logoutUser, user } = useContext(AuthContext)

    return (
        <div>
            <NavLink to="/profile">Профиль</NavLink>
            <NavLink onClick={logoutUser} to="/auth/login">Выйти</NavLink>
            {user.is_admin && <a href="http://127.0.0.1:8000/admin/" target="_blank">Админка</a>}
        </div>
    )
}

export default OpenBlock;
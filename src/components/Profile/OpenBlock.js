import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const OpenBlock = () => {
    let { logoutUser } = useContext(AuthContext)

    return (
        <div>
            <NavLink to="/profile">Профиль</NavLink>
            <NavLink onClick={logoutUser} to="/auth/login">Выйти</NavLink>
        </div>
    )
}

export default OpenBlock;
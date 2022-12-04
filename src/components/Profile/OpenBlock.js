import React from "react";
import { NavLink } from "react-router-dom";

const OpenBlock = () => {
    return(
        <div>
            <NavLink to="/profile">Профиль</NavLink>
            <NavLink to="/auth/login">Выйти</NavLink>
        </div>
    )
}

export default OpenBlock;
import React from "react";
import { NavLink } from "react-router-dom";

const Header= () => {
    return(
        <div className="header">
            ЗДЕСЬ БУДЕТ HEADER
            <NavLink to="/profile" >О себе</NavLink>
        </div>
    )
}

export default Header;
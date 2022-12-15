import React, { useContext } from "react";
import { NavLink, Navigate } from "react-router-dom";
import ProfileHeader from "./Profile/ProfileHeader";
import ProfileHeaderContainer from "./Profile/ProfileHeaderContainer";
import AuthContext from "../context/AuthContext";

const Header = () => {
    const disNone = {
        display: 'none'
    }
    let { user } = useContext(AuthContext)
    return (
        user ?
            <div className="header">
                {/* <NavLink to="/profile" >О себе</NavLink> */}
                <ProfileHeaderContainer />
            </div>
            : <div style={disNone}></div>
    )
}

export default Header;
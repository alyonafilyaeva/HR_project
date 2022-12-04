import React from "react";
import { NavLink } from "react-router-dom";
import ProfileHeader from "./Profile/ProfileHeader";
import ProfileHeaderContainer from "./Profile/ProfileHeaderContainer";

const Header= () => {
    return(
        <div className="header">
            ЗДЕСЬ БУДЕТ HEADER
            {/* <NavLink to="/profile" >О себе</NavLink> */}
            <ProfileHeaderContainer />
        </div>
    )
}

export default Header;
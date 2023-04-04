import React, { useContext, useState } from "react";
import ProfileHeaderContainer from "./Profile/ProfileHeaderContainer";
import AuthContext from "../context/AuthContext";



const Header = (props) => {
    const disNone = {
        display: 'none'
    }
    let { user } = useContext(AuthContext)

    let sidebarHandler = () => {
        props.ChangeSidebar(true)
    }

    return (
        user ?
        <div className="header-container">
            <div className="header">
                <div className="menu_close" onClick={sidebarHandler}></div>
                <div className="profile-header"><ProfileHeaderContainer /></div>
                
            </div>
        </div>
            
            : <div style={disNone}></div>
    )
}

export default Header;
import React, { Component, useContext, useLayoutEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import "../Styles/app.css"
import logo from '../imgs/logo.svg'
import AuthContext from "../context/AuthContext";

const Sidebar = (props) => {
    const disNone = {
        display: 'none'
    }
    
    let { user } = useContext(AuthContext)

    let sidebarHandler = () => {
        props.ChangeSidebar(false)
    } 

    let open = props.isOpen
    
    return (
        user && open ?
            <div className="sidebar">
                <div onClick={sidebarHandler} className="menu_open"></div>
                <p className="role">{user.is_header_dep ? 'ГЛАВА ДЕПАРТАМЕНТА' : 'СОТРУДНИК'}</p>
                <p>{user.full_name}</p>
                <ul>
                    <div className="sidebar_link">
                        <div className='vacansies_icon'></div>
                        <li><NavLink to="/vacansies" onClick={sidebarHandler} >Вакансии </NavLink></li>
                    </div>
                    <div className="sidebar_link">
                        <div className='resumes_icon'></div>
                        <li><NavLink to="/resumes" onClick={sidebarHandler} >Резюме </NavLink></li>
                    </div>
                    <div className="sidebar_link">
                        <div className='requests_icon'></div>
                        <li><NavLink to="/request" onClick={sidebarHandler} >Мои отклики </NavLink></li>
                    </div>
                    <div className="sidebar_link">
                        <div className='favourite_icon'></div>
                        <li><NavLink to="/favourite" onClick={sidebarHandler} >Избранное </NavLink></li>
                    </div>
                    <div className="sidebar_link">
                        <div className='company_icon'></div>
                        <li><NavLink to="/company" onClick={sidebarHandler} >Компания </NavLink></li>
                    </div>
                    <div className="sidebar_link">
                        <div className='support_icon'></div>
                        <li><NavLink to="/support" onClick={sidebarHandler} >Техподдержка </NavLink></li>
                    </div>
                </ul>
                <img src={logo} className='logo_sidebar' />
            </div>
            : <div style={disNone}></div>

    )
}

export default Sidebar;
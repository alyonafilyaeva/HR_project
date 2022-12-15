import React, { Component, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import "../Styles/app.css"
import AuthContext from "../context/AuthContext";

const Sidebar = (props) => {
    const disNone = {
        display: 'none'
    }
    let { user } = useContext(AuthContext)
    return (
        user ?
            <div className="sidebar">
                <ul>
                    <li><NavLink to="/vacansies">Вакансии </NavLink></li>
                    <li><NavLink to="/resumes">Резюме </NavLink></li>
                    <li><NavLink to="/request">Мои заявки </NavLink></li>
                </ul>
            </div>
            : <div style={disNone}></div>

    )
}

export default Sidebar;
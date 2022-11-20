import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./Styles/app.css"




const Sidebar = (props) => {
        return (
            <div className="sidebar">
                    <ul>
                        <li><NavLink  to="/vacansies">Вакансии </NavLink></li>
                        <li><NavLink  to="/resumes">Резюме </NavLink></li>
                        <li><NavLink  to="/request">Мои заявки </NavLink></li>
                    </ul>
            </div>
        )
}

export default Sidebar;
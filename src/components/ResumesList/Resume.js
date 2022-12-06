import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Resume = (props) => {
    let path = `/resume/${props.resume.id}`
        return(
            <NavLink to={path} state={props.resume} >
            <div className="vacansie">
                <div className="vacansie-item">
                    <div className="vacansie-top">
                        <h2>{props.resume.user.full_name}</h2>
                        <p className="blur">{props.resume.data_updated}</p>
                    </div>
                    <p className="blur">{props.resume.salary}</p>
                    <p className="blur">Опыт работы: {props.resume.exp_work}</p>
                    <section>{props.resume.about_me}</section>
                </div>
                <div className="vacansie-right">
                    <p>Департамент</p>
                    <p className="blur">{props.resume.department}</p>
                    <p>Глава департамента</p>
                    <p className="blur">{props.resume.headDepartment}</p>
                </div>
            </div>
            </NavLink>
        )
}

export default Resume;
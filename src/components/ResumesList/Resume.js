import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import LinesEllipsis from 'react-lines-ellipsis';
import SkillsContainer from "../skills/SkillsContainer";

const Resume = (props) => {
    console.log(props)
    let path = `/resume/${props.resume.id}`
    let skillsOfVacansie = props.resume.skills
        return(
            <NavLink to={path} state={props.resume} >
            <div className="vacansie">
                <div className="resume-item">
                    <div className="vacansie-top">
                        <h2>{props.resume.user.full_name}</h2>
                        <p className="blur">{props.resume.data_updated}</p>
                    </div>
                    <p className="blur">{props.resume.salary} руб</p>
                    <p className="blur">Опыт работы: {props.resume.exp_work}</p>
                    <p><SkillsContainer realskills={skillsOfVacansie} /></p>
                    <LinesEllipsis text={props.resume.about_me} maxLine={3}/>
                </div>
                {/* <div className="vacansie-right">
                    <p>Департамент</p>
                    <p className="blur">{props.resume.department}</p>
                    <p>Глава департамента</p>
                    <p className="blur">{props.resume.user.full_name}</p>
                </div> */}
            </div>
            </NavLink>
        )
}

export default Resume;
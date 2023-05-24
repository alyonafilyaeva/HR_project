import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SkillsContainer from "../skills/SkillsContainer";
import LinesEllipsis from "react-lines-ellipsis";

const RequestResume = (props) => {
    console.log(props)
    let skillsOfVacansie = props.request.item.skills
    let path = `/resume/${props.request.item.id}`
        return(
            <div className="vacansie row">
            <NavLink  to={path} state={props.request.item} >
            <div  className="resume-item" >
                <div className="vacansie-top">
                    <h2>{props.request.item.user.full_name}</h2>
                    <p className="blur">{props.request.item.data_updated}</p>
                </div>
                <p>{props.request.item.salary} руб</p>
                <p>Опыт работы: {props.request.item.exp_work}</p>
                <p><SkillsContainer realskills={skillsOfVacansie} /></p>
                <LinesEllipsis text={props.request.item.about_me} maxLine={3} className="blur"/>
            </div>
            </NavLink>
        </div>
        )
}

export default RequestResume;
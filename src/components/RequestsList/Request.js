import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SkillsContainer from "../skills/SkillsContainer";
import LinesEllipsis from "react-lines-ellipsis";

const RequestVacansie = (props) => {
    console.log(props)
    let skillsOfVacansie = props.request.item.skills
    let path = `/vacansie/${props.request.item.id}`
        return(
            <div className="vacansie row">
            <NavLink  to={path} state={props.request.item} >
            <div  className="vacansie-item" >
                <div className="vacansie-top">
                    <h2>{props.request.item.title}</h2>
                    <p className="blur">{props.request.item.data_updated}</p>
                </div>
                <p>{props.request.item.salary_from} - {props.request.item.salary_to} руб</p>
                <p>Опыт работы: {props.request.item.exp_work}</p>
                <p><SkillsContainer realskills={skillsOfVacansie} /></p>
                <LinesEllipsis text={props.request.item.description} maxLine={3} className="blur"/>
            </div>
            </NavLink>
            <div className="vacansie-right">
                <p>Департамент</p>
                <p className="blur">{props.request.item.department}</p>
                <p>Глава департамента</p>
                <p className="blur">{props.request.item.user.full_name}</p>
            </div>
        </div>
        )
}

export default RequestVacansie;
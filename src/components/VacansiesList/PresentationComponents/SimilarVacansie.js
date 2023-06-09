import React from "react";
import SkillsContainer from "../../skills/SkillsContainer";
import { NavLink } from "react-router-dom";

const SimilarVacansie = (props) => {
    console.log(props)
    let path = `/vacansie/${props.vacansie.id}`
    let skillsOfVacansie = props.vacansie.skills
    return (
        <div className="similar">
            <NavLink  to={path} state={props.vacansie} >
            <p style={{fontWeight: 600}}>{props.vacansie.title}</p>
            <p style={{fontWeight: 600}}>{props.vacansie.salary_from} - {props.vacansie.salary_to} руб.</p>
            <div><SkillsContainer realskills={skillsOfVacansie} /></div>
            </NavLink>
        </div>
    )
}

export default SimilarVacansie;
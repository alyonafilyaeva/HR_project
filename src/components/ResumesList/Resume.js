import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import LinesEllipsis from 'react-lines-ellipsis';
import SkillsContainer from "../skills/SkillsContainer";

const Resume = (props) => {
    console.log(props)
    let path = `/resume/${props.resume.id}`
    let skillsOfVacansie = props.resume.skills
    function plural(number, titles) {  
        let cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }
    
    var declension = ['год', 'года', 'лет'];
        return(
            <NavLink to={path} state={props.resume} >
            <div className="vacansie">
                <div className="resume-item">
                    <div className="vacansie-top">
                        <h2>{props.resume.user.full_name}</h2>
                        <p className="blur">{props.resume.data_updated}</p>
                    </div>
                    <p className="blur">{props.resume.salary} руб</p>
                    <p className="blur">Опыт работы: {props.resume.exp_work} {plural(props.resume.exp_work, declension)}</p>
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
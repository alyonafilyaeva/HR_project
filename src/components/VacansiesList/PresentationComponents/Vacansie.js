import React from "react";
import { NavLink} from "react-router-dom";
import Skills from "../../skills/Skills";
import SkillsContainer from "../../skills/SkillsContainer";
import LinesEllipsis from 'react-lines-ellipsis'
import favourite from '../../../imgs/favourite.png'

const Vacansie = (props) => {
    let path = `/vacansie/${props.vacansie.id}`
    let skillsOfVacansie = props.vacansie.skills
    
    return (
        <NavLink  to={path} state={props.vacansie} >
        <div className="vacansie row">
            <div  className="vacansie-item col-xl-8" >
                <div className="vacansie-top">
                    <h2>{props.vacansie.title}</h2>
                    <p className="blur">{props.vacansie.data_updated}</p>
                </div>
                <p>{props.vacansie.salary_from} - {props.vacansie.salary_to} руб</p>
                <p>Опыт работы: {props.vacansie.exp_work}</p>
                <p><SkillsContainer realskills={skillsOfVacansie} /></p>
                <LinesEllipsis text={props.vacansie.description} maxLine={3} className="blur"/>
            </div>
            <div className="vacansie-right col-xl-4">
                <p>Департамент</p>
                <p className="blur">{props.vacansie.department}</p>
                <p>Глава департамента</p>
                <p className="blur">{props.vacansie.user.full_name}</p>
                {props.vacansie.status == 1 && <img src={favourite} className="favourite"></img>}
                <p className="blur">{props.vacansie.status == 0 && 'Не опубликовано'}</p>
            </div>
        </div>
        </NavLink>

    )

}

export default Vacansie;
import React from "react";
import { NavLink} from "react-router-dom";

const Vacansie = (props) => {
    let path = `/vacansie/${props.vacansie.id}`
    return (
        <NavLink  to={path} state={props.vacansie} >
            
        <div className="vacansie row">
            <div  className="vacansie-item col-xl-8" >
                <div className="vacansie-top">
                    <h2>{props.vacansie.title}</h2>
                    <p className="blur">{props.vacansie.data_updated}</p>
                </div>
                <p className="blur">{props.vacansie.salary} руб</p>
                <p className="blur">Опыт работы: {props.vacansie.exp_work}</p>
                <p>{props.vacansie.description}</p>
            </div>
            <div className="vacansie-right col-xl-4">
                <p>Департамент</p>
                <p className="blur">{props.vacansie.department}</p>
                <p>Глава департамента</p>
                <p className="blur">{props.vacansie.user.full_name}</p>
                <p className="blur">{props.vacansie.status == 'N_P' && 'Не опубликовано'}</p>
            </div>
        </div>
        </NavLink>

    )

}

export default Vacansie;
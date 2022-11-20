import React, { Component } from "react";
import { Navigate, NavLink, unstable_HistoryRouter } from "react-router-dom";
import ActiveVacansieContainer from "./ActiveVacansieContainer";
import ActiveVacansie from "./ActivVacansie";
import AddVacansie from "./AddVacansiesComponents/AddVacansie";
import AddVacansieContainer from "./AddVacansiesComponents/AddVacansieContainer";

const Vacansie = (props) => {
    console.log(props)
    const onClick = () => {
        <ActiveVacansieContainer vacansie="propsss"/>
    }
    let vacansie = props.vacansie
        return(
            <NavLink className="vacansie" to={"/vacansie/" /* + props.vacansie.id */} vacansie = {vacansie}
            /* to={{pathname:"/active_vacansie", vacansie:{vacansie}}} */>
                <div className="vacansie-item" >
                    <div className="vacansie-top">
                        <h2>{props.vacansie.title}</h2>
                        <p className="blur">{props.vacansie.data_updated}</p>
                    </div>
                    <p className="blur">{props.vacansie.salary}</p>
                    <p className="blur">Опыт работы: {props.vacansie.exp_work}</p>
                    <section>{props.vacansie.description}</section>
                    <button onClick={() => {onClick()}}>Подробнее</button>
                </div>
                <div className="vacansie-right">
                    <p>Департамент</p>
                    <p className="blur">{props.vacansie.department}</p>
                    <p>Глава департамента</p>
                    <p className="blur">{props.vacansie.headDepartment}</p>
                    <p className="blur">{props.vacansie.status}</p>
                </div>
            </NavLink>
        )
}

export default Vacansie;
import React, { Component } from "react";
import { Navigate, NavLink, unstable_HistoryRouter } from "react-router-dom";
import Resumes from "../Resumes";
import ActiveVacansie from "./ActivVacansie";
import AddVacansie from "./AddVacansiesComponents/AddVacansie";
import AddVacansieContainer from "./AddVacansiesComponents/AddVacansieContainer";

const Vacansie = (props) => {
    let path = `/vacansie/${props.vacansie.id}`
    console.log(props.vacansie.id)
    return (
        <NavLink className="vacansie" to={path} state={props.vacansie} >
        <div className="vacansie">
            <div  className="vacansie-item" >
                <div className="vacansie-top">
                    <h2>{props.vacansie.title}</h2>
                    <p className="blur">{props.vacansie.data_updated}</p>
                </div>
                <p className="blur">{props.vacansie.salary}</p>
                <p className="blur">Опыт работы: {props.vacansie.exp_work}</p>
                <p>{props.vacansie.description}</p>
            </div>
            <div className="vacansie-right">
                <p>Департамент</p>
                <p className="blur">{props.vacansie.department}</p>
                <p>Глава департамента</p>
                <p className="blur">{props.vacansie.headDepartment}</p>
                {/* <p className="blur">{props.vacansie.status}</p> */}
            </div>
        </div>
        </NavLink>

    )

}

export default Vacansie;
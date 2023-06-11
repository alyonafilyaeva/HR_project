import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useLayoutEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useState } from "react";

const ActiveDepartment = (props) => {
    const location = useLocation()
    const navigate = useNavigate();
    let { authToken } = useContext(AuthContext)
    console.log(location.state)
    let [vacancies, setVacancies] = useState([])
    let pathDepartment = `http://127.0.0.1:8000/api/vacancies/?department=${location.state.id}`
    let pathVacancy = `/vacansie/${location.state.id}`

    useLayoutEffect(() => {
        axios
            .get(pathDepartment,
                {
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${String(authToken.access)}`
                    }
                })
            .then(response => {
                console.log(response)
                setVacancies(response.data)
            })
    }, [])

    const vacansieElements = vacancies.map((vacansie) =>
        <NavLink to={`/vacansie/${vacansie.id}`} state={vacansie} className="dep-vacancies">{vacansie.title}</NavLink>
    )

    return (
        <div className="container">
            {/* <NavLink onClick={() => navigate(-1)} className='back'>Назад</NavLink> */}
            <a onClick={() => navigate(-1)} className='back'>Назад</a>
            <div className="active_block_vacansie">
                <div className="name_vacancie">
                    <h2 className="active_block_item">{location.state.name}</h2>
                </div>
                <div className="active_block_item">
                    <p className="item_title">Число сотрудников: </p>
                    <p>{location.state.count}</p>
                </div>
                <div>
                    <p className="active_block_item">{location.state.description}</p>
                </div>
                <div className="">
                    <p className="item_title">Вакансии: </p>
                    <div className="vac-list">{vacansieElements}</div>
                </div>
            </div>
        </div>
    )
}

export default ActiveDepartment;
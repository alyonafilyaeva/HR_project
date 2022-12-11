import React, { useContext, useLayoutEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import axios from "axios"
const ActiveVacansie = (props) => {
    const location = useLocation();
    console.log(props.editedVacansie)
    let path = `/vacansie/edit/${location.state.id}`
    let { authToken, user } = useContext(AuthContext)

    useLayoutEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/vacancies/${location.state.id}`, {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }
        }).then(response => {
            props.EditedVacansie(response.data)
            console.log(response.data)
        })
    }, [])
    console.log(props.editedVacansie)
    return (
        <div>
            <div>
                <NavLink to="/vacansies">Назад</NavLink>
                {(props.editedVacansie.user.id == user.id) && <NavLink to={path} state={location.state}>Редактировать</NavLink>}
                <div >
                    <h2>{props.editedVacansie.title}</h2>
                    <p className="blur">{props.editedVacansie.department}</p>
                </div>
                <p className="blur">{props.editedVacansie.salary}</p>
                <p className="blur">Опыт работы: {props.editedVacansie.exp_work}</p>
                <section>{props.editedVacansie.description}</section>
                {(props.editedVacansie.user.id != user.id) && <button>Отправить заявку</button>}
                {(props.editedVacansie.user.id == user.id) && <button>Снять с публикации</button>}
            </div>
        </div>
    )
}

export default ActiveVacansie;

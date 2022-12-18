import axios from "axios";
import React, { useContext, useLayoutEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const ActiveVacansie = (props) => {
    const location = useLocation();
    let { user, authToken } = useContext(AuthContext)
    let nav = useNavigate()

    let path = `/vacansie/edit/${location.state.id}`

    let notPublish = () => {
        let data = location.state
        data.status = 'N_P'
        axios({
            method: "put",
            url: `http://127.0.0.1:8000/api/vacancies/${location.state.id}/`,
            headers: {
                Authorization: `Bearer ${String(authToken.access)}`,
            },
            params: {
                status: 'my'
            },
            data: data
        })
            .then(response => {
                console.log(response.data)
            })
    }
    let publish = () => {
        let data = location.state
        data.status = 'Y_P'
        axios({
            method: "put",
            url: `http://127.0.0.1:8000/api/vacancies/${location.state.id}/`,
            headers: {
                Authorization: `Bearer ${String(authToken.access)}`,
            },
            params: {
                status: 'my'
            },
            data: data
        })
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    nav('/vacansies')
                }
            })
    }
    let sendRequest = () => {
        let data = {
            title: location.state.title,
            status: '1',
            destination: location.state.user.id
        }
        axios({
            method: "post",
            url: `http://127.0.0.1:8000/api/requests/`,
            headers: {
                Authorization: `Bearer ${String(authToken.access)}`,
            },
            data: data
        })
            .then(response => console.log(response.data))
    }

    return (
        <div >
            <NavLink to="/vacansies" className='back'>&#x2190; Назад</NavLink>
            {(location.state.user.id == user.id && location.state.status !== 'Y_P') && <NavLink to={path} state={location.state} className="grey edit">Редактировать</NavLink>}
            <div className="active_block">
                <h2 className="active_block_item">{location.state.title}</h2>
                <p className="active_block_item">Департамент: {location.state.department}</p>
                <p className="active_block_item">Минимальная зарплата: {location.state.salary} руб</p>
                <p className="active_block_item">Стаж работы: {location.state.exp_work}</p>
                <section className="active_block_item">{location.state.description}</section>
            </div>
            {(location.state.user.id !== user.id) && <button onClick={sendRequest} className="btn orange">Отправить заявку</button>}
            {(location.state.user.id === user.id && location.state.status !== 'Y_P') && <button className="btn orange" onClick={publish}>Опубликовать</button>}
            {(location.state.user.id === user.id && location.state.status === 'Y_P') && <button className="btn orange" onClick={notPublish}>Снять с публикации</button>}
        </div>
    )

}

export default ActiveVacansie;

import axios from "axios";
import React, { useContext, useLayoutEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import SkillsContainer from "../../skills/SkillsContainer";
import SuccessAlert from "../../Alerts/SuccessAlert";
import WarningAlert from "../../Alerts/WarningAlert";
import InfoAlert from "../../Alerts/InfoAlert";

const ActiveVacansie = (props) => {
    const location = useLocation();
    let { user, authToken } = useContext(AuthContext)
    let nav = useNavigate()
    let skillsOfVacansie = location.state.skills
    let employmentList = props.employment
    let scheduleList = []
    for (let i = 0; i < props.schedule.length; i++) {
        for (let j = 0; j < location.state.schedule.length; j++) {
            if (props.schedule[i].value == location.state.schedule[j]) {
                scheduleList.push(props.schedule[i].label)
            }
        }
    }
console.log(props)
    let path = `/vacansie/edit/${location.state.id}`
    let [response, setResponse] = useState(0)
    console.log(props)
    setTimeout(() => {
        setResponse(0);
      }, 5000);

    let notPublish = () => {
        let data = location.state
        data.status = 0
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
    let publish = () => {
        let data = location.state
        data.status = 1
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
        setResponse('info')
        let data = {
            title: location.state.title,
            status: '1',
            destination: location.state.user.id,
            id: location.state.id
        }
        axios({
            method: "post",
            url: `http://127.0.0.1:8000/api/requests/`,
            headers: {
                Authorization: `Bearer ${String(authToken.access)}`,
            },
            data: data
        })
            .then(response => {
                setResponse(response.status)
                console.log(response)
                if (response.status === 200) {
                    console.log(response.data)

                }
                if (response.data.err) {
                    setResponse('err')
                }
            })
            .catch(error => {
                setResponse(response.status)
                console.log(error.response)
            })
    }

    return (
        <div className="container">
            {(location.state.user.id == user.id && location.state.status !== 1) &&
                <div>
                    <div className="steps">
                        <h3>Черновик вакансии</h3>
                        <p><span>Шаг 2</span> из 3</p>
                    </div>
                    <div className="bar_2"></div>
                </div>
            }
            {(location.state.user.id == user.id && location.state.status === 1) &&
                <div>
                    <div className="steps">
                        <h3>Вакансия опубликована</h3>
                        <p><span>Шаг 3</span> из 3</p>
                    </div>
                    <div className="bar_3"></div>
                </div>
            }
            <NavLink to="/vacansies" className='back'>Назад</NavLink>
            {/* {response == 200 && <SuccessAlert />}
            {response == 'err' && <WarningAlert />}
            {response == 'info' && <InfoAlert />} */}
            {(location.state.user.id == user.id && location.state.status !== 1) && <NavLink to={path} state={location.state} className="grey edit_vacansie">Редактировать</NavLink>}
            <div className="active_block_vacansie">
                <h2 className="active_block_item">{location.state.title}</h2>
                <div className="active_block_item">
                    <p className="item_title">Департамент: </p>
                    <p>{location.state.department}</p>
                </div>
                <div className="active_block_item">
                    <p className="item_title">Зарплата: </p>
                    <p>{location.state.salary_from} - {location.state.salary_to} руб.</p>
                </div>
                <div className="active_block_item">
                    <p className="item_title">Стаж работы: </p>
                    <p>{location.state.exp_work}</p>
                </div>
                <div className="active_block_item">
                    <p className="item_title">Компетенции:</p>
                    <p><SkillsContainer realskills={skillsOfVacansie} /></p>
                </div>
                <div className="active_block_item">
                    <p className="item_title">График работы: </p>
                    <p>{scheduleList}</p>
                </div>
                <div className="active_block_item">
                    <p className="item_title">Занятость:</p>
                    <p>{employmentList[location.state.employment].label }</p>
                </div>
                <div>
                    <p className="active_block_item">{location.state.description}</p>
                </div>
            </div>
            {(location.state.user.id !== user.id) &&
                <div className="send_request_vacansie">
                    <button onClick={sendRequest} className="btn_vacansie orange">Отправить заявку</button>
                    <p className="send_alert_vacansie">Сотруднику будет отправлено письмо, что вы заинтересовались его вакансией. </p>
                </div>
            }
            {(location.state.user.id === user.id && location.state.status !== 1) && <button className="btn_vacansie orange" onClick={publish}>Опубликовать вакансию</button>}
            {(location.state.user.id === user.id && location.state.status === 1) && <button className="btn_vacansie orange" onClick={notPublish}>Снять с публикации</button>}
        </div>
    )

}

export default ActiveVacansie;
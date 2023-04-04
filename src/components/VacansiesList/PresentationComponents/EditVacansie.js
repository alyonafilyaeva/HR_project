import React, { useLayoutEffect, useState } from "react";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import "../../../Styles/app.css"
import axios from "axios"
import AuthContext from "../../../context/AuthContext";
import { useContext } from "react";

const EditVacansie = (props) => {
    const location = useLocation();
    let [title, setTitle] = useState('')
    let [text, setText] = useState('')
    let [salary, setSalary] = useState('')
    let [exp, setExp] = useState('')
    let { authToken } = useContext(AuthContext)
    let path = `/vacansie/${location.state.id}`
    let nav = useNavigate()

    useLayoutEffect(() => {
        axios({
            method: "get",
            url: `http://127.0.0.1:8000/api/vacancies/${location.state.id}`,
            headers: {
                Authorization: `Bearer ${String(authToken.access)}`,
            },
            params: {
                status: 'my'
            }
        })
            .then(response => {
                setExp(response.data.exp_work)
                setTitle(response.data.title)
                setText(response.data.description)
                setSalary(response.data.salary)
            })
    }, [])

    let onEditVac = (e) => {
        e.preventDefault()
        axios({
            method: "put",
            url: `http://127.0.0.1:8000/api/vacancies/${location.state.id}/`,
            headers: {
                Authorization: `Bearer ${String(authToken.access)}`,
            },
            params: {
                status: 'my'
            },
            data: {
                "title": title,
                "description": text,
                "exp_work": exp,
                "salary": salary,
                "status": 'N_P'
            }
        })
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    nav(`/vacansie/${response.data.id}`, {
                        state: response.data
                    })
                }
            })
            .catch(error => console.log(error.response))
    }

    let onVacChange = (e) => {
        if (e.target.name === 'salary') {
            setSalary(Number(e.target.value))
        } else if (e.target.name === 'exp') {
            setExp(Number(e.target.value))
        } else if (e.target.name === 'title') {
            setTitle(e.target.value)
        }
        else if (e.target.name === 'text') {
            setText(e.target.value)
        }
    }

    return (
        <div className="container container-add-vacancie">
            <div className="steps">
                <h3>Черновик вакансии</h3>
                <p><span>Шаг 2</span> из 3</p>
            </div>
            <div className="bar_2"></div>
            <NavLink to={path} state={location.state} className="back">Назад</NavLink>
            <div className="form form_vacansie">
                <form>
                    <div className="form_item">
                        <p className="name-form">Название вакансии:</p>
                        <input onChange={onVacChange} className="input_title_vac" type='text' name='title' value={title} />
                    </div>
                    <div className="form_item">
                        <p className="name-form">Департамент:</p>
                        <p className="input_dep_vac">{location.state.department}</p>
                    </div>
                    <div className="form_item">
                        <p className="name-form">Минимальная зарплата:</p>
                        
                        <div className="salary-block">
                                <p>От:</p>
                                <div className="salary-placeholder">
                                    <input onChange={onVacChange} className="input_salary_vac" type='number' name='salary' value={salary} placeholder="0"/>
                                    <p>Минимальная зарплата</p>
                                </div>
                                <p>До:</p>
                                <div className="salary-placeholder">
                                    <input onChange={onVacChange} className="input_salary_vac" type='number' name='salary' value={salary} placeholder="0"/>
                                    <p>Максимальная зарплата</p>
                                </div>
                            </div>
                    </div>
                    <div className="form_item">
                        <p className="name-form">Стаж работы:</p>
                        <input onChange={onVacChange} className="input_exp_vac" type='number' name='exp' value={exp} />
                    </div>
                    <div className="form_item">
                        <p className="name-form">Описание вакансии:</p>
                        <textarea onChange={onVacChange} className="input_text_vac" type='text' name="text" value={text} rows='10'/>
                    </div>
                </form>
                
            </div>
            <NavLink to={path} state={location.state} onClick={onEditVac} className="orange save_vac">Сохранить </NavLink>
        </div>
    )
}

export default EditVacansie;
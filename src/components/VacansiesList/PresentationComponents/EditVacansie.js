import React, { useLayoutEffect, useState } from "react";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import "../../../Styles/app.css"
import axios from "axios"
import AuthContext from "../../../context/AuthContext";
import { useContext } from "react";
import { switchClasses } from "@mui/material";

const EditVacansie = (props) => {
    const location = useLocation();
    let [title, setTitle] = useState('')
    let [text, setText] = useState('')
    let [salaryFrom, setSalaryFrom] = useState('')
    let [salaryTo, setSalaryTo] = useState('')
    let [exp, setExp] = useState('')
    let [skills, setSkills] = useState([])
    let { authToken } = useContext(AuthContext)
    let path = `/vacansie/${location.state.id}`
    let nav = useNavigate()
    let [schedule0, setSchedule0] = React.useState(false)
    let [schedule1, setSchedule1] = React.useState(false)
    let [schedule2, setSchedule2] = React.useState(false)
    let [schedule3, setSchedule3] = React.useState(false)
    let [employment0, setEmployment0] = React.useState(false)
    let [employment1, setEmployment1] = React.useState(false)
    let [employment2, setEmployment2] = React.useState(false)
    let [employment3, setEmployment3] = React.useState(false)
    let newSchedule = []
    /* let newSkills = []
    newSkills.push(skills.current.value) */
    console.log(skills)
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
                console.log(response.data)
                setExp(response.data.exp_work)
                setTitle(response.data.title)
                setText(response.data.description)
                setSalaryFrom(response.data.salary_from)
                setSalaryTo(response.data.salary_to)
                setSkills(response.data.skills)
            })
    }, [])

    useLayoutEffect(() => {
        for (let i = 0; i < location.state.schedule.length; i++) {
            switch (i) {
                case 0:
                    setSchedule0(true)
                    break;
                case 1:
                    setSchedule1(true)
                    break;
                case 2:
                    setSchedule2(true)
                    break;
                case 3:
                    setSchedule3(true)
                    break;
                default:
                    break;
            }
        }

        switch (location.state.employment) {
            case 0:
                setEmployment0(true)
                break;
            case 1:
                setEmployment1(true)
                break;
            case 2:
                setEmployment2(true)
                break;
            case 3:
                setEmployment3(true)
                break;
            default:
                break;
        }
    })

    let onEditVac = (e) => {
        e.preventDefault()
        let newEmployment
        if (schedule0) {
            newSchedule.push(0)
        }
        if (schedule1) {
            newSchedule.push(1)
        }
        if (schedule2) {
            newSchedule.push(2)
        }
        if (schedule3) {
            newSchedule.push(3)
        }
        if (employment0) {
            newEmployment = 0
        }
        if (employment1) {
            newEmployment = 1
        }
        if (employment2) {
            newEmployment = 2
        }
        if (employment3) {
            newEmployment = 3
        }
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
                "salary_from": salaryFrom,
                "salary_to": salaryTo,
                /* "skills": skills, */
                "status": 0,
                "schedule": newSchedule,
                "employment": newEmployment
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
        if (e.target.name === 'salary_from') {
            setSalaryFrom(Number(e.target.value))
        } else if (e.target.name === 'salary_to') {
            setSalaryTo(Number(e.target.value))
        } else if (e.target.name === 'exp') {
            setExp(Number(e.target.value))
        } else if (e.target.name === 'title') {
            setTitle(e.target.value)
        }
        else if (e.target.name === 'text') {
            setText(e.target.value)
        }
        else if (e.target.name === 'skills') {
            setSkills(skills => skills.push(e.target.value))
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
                                <input onChange={onVacChange} className="input_salary_vac" type='number' name='salary_from' value={salaryFrom} placeholder="0" />
                                <p>Минимальная зарплата</p>
                            </div>
                            <p>До:</p>
                            <div className="salary-placeholder">
                                <input onChange={onVacChange} className="input_salary_vac" type='number' name='salary_to' value={salaryTo} placeholder="0" />
                                <p>Максимальная зарплата</p>
                            </div>
                        </div>
                    </div>
                    <div className="form_item">
                        <p className="name-form">Стаж работы:</p>
                        <input onChange={onVacChange} className="input_exp_vac" type='number' name='exp' value={exp} />
                    </div>
                    <div className="form_item">
                        <p className="name-form">Компетенции: </p>
                        <select className='parametr ' placeholder="Компетенции" name='skills' value={skills} onChange={onVacChange}>
                            <option value=''></option>
                            {props.skills.skills.map(skill =>
                                <option value={skill.id}>{skill.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="form_item">
                        <p className="name-form">График работы:</p>
                        <div className="filter-item" /* onChange={onChangeSchedule} */>
                            <div className='checkbox-item'>
                                <input type='checkbox' value={0} onClick={() => setSchedule0(!schedule0)} name="schedule-0" checked={schedule0}></input>
                                <label>Гибкий график</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type='checkbox' value={1} onClick={() => setSchedule1(!schedule1)} name="schedule-1" checked={schedule1}></input>
                                <label>Удаленная работа</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type='checkbox' value={2} onClick={() => setSchedule2(!schedule2)} name="schedule-2" checked={schedule2}></input>
                                <label>Сменный график</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type='checkbox' value={3} onClick={() => setSchedule3(!schedule3)} name="schedule-3" checked={schedule3}></input>
                                <label>Полный день</label>
                            </div>
                        </div>

                    </div>
                    <div className="form_item">
                        <p className="name-form">Занятость:</p>
                        <div className="filter-item">
                            <div className='checkbox-item'>
                                <input type='checkbox' onClick={() => setEmployment0(!employment0)} checked={employment0}></input>
                                <label>Проектная работа</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type='checkbox' onClick={() => setEmployment1(!employment1)} checked={employment1}></input>
                                <label>Стажировка</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type='checkbox' onClick={() => setEmployment2(!employment2)} checked={employment2}></input>
                                <label>Частичная занятость</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type='checkbox' onClick={() => setEmployment3(!employment3)} checked={employment3}></input>
                                <label>Полная занятость</label>
                            </div>
                        </div>

                    </div>
                    <div className="form_item">
                        <p className="name-form">Описание вакансии:</p>
                        <textarea onChange={onVacChange} className="input_text_vac" type='text' name="text" value={text} rows='10' />
                    </div>
                </form>

            </div>
            <NavLink to={path} state={location.state} onClick={onEditVac} className="orange save_vac">Сохранить </NavLink>
        </div>
    )
}

export default EditVacansie;
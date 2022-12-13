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
        <div className="container">
            <h3>Редактировать вакансию</h3>
            <div className="form form_vacansie">
                <form>
                    <p>Название вакансии:</p>
                    <input onChange={onVacChange} type='text' name='title' value={title} />
                    <p>департамент</p>
                    <p>{location.state.department}</p>
                    <p>Мин зарплата</p>
                    <input onChange={onVacChange} type='number' name='salary' value={salary} />
                    <p>Стаж работы</p>
                    <input onChange={onVacChange} type='number' name='exp' value={exp} />

                    <p>Описание вакансии</p>
                    <textarea onChange={onVacChange} type='text' name="text" value={text} />

                    <NavLink to={path} state={location.state} onClick={onEditVac} >Сохранить</NavLink>
                </form>
            </div>

        </div>
    )
}

export default EditVacansie;
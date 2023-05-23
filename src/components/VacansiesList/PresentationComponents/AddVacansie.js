import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../../Styles/app.css"
import axios from "axios"
import AuthContext from "../../../context/AuthContext";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* import "react-toastify/dist/ReactToastify.minimal.css"; */
/* import { ToastContainer, toast } from 'react-custom-alert'; */
import 'react-custom-alert/dist/index.css';
import ErrorAlert from "../../Alerts/ErrorAlert";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import Select from "react-select";


const AddVacansie = (props) => {
    console.log(props)
    /* const [status, setStatus] = React.useState('0') */
    let title = React.createRef()
    let text = React.createRef()
    let salary_from = React.createRef()
    let salary_to = React.createRef()
    let exp = React.createRef()
    let skills = React.createRef()
    let schedule = React.createRef()
    let { authToken, user } = useContext(AuthContext)
    const nav = useNavigate()
    let [response, setResponse] = useState(200)
    /* setTimeout(function () {
        document.getElementById('alert').style.display = 'none !important';
    }, 50); */
    const editorState = EditorState.createEmpty();
    const editorStateWithoutUndo = EditorState.set(editorState, {
        allowUndo: false,
    });
    let newSchedule = []
    
    let [schedule0, setSchedule0] = React.useState(false)
    let [schedule1, setSchedule1] = React.useState(false)
    let [schedule2, setSchedule2] = React.useState(false)
    let [schedule3, setSchedule3] = React.useState(false)
    let [employment0, setEmployment0] = React.useState(false)
    let [employment1, setEmployment1] = React.useState(false)
    let [employment2, setEmployment2] = React.useState(false)
    let [employment3, setEmployment3] = React.useState(false)

    let optionList = props.skills.skills
    for (var i = 0; i < optionList.length; i++) {
        optionList[i].value = optionList[i]['id'];
        optionList[i].label = optionList[i]['name'];
        /* delete optionList[i].name;  */
    }
    let [skill, setSkill] = useState('')
    let [nameSkill, setNameSkill] = useState('')

    let [newSkills, setNewSkills] = React.useState([])
    function skillsChange(data) {
        setNameSkill(data)
        console.log(data)
        setSkill(data.value)
        for (let i = 0; i < optionList.length; i++) {
            console.log(data[i].value)
            data[i].value =! undefined && setNewSkills(newSkills => [...newSkills, data[i].value])
        }
    }
    console.log(nameSkill)

    let onAddVac = (e) => {
        console.log(newSkills)
        e.preventDefault()
        props.AddVacansie(user)
        /* let newSkills = [] */
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

        /* newSkills.push(skill) */
        debugger
        axios
            .post("http://127.0.0.1:8000/api/vacancies/",
                {
                    "title": title.current.value,
                    "description": text.current.value,
                    "exp_work": exp.current.value,
                    "salary_from": salary_from.current.value,
                    "salary_to": salary_to.current.value,
                    "user": user,
                    "status": 0,
                    "skills": newSkills,
                    "schedule": newSchedule,
                    "employment": newEmployment
                },
                {
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${String(authToken.access)}`
                    }
                })
            .then(response => {
                console.log(response.status)
                setResponse(response.status)
                if (response.status === 201) {
                    nav(`/vacansie/${response.data.id}`, {
                        state: response.data
                    })
                }

                props.EditedVacansie(response.data)
            })
            .catch(error => {
                setResponse(response.status)
                console.log(error.response)
            })
        props.ChangeVacansie('', '', '', '')

    }

    let onVacChange = () => {
        let titleVac = title.current.value;
        let textVac = text.current.value;
        let salaryFromVac = salary_from.current.value;
        let salaryToVac = salary_to.current.value;
        let expVac = exp.current.value;
        props.ChangeVacansie(titleVac, salaryFromVac, salaryToVac, expVac, textVac)
    }

    /* let onChangeSchedule = () => {
        debugger
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
        console.log(schedule0)
        console.log(newSchedule)
    } */
    let path = `/vacansie/edit/${props.editedVacansie.id}`
    return (
        <div className="container ">
            <div className="steps">
                <h3>Создание вакансии</h3>
                <p><span>Шаг 1</span> из 3</p>
            </div>
            <div className="bar_1"></div>
            <NavLink to="/vacansies" className="back">Назад</NavLink>
            <ToastContainer />
            {/* <Editor
  editorState={editorState}
  onEditorStateChange={this.onEditorStateChange}
/>; */}
            {response != 200 && <ErrorAlert id='alert' />}
            <div className="form form_vacansie">
                <form>
                    <div className="form_item">
                        <p className="name-form">Название вакансии: </p>
                        <input onChange={onVacChange} className="input_title_vac" type='text' name='title' ref={title} value={props.newVacTitle} placeholder="Backend-разработчик" />
                    </div>
                    <div className="form_item">
                        <p className="name-form">Департамент:</p>
                        <p className="input_dep_vac">{user.department}</p>
                    </div>

                    <div className="form_item">
                        <p className="name-form">Минимальная зарплата: </p>
                        <div className="salary-block">
                            <p>От:</p>
                            <div className="salary-placeholder">
                                <input onChange={onVacChange} className="input_salary_vac" type='number' name='salary_from' ref={salary_from} value={props.newVacSaleryFrom} placeholder="0" />
                                <p>Минимальная зарплата</p>
                            </div>
                            <p>До:</p>
                            <div className="salary-placeholder">
                                <input onChange={onVacChange} className="input_salary_vac" type='number' name='salary_to' ref={salary_to} value={props.newVacSaleryTo} placeholder="0" />
                                <p>Максимальная зарплата</p>
                            </div>
                        </div>

                    </div>
                    <div className="form_item">
                        <p className="name-form">Стаж работы: </p>
                        <input onChange={onVacChange} className="input_exp_vac" type='number' name='salary' ref={exp} value={props.newVacExp} placeholder="0" />
                    </div>
                    <div className="form_item">
                        <p className="name-form">Компетенции: </p>
                        {/* <select className='parametr ' placeholder="Компетенции" name='skills' ref={skills}>
                            <option value=''></option>
                            {props.skills.skills.map(skill =>
                                <option value={skill.id}>{skill.name}</option>
                            )}
                        </select> */}
                        <Select
                            name='skills'
                            closeMenuOnSelect={false}
                            isMulti
                            options={optionList}
                            ref={skills}
                            placeholder="Найти компетенцию"
                            value={nameSkill}
                            onChange={skillsChange}
                            isSearchable={true} />
                        {/* <p>Нет подходящей компетенции</p>
                        <p className="">Для добавления нового тега в компетенции обратитесь в <NavLink to='/support'>Техподдержку</NavLink></p> */}
                    </div>
                    <div className="form_item">
                        <p className="name-form">График работы:</p>
                        <div className="filter-item" /* onChange={onChangeSchedule} */>
                            <div className='checkbox-item'>
                                <input type='checkbox' value={0} onClick={() => setSchedule0(!schedule0)}  name="schedule-0"></input>
                                <label>Гибкий график</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type='checkbox' value={1} onClick={() => setSchedule1(!schedule1)}  name="schedule-1"></input>
                                <label>Удаленная работа</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type='checkbox' value={2} onClick={() => setSchedule2(!schedule2)}  name="schedule-2"></input>
                                <label>Сменный график</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type='checkbox' value={3} onClick={() => setSchedule3(!schedule3)}  name="schedule-3"></input>
                                <label>Полный день</label>
                            </div>
                        </div>

                    </div>
                    <div className="form_item">
                        <p className="name-form">Занятость:</p>
                        <div className="filter-item">
                        <div className='checkbox-item'>
                                <input type='checkbox' onClick={() => setEmployment0(!employment0)}></input>
                                <label>Проектная работа</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type='checkbox' onClick={() => setEmployment1(!employment1)}></input>
                                <label>Стажировка</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type='checkbox' onClick={() => setEmployment2(!employment2)}></input>
                                <label>Частичная занятость</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type='checkbox' onClick={() => setEmployment3(!employment3)}></input>
                                <label>Полная занятость</label>
                            </div>
                        </div>

                    </div>
                    <div className="form_item">
                        <p className="name-form">Описание вакансии: </p>
                        <textarea onChange={onVacChange} className="input_text_vac" type='text' name="text" ref={text} value={props.newVacText} />
                    </div>
                    <button onClick={onAddVac} className=" orange create_vacancy">Создать вакансию</button>
                </form>
            </div>
        </div>
    )
}

export default AddVacansie;
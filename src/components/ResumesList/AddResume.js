import React, { useState } from "react";
import "../../Styles/app.css";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Select from "react-select";

const AddResume = (props) => {
    let about = React.createRef()
    let salary = React.createRef()
    let exp = React.createRef()
    let skills = React.createRef()
    let [support, setSupport] = useState(false)
    let { authToken, user } = useContext(AuthContext)
    const nav = useNavigate()
    console.log(props)
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
            if (data[i] != undefined) {
                setNewSkills(newSkills => [...newSkills, data[i].value])
            }
        }
    }
    console.log(newSkills)
    let onAddRes = (e) => {
        e.preventDefault()
        props.AddResume()
        debugger
        axios
            .post("http://127.0.0.1:8000/api/resumes/",
                {
                    "about_me": about.current.value,
                    "exp_work": exp.current.value,
                    "file": null,
                    "image": null,
                    "salary": salary.current.value,
                    "status": 0,
                    "skills": newSkills,
                    "user": props.user
                },
                {
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${String(authToken.access)}`
                    }
                })
            .then(response => {
                console.log(response.data)
                if (response.status === 201) {
                    nav(`/resume/${response.data.id}`, {
                        state: response.data
                    })
                }
            }
            )
            .catch(error => console.log(error.response))
    }

    let onResChange = () => {
        let aboutRes = about.current.value;
        let salaryRes = salary.current.value;
        let expRes = exp.current.value;
        props.ChangeResume(salaryRes, expRes, aboutRes)
    }

    return (
        <div className="container">
            <div className="steps">
                <h3>Создание резюме</h3>
                <p><span>Шаг 1</span> из 3</p>
            </div>
            <div className="bar_1"></div>
            <a onClick={() => nav(-1)} className='back'>Назад</a>
            <form>
                <div className="form form_resume">
                    <div className="field_input">
                        <h2>{user.full_name}</h2>
                        <div className="form_item">
                            <p className="name-form">Почта:</p>
                            <p className="input_mail_res">{user.email}</p>
                        </div>
                        <div className="form_item">
                            <p className="name-form">Департамент:</p>
                            <p className="input_dep_res">{user.department}</p>
                        </div>
                        <div className="form_item">
                            <p className="name-form">Зарплата:</p>
                            <input onChange={onResChange} className="input_salary_res" type='number' name='salary' ref={salary} value={props.newResSalery} required />
                        </div>
                        <div className="form_item">
                            <p className="name-form">Стаж работы:</p>
                            <input onChange={onResChange} className="input_exp_res" type='number' name='salary' ref={exp} value={props.newResExp} required />
                        </div>
                        <div className="form_item">
                            <p className="name-form">Компетенции: </p>
                            <div>
                                <Select
                                    name='skills'
                                    closeMenuOnSelect={false}
                                    isMulti
                                    options={optionList}
                                    ref={skills}
                                    placeholder="Найти компетенцию"
                                    value={nameSkill}
                                    onChange={skillsChange}
                                    className='input_skills'
                                    isSearchable={true} />
                                <p className="no-skill" onClick={() => setSupport(!support)}>Нет подходящей компетенции</p>
                                {support && <p className="to-support">Для добавления нового тега в компетенции обратитесь в <NavLink to='/support'>Техподдержку</NavLink></p>}
                            </div>
                        </div>
                        <div className="form_item">
                            <p className="name-form">О себе:</p>
                            <textarea onChange={onResChange} className="input_text_res" type='text' name="about" ref={about} value={props.newResAbout} required />
                        </div>
                    </div>
                    <div className="download_fields">
                        <div className="form_item">
                            <p className="name-form">Загрузите изображение</p>
                            <input type="file" name="photo" accept="image/*" />
                        </div>
                        <div className="form_item">
                            <p className="name-form">Загрузите свое резюме</p>
                            <input type="file" name="photo" accept="application/pdf" />
                        </div>

                    </div>
                </div>

            </form>
            <button onClick={onAddRes} className="orange create_resume">Создать резюме</button>
        </div>
    )
}

export default AddResume;
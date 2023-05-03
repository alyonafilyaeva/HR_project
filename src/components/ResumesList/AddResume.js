import React from "react";
import "../../Styles/app.css";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AddResume = (props) => {
    let about = React.createRef()
    let salary = React.createRef()
    let exp = React.createRef()
    let skills = React.createRef()
    let { authToken, user } = useContext(AuthContext)
    const nav = useNavigate()
    console.log(props)

    let onAddRes = (e) => {
        e.preventDefault()
        props.AddResume()
        let newSkills = []
        newSkills.push(skills.current.value)
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
            <NavLink to="/resumes" className='back'>Назад</NavLink>
            <form>
                <div className="form form_resume">
                    <div className="field_input">
                        <h2>{user.full_name}</h2>
                        <div className="form_item">
                            <p>Почта:</p>
                            <p className="input_mail_res">{user.email}</p>
                        </div>
                        <div className="form_item">
                            <p>Департамент:</p>
                            <p className="input_dep_res">{user.department}</p>
                        </div>
                        <div className="form_item">
                            <p>Желаемая зарплата:</p>
                            <input onChange={onResChange} className="input_salary_res" type='number' name='salary' ref={salary} value={props.newResSalery} required />
                        </div>
                        <div className="form_item">
                            <p>Стаж работы:</p>
                            <input onChange={onResChange} className="input_exp_res" type='number' name='salary' ref={exp} value={props.newResExp} required />
                        </div>
                        <div className="form_item">
                            <p className="name-form">Компетенции: </p>
                            <select className='parametr ' placeholder="Компетенции" name='skills' ref={skills}>
                                <option value=''></option>
                                {props.skills.skills.map(skill =>
                                    <option value={skill.id}>{skill.name}</option>
                                )}
                            </select>
                            {/* <p>Нет подходящей компетенции</p>
                            <p>Для добавления нового тега в компетенции обратитесь в <NavLink to='/support'>Техподдержку</NavLink></p> */}
                        </div>
                        <div className='form_item checkbox-block'>
                            <p>График работы:</p>
                            <div className='checkbox-item'>
                                <input type='checkbox'></input>
                                <label>Полный день</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type='checkbox'></input>
                                <label>Сменный график</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type='checkbox'></input>
                                <label>Удаленная работа</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type='checkbox'></input>
                                <label>Проектная работа</label>
                            </div>
                        </div>
                        <div className='form_item checkbox-block'>
                            <p>Занятость:</p>
                            <div className='checkbox-item'>
                                <input type='checkbox'></input>
                                <label>Полная занятость</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type='checkbox'></input>
                                <label>Частичная занятость</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type='checkbox'></input>
                                <label>Стажировка</label>
                            </div>
                            <div className='checkbox-item'>
                                <input type='checkbox'></input>
                                <label>Проектная работа</label>
                            </div>
                        </div>
                        
                        <div className="form_item">
                            <p>О себе:</p>
                            <textarea onChange={onResChange} className="input_text_res" type='text' name="about" ref={about} value={props.newResAbout} required />
                        </div>
                    </div>
                    <div className="download_fields">
                        <div className="form_item">
                            <p>Загрузите изображение</p>
                            <input type="file" name="photo" accept="image/*" />
                        </div>
                        <div className="form_item">
                            <p>Загрузите свое резюме</p>
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
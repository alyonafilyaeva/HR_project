import React, { useLayoutEffect, useEffect, useState, useRef } from "react";
import "../../Styles/app.css";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";

const EditResume = (props) => {
    const location = useLocation()
    let [state, setState] = useState()
    let [salary, setSalary] = useState(0)
    let [exp_work, setExp_Work] = useState(0)
    let [about_me, setAbout_Me] = useState('')
    let [image, setImage] = useState()
    let [file, setFile] = useState()
    let [skills, setSkills] = useState([])
    let { authToken, user } = useContext(AuthContext)
    let [nameSkill, setNameSkill] = useState('gfg')
    let [newSkills, setNewSkills] = React.useState([])
    let [support, setSupport] = useState(false)
    let [skill, setSkill] = useState('')
    let optionList = props.skills.skills
    for (var i = 0; i < optionList.length; i++) {
        optionList[i].value = optionList[i]['id'];
        optionList[i].label = optionList[i]['name'];
        /* delete optionList[i].name;  */
    }
    const nav = useNavigate()
    function skillsChange(data) {
        setNameSkill(data)
        setSkill(data.value)
        console.log(data)
        console.log(optionList)
        for (let i = 0; i < optionList.length; i++) {
            console.log(data[i])
            if (data[i] != undefined) {
                setNewSkills(newSkills => [...newSkills, data[i].id])
            }
             

        }
        console.log(data)
    }

    useLayoutEffect(() => {
        axios({
            method: "get",
            url: `/api/resumes/${location.state.id}/`,
            headers: {
                Authorization: `Bearer ${String(authToken.access)}`,
            },
            params: {
                status: 'my',
            },
        })
            .then(response => response.data)
            .then((response) => {
                setState(response)
                setAbout_Me(response.about_me)
                setSalary(response.salary)
                setExp_Work(response.exp_work)
                // setImage(response.image)
                // setFile(response.file)
            })
    }, [])
console.log(newSkills)
    let onEditRes = (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append("about_me", about_me)
        formData.append("exp_work", exp_work)
        formData.append("salary", salary)
        formData.append("skills", newSkills)
        formData.append("image", image ? image : state.image)
        formData.append("status", 0)
        formData.append("file", file ? file : state.file)
        axios({
            method: "put",
            url: `/api/resumes/${location.state.id}/`,
            headers: {
                Authorization: `Bearer ${String(authToken.access)}`,
            },
            params: {
                status: 'my',
            },
            data: formData
        })
            .then(response => {
                if (response.status == 200) {
                    nav(`/resume/${location.state.id}`, {
                        state: response.data
                    })
                }
            })
            .catch(error => console.log(error.response))
    }

    let onResChange = (e) => {
        if (e.target.name === 'salary') {
            setSalary(Number(e.target.value))
        } else if (e.target.name === 'exp_work') {
            setExp_Work(Number(e.target.value))
        } else if (e.target.name === 'about_me') {
            setAbout_Me(e.target.value)
        }
        else if (e.target.name === 'image') {
            setImage(e.target.files[0])
        }
        else if (e.target.name === 'file') {
            setFile(e.target.files[0])
        }
    }

    return (
        <div className="container">
            <div className="steps">
                <h3>Черновик резюме</h3>
                <p><span>Шаг 2</span> из 3</p>
            </div>
            <div className="bar_2"></div>
            <NavLink to={`/resumes`} className='back'>Назад</NavLink>
            <div>
                <form onSubmit={onEditRes}>
                    <div className="form form_resume">
                        <div className="field_input">
                            <h2>{user.full_name}</h2>
                            <div className="form_item">
                                <p>Почта:</p>
                                <p className="input_mail_res_edit">{user.email}</p>
                            </div>
                            <div className="form_item">
                                <p>Департамент:</p>
                                <p className="input_dep_res_edit">{props.user.department}</p>
                            </div>
                            <div className="form_item">
                                <p>Желаемая зарплата:</p>
                                <input onChange={onResChange} className="input_salary_res_edit" type='number' name='salary' value={salary} required />
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
                                <p>Стаж работы:</p>
                                <input onChange={onResChange} className="input_exp_res_edit" type='number' name='exp_work' value={exp_work} required />
                            </div>
                            <div className="form_item">
                                <p>О себе:</p>
                                <textarea onChange={onResChange} className="input_text_res_edit" type='text' name="about_me" value={about_me} required />
                            </div>

                        </div>
                        <div className="download_fields">
                            <div className="form_item">
                                <p>Загрузите изображение</p>
                                <input onChange={onResChange} type="file" name="image" accept="image/*" required />
                            </div>
                            <div className="form_item">
                                <p>Загрузите свое резюме</p>
                                <input onChange={onResChange} type="file" name="file" accept="application/*" required />
                            </div>

                        </div>
                    </div>
                    <button type="submit" className="orange save_res">Сохранить</button>
                </form>
            </div>

        </div>
    )
}

export default EditResume;
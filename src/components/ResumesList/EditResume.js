import React, { useLayoutEffect, useEffect, useState, useRef } from "react";
import "../../Styles/app.css";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";

const EditResume = (props) => {
    const location = useLocation()
    let [state, setState] = useState()
    let [salary, setSalary] = useState(0)
    let [exp_work, setExp_Work] = useState(0)
    let [about_me, setAbout_Me] = useState('')
    let [image, setImage] = useState()
    let [file, setFile] = useState()
    let { authToken, user } = useContext(AuthContext)

    const nav = useNavigate()

    useLayoutEffect(() => {
        axios({
            method: "get",
            url: `http://127.0.0.1:8000/api/resumes/${location.state.id}/`,
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

    let onEditRes = (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append("about_me", about_me)
        formData.append("exp_work", exp_work)
        formData.append("salary", salary)
        formData.append("image", image ? image : state.image)
        formData.append("status", 'N_P')
        formData.append("file", file ? file : state.file)
        axios({
            method: "put",
            url: `http://127.0.0.1:8000/api/resumes/${location.state.id}/`,
            headers: {
                Authorization: `Bearer ${String(authToken.access)}`,
            },
            params: {
                status: 'my',
            },
            data: formData
        })
        /* axios
            .put(`http://127.0.0.1:8000/api/resumes/${location.state.id}/`,
                formData,
                {
                    'headers': {
                        'Authorization': `Bearer ${String(authToken.access)}`
                    }
                }) */
            .then(response => {
                if (response.status == 200) {
                    nav(`/resume/${location.state.id}`,{
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
            <h3>Редактирование резюме</h3>
            <NavLink to={`/resumes`} className='back'>&#x2190; Назад</NavLink>
            <div>
            <form onSubmit={onEditRes}>
                <div className="form form_resume">
                    <div>
                        <h2>{user.full_name}</h2>
                        <p>Email: {user.email}</p>
                        <p>Департамент: {props.user.department}</p>
                        <p>Желаемая зарплата</p>
                        <input onChange={onResChange} type='number' name='salary' value={salary} required />
                        <p>Стаж работы</p>
                        <input onChange={onResChange} type='number' name='exp_work' value={exp_work} required />
                        <p>О себе</p>
                        <textarea onChange={onResChange} type='text' name="about_me" value={about_me} required />
                    </div>
                    <div>
                        <p>Загрузите изображние</p>
                        <input onChange={onResChange} type="file" name="image" accept="image/*" required />
                        <p>Загрузите свое резюме</p>
                        <input onChange={onResChange} type="file" name="file" accept="application/*" required />
                    </div>
                </div>
                <button type="submit" className="orange save">Сохранить изменения</button>
            </form>
            </div>
            
        </div>
    )
}

export default EditResume;
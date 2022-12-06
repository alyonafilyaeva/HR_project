import React, { useLayoutEffect } from "react";
import "../Styles/app.css";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";

const EditResume = (props) => {
    const location = useLocation()
    let about = React.createRef()
    let salary = React.createRef()
    let exp = React.createRef()
    let image = React.createRef()
    let file = React.createRef()
    let { authToken } = useContext(AuthContext)

    useLayoutEffect(() => {
        console.log(location.state.id)
        axios.get(`http://127.0.0.1:8000/api/resumes/${location.state.id}`, {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }
        }).then(response => {
            props.EditResume(response.data)
            console.log(response.data)
        })
    }, [])
   
    let onEditRes = (e) => {
        e.preventDefault()
        axios
        .put(`http://127.0.0.1:8000/api/resumes/${location.state.id}/`, 
        {
            "about_me": about.current.value,
            "exp_work": exp.current.value,
            "file": file.current.value,
            "image": file.current.value,
            "salary": salary.current.value,
            "status": 'Y_P'
        }, 
        {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }
        })
        .then(response => console.log(response.data))
        .catch(error => console.log(error.response))
    }

    let onResChange = () => {
        let salaryRes = salary.current.value;
        let expRes = exp.current.value;
        let aboutRes = about.current.value;
        let fileRes = file.current.value;
        let imgRes = image.current.value;
        props.ChangeResume(salaryRes, expRes, aboutRes, fileRes, imgRes)
    }

    debugger;
    return (
        <div>
            <NavLink to="/resumes">Назад</NavLink>
            <form>
                <div>
                    <div>
                        <h2>{location.state.user.full_name}</h2>
                        <p>Email: {location.state.user.email}</p>
                        <p>Мин зарплата</p>
                        <input onChange={onResChange} type='text' name='salary' ref={salary} value={props.newResSalery} required/>
                        <p>Стаж работы</p>
                        <input onChange={onResChange} type='text' name='salary' ref={exp} value={props.newResExp} required/>
                        <p>О себе</p>
                        <textarea onChange={onResChange} type='text' name="about" ref={about} value={props.newResAbout} required/>
                    </div>
                    <div>
                        <p>Загрузите изображние</p>
                        <input type="file" name="photo" accept="image/*" ref={image} value={props.newResImg} />
                        <p>Загрузите свое резюме</p>
                        <input type="file" name="photo" /* accept="application/pdf" */ ref={file} value={props.newResFile} />
                    </div>
                </div>

                
                
                <button onClick={onEditRes}>Опубликовать резюме</button>
            </form>
        </div>
    )
}

export default EditResume;
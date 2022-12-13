import React from "react";
import "../../Styles/app.css";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const AddResume = (props) => {
    
    let post = React.createRef()
    let about = React.createRef()
    let salary = React.createRef()
    let exp = React.createRef()
    let { authToken } = useContext(AuthContext)

    let onAddRes = (e) => {
        e.preventDefault()
        props.AddResume()

        axios
        .post("http://127.0.0.1:8000/api/resumes/", 
        {
            "about_me": about.current.value,
            "exp_work": exp.current.value,
            "file": null,
            "image": null,
            "salary":  salary.current.value,
            "status": "T_W",
            "user": props.user
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
        let aboutRes = about.current.value;
        let salaryRes = salary.current.value;
        let expRes = exp.current.value;
        props.ChangeResume(salaryRes, expRes, aboutRes)
    }

    debugger;
    return (
        <div>
            <h3>Создание резюме</h3>
            <NavLink to="/resumes">Назад</NavLink>
            <form>
                <div className="form form_resume">
                    <div className="field_input">
                        <p>Почта:</p>
                        {props.user.email}
                        <p>департамент</p>
                        {props.user.department}
                        <p>Мин зарплата</p>
                        <input onChange={onResChange} type='text' name='salary' ref={salary} value={props.newResSalery} required/>
                        <p>Стаж работы</p>
                        <input onChange={onResChange} type='text' name='salary' ref={exp} value={props.newResExp} required/>
                        <p>О себе</p>
                        <textarea onChange={onResChange} type='text' name="about" ref={about} value={props.newResAbout} required/>
                    </div>
                    <div className="download_fields">
                        <p>Загрузите изображние</p>
                        <input type="file" name="photo" accept="image/*" />
                        <p>Загрузите свое резюме</p>
                        <input type="file" name="photo" accept="application/pdf" />
                    </div>
                </div>

                
                <button onClick={onAddRes} className="create_resume">Создать резюме</button>
            </form>
        </div>
    )
}

export default AddResume;
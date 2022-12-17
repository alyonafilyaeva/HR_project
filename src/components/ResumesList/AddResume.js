import React from "react";
import "../../Styles/app.css";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const AddResume = (props) => {
    let about = React.createRef()
    let salary = React.createRef()
    let exp = React.createRef()
    let { authToken, user } = useContext(AuthContext)

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
                    "salary": salary.current.value,
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

    return (
        <div>
            <h3>Создание резюме</h3>
            <NavLink to="/resumes" className='back'>&#x2190; Назад</NavLink>
            <form>
                <div className="form form_resume">
                    <div className="field_input">
                        <p>Почта: {user.email}</p>
                        <p>Департамент: {user.department}</p>
                        <div className="form_item">
                            <p>Желаемая зарплата</p>
                            <input onChange={onResChange} type='text' name='salary' ref={salary} value={props.newResSalery} required />
                        </div>
                        <div className="form_item">
                            <p>Стаж работы</p>
                            <input onChange={onResChange} type='text' name='salary' ref={exp} value={props.newResExp} required />
                        </div>
                        <div className="form_item">
                            <p>О себе</p>
                            <textarea onChange={onResChange} type='text' name="about" ref={about} value={props.newResAbout} required />
                        </div>
                    </div>
                    <div className="download_fields">
                        <div className="form_item">
                            <p>Загрузите изображние</p>
                            <input type="file" name="photo" accept="image/*" />
                        </div>
                        <div className="form_item">
                            <p>Загрузите свое резюме</p>
                            <input type="file" name="photo" accept="application/pdf" />
                        </div>

                    </div>
                </div>
                <button onClick={onAddRes} className="orange create_resume">Создать резюме</button>
            </form>
        </div>
    )
}

export default AddResume;
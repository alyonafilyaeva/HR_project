import React from "react";
import "../Styles/app.css";
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
    }

    let onResChange = () => {
        let postRes = post.current.value;
        let aboutRes = about.current.value;
        let salaryRes = salary.current.value;
        let expRes = exp.current.value;
        props.ChangeResume(postRes, aboutRes, salaryRes, expRes)
    }

    let onSendVac = () => {
        axios
        .post("http://127.0.0.1:8000/api/resumes/", 
        {
            "about_me": props.resumes[props.resumes.length-1].about_me,
            "exp_work": props.resumes[props.resumes.length-1].exp_work,
            "file": null,
            "image": null,
            "salary":  props.resumes[props.resumes.length-1].salary,
            "status": "T_W",
            "user": props.user.full_name
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

    debugger;
    return (
        <div>
            <NavLink to="/resumes">Назад</NavLink>
            <form>
                <div>
                    <div>
                        <p>Почта:</p>
                        <input onChange={onResChange} type='text' name='post' ref={post} value={props.newResPost}/>
                        <p>департамент</p>
                        <p>из бд</p>
                        <p>Мин зарплата</p>
                        <input onChange={onResChange} type='text' name='salary' ref={salary} value={props.newResSalery}/>
                        <p>Стаж работы</p>
                        <input onChange={onResChange} type='text' name='salary' ref={exp} value={props.newResExp}/>
                        <p>О себе</p>
                        <textarea onChange={onResChange} type='text' name="about" ref={about} value={props.newResAbout}/>
                    </div>
                    <div>
                        <p>Загрузите изображние</p>
                        <input type="file" name="photo" accept="image/*" />
                        <p>Загрузите свое резюме</p>
                        <input type="file" name="photo" accept="application/pdf" />
                    </div>
                </div>

                
                <button onClick={onAddRes}>Создать резюме</button>
                <button onClick={onSendVac}>Опубликовать резюме</button>
            </form>
        </div>
    )
}

export default AddResume;
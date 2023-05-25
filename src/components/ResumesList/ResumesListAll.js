import React, { useContext, useLayoutEffect } from "react";
import Resume from "./Resume";
import axios from "axios"
import AuthContext from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
import iconResume from '../../imgs/iconResume.png'

function ResumesListAll(props) {
    let { authToken } = useContext(AuthContext)
    useLayoutEffect(() => {
        axios.get("http://127.0.0.1:8000/api/skills/", {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }
        })
            .then(response => {
                props.setSkills(response.data.skills)
                
                console.log(response)
            })

    }, [])
    useLayoutEffect(() => {
        axios.get("http://127.0.0.1:8000/api/resumes/", {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }
        })
            .then(response => {
                props.setResumes(response.data)
            })
    }, [])

    const resumeElements = props.resumesPage.resumes.map(resume =>
        <Resume resume={resume} />
    )
    
    if (resumeElements.length > 0) {
        return <ul className="vacansiesList">
            {resumeElements}
        </ul>
    }
    else {
        return <div>
        <div className="no-requests">
            <img src={iconResume} />
            <h3>Еще нет резюме.</h3>
            <p>Заполните информацию и опубликуйте резюме.</p>
            <NavLink to="/resumes/create_resume" className="orange">Создать резюме</NavLink>
        </div>
        <div className="survey">
            <h3>Почему вы меняете работу?</h3>
            <p>Ваш ответ поможет нам улучшить условия работы и удержать талантливых сотрудников в нашей IT-компании. <br></br>
                Мы хотим понять, почему сотрудники решают покинуть нашу компанию. Мы признаем, что текучесть кадров является 
                проблемой, и хотим узнать, какие факторы влияют на ваше решение о смене места работы. <br></br>
                Пройдите опрос, который не займет у вас более 5 минут. Спасибо за вашу помощь!</p>
            <NavLink className="grey">Пройти опрос</NavLink>
        </div>
    </div>
    }
}

export default ResumesListAll;
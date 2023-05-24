import React, { useContext, useLayoutEffect } from "react";
import Resume from "./Resume";
import axios from "axios"
import "../../Styles/app.css"
import { NavLink } from "react-router-dom";
import iconContainer from '../../imgs/iconContainer.png'

import AuthContext from "../../context/AuthContext";
import { Button } from "@mui/material";

function ResumesListMy(props) {
    let { authToken } = useContext(AuthContext)

    useLayoutEffect(() => {
        axios({
            method: "get",
            url: 'http://127.0.0.1:8000/api/resumes/',
            headers: {
                Authorization: `Bearer ${String(authToken.access)}`,
            },
            params: {
                status: 'my'
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
                <img src={iconContainer} />
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

export default ResumesListMy;
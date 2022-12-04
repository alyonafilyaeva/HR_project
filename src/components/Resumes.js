import React from "react";
import "./Styles/app.css"
import ResumesListMy from "./ResumesList/ResumesListMy";
import ResumesListAllContainer from "./ResumesList/ResumesListAllContainer";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

function Resumes(props) {
    const [status, setStatus] = React.useState('all')
    
        return (
            <div className="vacancies">
                <p>Резюме</p>
                <div>
                    <input type="text" placeholder="Поиск по резюме"></input>
                    <NavLink to="/resumes/create_resume" className="vacansies-top__btn">Создать резюме </NavLink>
                </div>
                <div className="sorts">
                    <input placeholder="Сортировать"></input>
                    <input placeholder="Зарплата от"></input>
                    <input placeholder="Опыт работы от"></input>
                    <input placeholder="Департамент"></input>
                </div>
                <div className="vacansies-top">
                    <div className="vacansies-top__all">
                        <h2 onClick={() => {setStatus('all')}} className={`${status === 'all' && 'active'}`  }>Резюме</h2>
                    </div>
                    <div className="vacansies-top__my">
                        <h2 onClick={() => {setStatus('my')}} className={`${status === 'my' && 'active'}`  }>
                            {props.user.is_header_dep ? 'Мое резюме' : ''}
                        </h2>
                    </div>
                    <div>
                        <button className="vacansies-top__btn">Очистить</button>
                        <button className="vacansies-top__btn">Применить</button>
                    </div>
                </div>
                    <div className="vacansies-list">
                        {status === 'all' ? <ResumesListAllContainer /> : <ResumesListMy />}
                    </div>
            </div>
        )
} 

export default Resumes;
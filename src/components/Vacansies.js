import React from "react";
import VacansiesListMy from "./VacansiesList/VacansiesListMy";
import VacansiesListAllContainer from "./VacansiesList/VacansiesListAllContainer";
import "./Styles/app.css"
import { NavLink } from "react-router-dom";
import axios from "axios"
import VacansiesListMyContainer from "./VacansiesList/VacansiesListMyContainer";

function Vacansies(props) {
    const [status, setStatus] = React.useState('all')
        return (
            <div className="vacancies">
                <div>
                    <input type="text" placeholder="Поиск по вакансии"></input>
                    {/* props.user.is_header_dep && */ <NavLink to="/vacansies/new_vacansie/" className="vacansies-top__btn">Создать вакансию </NavLink>}
                </div>
                <div className="sorts">
                    <input placeholder="Сортировать"></input>
                    <input placeholder="Зарплата от"></input>
                    <input placeholder="Опыт работы от"></input>
                    <input placeholder="Департамент"></input>
                </div>
                <div className="vacansies-top">
                    <div className="vacansies-top__all">
                        <h2 onClick={() => {setStatus('all')}} className={`${status === 'all' && 'active'}`  }>Вакансии</h2>
                    </div>
                    <div className="vacansies-top__my">
                        <h2 onClick={() => {setStatus('my')}} className={`${status === 'my' && 'active'}`  }>Мои вакансии</h2>
                    </div>
                    <div>
                        <button className="vacansies-top__btn">Очистить</button>
                        <button className="vacansies-top__btn">Применить</button>
                    </div>
                </div>
                    <div className="vacansies-list">
                        {status === 'all' ? <VacansiesListAllContainer /> : <VacansiesListMyContainer />}
                        
                    </div>
            </div>
        )
} 

export default Vacansies;
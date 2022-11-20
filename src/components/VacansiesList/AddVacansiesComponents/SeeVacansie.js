import React from "react";
import { NavLink } from "react-router-dom";

const SeeVacansie = (props) => {
    debugger;
    return(
        <div>
            <NavLink to="/vacansies/new_vacansie/edit">редактировать</NavLink>
                <p>Название вакансии:</p>
                <p>{props.vacansies[0].title}</p>
                <p>департамент</p>
                <p>из бд</p>
                <p>Мин зарплата</p>
                <p>{props.vacansies[0].salary}</p>
                <p>Стаж работы</p>
                <p>{props.vacansies[0].exp_work}</p>
                <p>Описание вакансии</p>
                <p>{props.vacansies[0].description}</p>
            
        </div>
    )
}

export default SeeVacansie;
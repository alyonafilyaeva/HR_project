import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const ActiveVacansie = (props) => {
    const location = useLocation();
    let { user } = useContext(AuthContext)
    let path = `/vacansie/edit/${location.state.id}`
    
    return (
        <div  >
            <div >
                <NavLink to="/vacansies">Назад</NavLink>
                {(location.state.user.id == user.id )&& <NavLink to={path} state={location.state}>Редактировать</NavLink>}
                <div >
                    <h2>{location.state.title}</h2>
                    <p className="blur">{location.state.department}</p>
                </div>
                <p className="blur">{location.state.salary}</p>
                <p className="blur">Опыт работы: {location.state.exp_work}</p>
                <section>{location.state.description}</section>
                {(location.state.user.id != user.id ) && <button>Отправить заявку</button>}
                {(location.state.user.id == user.id ) && <button>Снять с публикации</button>}
            </div>
        </div>
    )
}

export default ActiveVacansie;

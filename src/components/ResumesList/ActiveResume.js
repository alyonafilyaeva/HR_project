import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const ActiveResume = (props) => {
    debugger;
    const location = useLocation();
    console.log(location.state)
    let path = `/resume/edit/${location.state.id}`
    return (
        <div  >
            <div >
                <NavLink to="/resumes">Назад</NavLink>
                {(location.state.user.id == props.user.id ) && <NavLink to={path} state={location.state}>Редактировать</NavLink>}
                <div >
                    <h2>{location.state.user.full_name}</h2>
                    <p>Email: {location.state.user.email}</p>
                </div>
                <p className="blur">{location.state.salary}</p>
                <p className="blur">Опыт работы: {location.state.exp_work}</p>
                <section>{location.state.about_me}</section>
                <img src={location.state.file}></img>
                <button>Отправить заявку</button>
            </div>
        </div>
    )


}

export default ActiveResume;
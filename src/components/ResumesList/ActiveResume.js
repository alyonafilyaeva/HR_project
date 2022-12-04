import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const ActiveResume = () => {
    debugger;
    const location = useLocation();
    console.log(location.state)
    return (
        <div  >
            <div >
                <NavLink to="/resumes">Назад</NavLink>
                <div >
                    <h2>{location.state.user}</h2>
                    <p>Email: {location.state.email}</p>
                </div>
                <p className="blur">{location.state.salary}</p>
                <p className="blur">Опыт работы: {location.state.exp_work}</p>
                <section>{location.state.about_me}</section>
                <button>Отправить заявку</button>
            </div>
        </div>
    )


}

export default ActiveResume;
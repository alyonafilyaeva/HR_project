import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { NavLink, useLocation } from "react-router-dom";

const ActiveResume = (props) => {
    let { user } = useContext(AuthContext)
    const location = useLocation();
    let path = `/resume/edit/${location.state.id}`
    return (
        <div  >
            <NavLink to="/resumes" className='back'>Назад</NavLink>
            {location.state.user.id == user.id && <NavLink to={path} state={location.state} className='grey edit'>Редактировать</NavLink>}
            <div >
                
                <div className="active_block resume">
                    <div>
                        <h2 className="active_block_item">{location.state.user.full_name}</h2>
                        <p className="active_block_item">Email: {location.state.user.email}</p>
                        <p className="active_block_item">Желаемая зарплата: {location.state.salary} руб</p>
                        <p className="active_block_item">Опыт работы: {location.state.exp_work}</p>
                        <section>{location.state.about_me}</section>
                    </div>
                    <div>
                        <img className='photo' src={location.state.image} />
                        <a href={location.state.file} download target='_blank'>Резюме</a>
                    </div>
                </div>
            </div>
            {location.state.user.id !== user.id && <button>Отправить заявку</button>}
        </div>
    )


}

export default ActiveResume;
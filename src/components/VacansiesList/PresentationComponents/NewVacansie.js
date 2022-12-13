import React from "react";
import { NavLink } from "react-router-dom";
import AddVacansieContainer from "../ContainerComponents/AddVacansieContainer";

const newVacansie = (props) => {
    return(
        <div className="container">
            <p>progressbar</p>
            <NavLink to="/vacansies">Назад</NavLink>
            <AddVacansieContainer />
        </div>
        
    )
}

export default newVacansie;
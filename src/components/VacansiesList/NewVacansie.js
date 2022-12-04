import React from "react";
import { NavLink } from "react-router-dom";
import AddVacansieContainer from "./AddVacansiesComponents/AddVacansieContainer";
import SeeVacansieContainer from "./AddVacansiesComponents/SeeVacansieContainer";

const newVacansie = (props) => {
    return(
        <div>
            <p>progressbar</p>
            <NavLink to="/vacansies">Назад</NavLink>
            <AddVacansieContainer />
            
        </div>
        
    )
}

export default newVacansie;
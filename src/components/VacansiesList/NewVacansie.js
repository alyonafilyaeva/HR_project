import React from "react";
import { NavLink } from "react-router-dom";
import AddVacansieContainer from "./AddVacansiesComponents/AddVacansieContainer";
import SeeVacansieContainer from "./AddVacansiesComponents/SeeVacansieContainer";

const newVacansie = (props) => {
    return(
        <div>
            <p>progressbar</p>
            <p>стрелочка</p>
          
            {props.vacansies[0].status === 'published' && <AddVacansieContainer />}
            <NavLink to="/vacansies/new_vacansie/see">n</NavLink>
        </div>
        
    )
}

export default newVacansie;
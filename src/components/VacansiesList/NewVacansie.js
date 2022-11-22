import React from "react";
import { NavLink } from "react-router-dom";
import AddVacansieContainer from "./AddVacansiesComponents/AddVacansieContainer";
import SeeVacansieContainer from "./AddVacansiesComponents/SeeVacansieContainer";

const newVacansie = (props) => {
    return(
        <div>
            <p>progressbar</p>
            <p>стрелочка</p>
            <AddVacansieContainer />
            {/* {props.vacansies[0].status === 'published' && <AddVacansieContainer />} */}
            
        </div>
        
    )
}

export default newVacansie;
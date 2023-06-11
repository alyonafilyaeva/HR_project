import React from "react";
import { NavLink } from "react-router-dom";

const Department = (props) => {
    let path = `/department/${props.department.id}`
    return(
        <div className="department-item">
            <NavLink to={path} state={props.department} >
                {props.department.name}
            </NavLink>
            
        </div>
    )
}

export default Department;
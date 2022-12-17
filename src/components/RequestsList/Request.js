import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Request = (props) => {
    console.log(props)
        return(
            <div className="vacansie">
                <div className="resume-item">
                    <div className="vacansie-top">
                        <h2>{props.request.destination.full_name}</h2>
                        <p>{props.request.title}</p>
                    </div>
                    
                </div>
            </div>
        )
}

export default Request;
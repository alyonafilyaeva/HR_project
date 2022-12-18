import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Request = (props) => {
    console.log(props)
        return(
            <div className="vacansie">
                <div className="request-item">
                    <div className="vacansie-top">
                        <h2>{props.request.title}</h2>
                        <p>{props.request.data_created}</p>
                    </div>
                    <p>{props.request.destination.full_name}</p>
                    <p>{props.request.destination.email}</p>
                </div>
            </div>
        )
}

export default Request;
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { Component } from "react";
import Vacansie from "./Vacansie";
import axios from "axios"
import AuthContext from "../../../context/AuthContext";

function VacansiesListAll(props) {
    console.log(props)
    let { authToken } = useContext(AuthContext)
    useLayoutEffect(() => {
        axios.get("http://127.0.0.1:8000/api/vacancies/", {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }

        }).then(response => {
            props.setVacansies(response.data)
            console.log(response.data)
        })
    }, [])
    const vacansieElements = props.vacansiesPage.vacansies.map(vacansie =>
        <Vacansie vacansie={vacansie} />
    )
    return (
        <ul className="vacansiesList">
            {vacansieElements}
        </ul>
    )
}

export default VacansiesListAll;


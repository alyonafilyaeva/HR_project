import React, { useContext, useLayoutEffect } from "react";
import Vacansie from "./Vacansie";
import axios from "axios"
import AuthContext from "../../../context/AuthContext";

function VacansiesListAll(props) {
    let { authToken } = useContext(AuthContext)
    useLayoutEffect(() => {
        axios.get("/api/skills/", {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }
        })
            .then(response => {
                props.setSkills(response.data.skills)
                
                console.log(response)
            })

    }, [])

    useLayoutEffect(() => {
        axios.get("/api/vacancies/", {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }
        })
            .then(response => {
                props.setVacansies(response.data)
                console.log(response)
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


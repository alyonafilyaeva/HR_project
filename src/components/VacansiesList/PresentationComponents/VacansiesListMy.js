import React, { useContext, useLayoutEffect } from "react";
import Vacansie from "./Vacansie";
import axios from "axios"
import AuthContext from "../../../context/AuthContext";

function VacansiesListMy(props) {
    let { authToken } = useContext(AuthContext)
    
    useLayoutEffect(() => {
        axios({
            method: "get",
            url: 'http://127.0.0.1:8000/api/vacancies/',
            headers: {
                Authorization: `Bearer ${String(authToken.access)}`,
            },
            params: {
                status: 'my'
            }
        })
            .then(response => {
                props.setVacansies(response.data)
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

export default VacansiesListMy;
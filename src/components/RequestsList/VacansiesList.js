import React, { useContext, useLayoutEffect } from "react";
import axios from "axios"
import AuthContext from "../../context/AuthContext";
import RequestVacansie from "./Request";
import iconContainer from "../../imgs/iconContainer.png"
import { NavLink } from "react-router-dom";

function VacansiesList(props) {
    let { authToken } = useContext(AuthContext)

    useLayoutEffect(() => {
        axios({
            method: "get",
            url: `http://127.0.0.1:8000/api/requests/`,
            headers: {
                Authorization: `Bearer ${String(authToken.access)}`,
            },
            params: { status: '1' }
        }).then(response => {
            console.log(response.data)
            props.setVacansiesRequests(response.data)
        })
    }, [])

    const vacansiesRequestsElements = props.requestsPage.requests.map(request =>
        <RequestVacansie request={request} />
    )

    return (
        <div >
            {vacansiesRequestsElements.length ?
                <ul className="vacansiesList">
                    {vacansiesRequestsElements}
                </ul> :
                <div className="no-requests">
                    <img src={iconContainer} />
                    <h3>Еще нет откликов на вакансии?</h3>
                    <p>Найдите и откликнитесь на подходящую вакансию</p>
                    <NavLink to="/vacansies" className="orange">Открыть вакансии</NavLink>
                </div>}
        </div>

    )
}

export default VacansiesList;

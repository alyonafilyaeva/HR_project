import React, { useContext, useLayoutEffect } from "react";
import axios from "axios"
import AuthContext from "../../context/AuthContext";
import Request from "./Request";
import RequestResume from "./RequestResume";
import { NavLink } from "react-router-dom";
import iconContainer from "../../imgs/iconContainer.png"

function ResumesList(props) {
    let { authToken } = useContext(AuthContext)
    
    useLayoutEffect(() => {
        axios({
            method: "get",
            url: `/api/requests/`,
            headers: {
            Authorization: `Bearer ${String(authToken.access)}`,
            },
            params: { status: '2' }
            }).then(response => {
                console.log(response.data)
                props.setVacansiesRequests(response.data)
            })
    }, [])

    const vacansiesRequestsElements = props.requestsPage.requests.map(request =>
        <RequestResume request={request} />
    )

    return (
        <div >
            {vacansiesRequestsElements.length ?
                <ul className="vacansiesList">
                    {vacansiesRequestsElements}
                </ul> :
                <div className="no-requests">
                    <img src={iconContainer} />
                    <h3>Еще нет откликов на резюме?</h3>
                    <p>Найдите и откликнитесь на подходящее резюме</p>
                    <NavLink to="/vacansies" className="orange">Открыть резюме</NavLink>
                </div>}
        </div>
    )
}

export default ResumesList;
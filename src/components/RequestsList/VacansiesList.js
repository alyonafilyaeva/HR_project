import React, { useContext, useLayoutEffect } from "react";
import axios from "axios"
import AuthContext from "../../context/AuthContext";
import Request from "./Request";

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
        <Request request={request} />
    )

    return (
        <ul className="vacansiesList">
            {vacansiesRequestsElements}
        </ul>
    )
}

export default VacansiesList;

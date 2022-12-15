import React, { useContext, useEffect, useLayoutEffect } from "react";
import axios from "axios"
import AuthContext from "../context/AuthContext";

function MyRequest() {
    let { authToken } = useContext(AuthContext)
    useLayoutEffect(() => {
        /* props.setVacansies([]) */
        axios.get("http://127.0.0.1:8000/api/vacancies/2", {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }

        }).then(response => {
           /*  for (let i = 0; i < response.data.length; i++) {
                props.setVacansies(response.data[i]);
            } */

            console.log(response.data)
        })
    }, [])

    return(
        <div>
            My_request
        </div>
    )
    
} 

export default MyRequest
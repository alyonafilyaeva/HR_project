import React, { useContext, useLayoutEffect } from "react";
import Resume from "./Resume";
import axios from "axios"
import "../../Styles/app.css"
import { NavLink } from "react-router-dom";

import AuthContext from "../../context/AuthContext";

function ResumesListMy(props) {
    let { authToken } = useContext(AuthContext)

    useLayoutEffect(() => {
        axios({
            method: "get",
            url: 'http://127.0.0.1:8000/api/resumes/',
            headers: {
                Authorization: `Bearer ${String(authToken.access)}`,
            },
            params: {
                status: 'my'
            }
        })
            .then(response => {
                props.setResumes(response.data)
            })
    }, [])

    const resumeElements = props.resumesPage.resumes.map(resume =>
        <Resume resume={resume} />
    )
    if (resumeElements.length > 0) {
        return <ul className="vacansiesList">
            {resumeElements}
        </ul>
    }
    else {
        return <div>
            <NavLink to="/resumes/create_resume" className="vacansies-top__btn">Создать резюме</NavLink>
        </div>
    }
}

export default ResumesListMy;
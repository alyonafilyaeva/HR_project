import React, { useContext, useLayoutEffect } from "react";
import Resume from "./Resume";
import axios from "axios"
import AuthContext from "../../context/AuthContext";
import { NavLink } from "react-router-dom";

function ResumesListAll(props) {
    let { authToken } = useContext(AuthContext)

    useLayoutEffect(() => {
        axios.get("http://127.0.0.1:8000/api/resumes/", {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
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

export default ResumesListAll;
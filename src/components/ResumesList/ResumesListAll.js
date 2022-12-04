import React from "react";
import Resume from "./Resume";
import { Component , useContext, useLayoutEffect} from "react";
import axios from "axios"
import AuthContext from "../../context/AuthContext";

function ResumesListAll(props) {
    let { authToken } = useContext(AuthContext)

    useLayoutEffect(() => {
        axios.get("http://127.0.0.1:8000/api/resumes/", {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }
        }).then(response => {
            props.setResumes(response.data)
            console.log(response.data)
        })
    }, [])

    const resumeElements = props.resumesPage.resumes.map(resume =>
        <Resume resume = {resume} />
        )
    return(
        <ul className="vacansiesList">
            {resumeElements}
        </ul>
    )
}

/* class ResumesListAll extends Component {
    constructor(props) {
        super(props);
        this.resumeElements = this.props.resumesPage.resumes.map(resume =>
            <Resume resume = {resume} />
            );
            axios.get("http://127.0.0.1:8000/api/resumes/").then(response =>  
            {
                console.log(props.setResumes(response.data))
            })
    }
    render() {
        return(
            <ul className="vacansiesList">
                {this.resumeElements}
            </ul>
        )
    }
} */

export default ResumesListAll;
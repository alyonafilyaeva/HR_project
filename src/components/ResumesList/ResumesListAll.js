import React from "react";
import Resume from "./Resume";
import { Component } from "react";
import axios from "axios"

/* function ResumesListAll(props) {
    const resumeElements = props.resumesPage.resumes.map(resume =>
        <Resume resume = {resume} />
        )
    return(
        <ul className="vacansiesList">
            {resumeElements}
        </ul>
    )
} */

class ResumesListAll extends Component {
    constructor(props) {
        super(props);
        this.resumeElements = this.props.resumesPage.resumes.map(resume =>
            <Resume resume = {resume} />
            );
            axios.get("http://127.0.0.1:8000/api/resumes/").then(response =>  
            {
                debugger;
                /* for (let i = 0; i < response.data.length; i++) {
                    props.setResumes(response.data[i]);
                    
                } */
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
}

export default ResumesListAll;
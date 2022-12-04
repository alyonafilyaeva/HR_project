import React from "react";
import { connect } from "react-redux";
import Resumes from "./Resumes";

let mapStateToProps = (state) => {
    return {
        resumesPage: state.resumesPage,
        resumes: state.resumesPage.resumes,
        user: state.profilePage.user
    }
}

let ResumesContainer = connect(mapStateToProps) (Resumes);

export default ResumesContainer;
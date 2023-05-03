import React from "react";
import { connect } from "react-redux";
import Resumes from "./Resumes"
import { SetVacansiesActionCreator } from "../redux/vacansies-reducer";
import { SetSkillsActionCreator } from "../redux/vacansies-reducer";
import { SetResumesActionCreator } from "../redux/resumes-reducer";

let mapStateToProps = (state) => {
    return {
        resumesPage: state.resumesPage,
        resumes: state.resumesPage.resumes,
        skills: state.skills
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setResumes: (resumes) => {
            dispatch(SetResumesActionCreator(resumes))
        },
        setSkills: (skills) => {
            dispatch(SetSkillsActionCreator(skills))
        }
    }
}

let ResumesContainer = connect(mapStateToProps, mapDispatchToProps) (Resumes);

export default ResumesContainer;
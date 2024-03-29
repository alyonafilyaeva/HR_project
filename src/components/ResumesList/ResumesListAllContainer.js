import React from "react";
import { connect } from "react-redux";
import ResumesListAll from "./ResumesListAll"
import { SetResumesActionCreator } from "../../redux/resumes-reducer";
import { SetSkillsActionCreator } from "../../redux/skills-reducer";

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

let ResumesListAllContainer = connect(mapStateToProps, mapDispatchToProps) (ResumesListAll);

export default ResumesListAllContainer;
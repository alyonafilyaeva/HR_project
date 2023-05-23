import React from "react";
import { connect } from "react-redux";
import EditResume from "./EditResume";
import { ChangeResumeActionCreator, EditResumeActionCreator } from "../../redux/resumes-reducer";


let mapStateToProps = (state) => {
    return {
        resumes: state.resumesPage.resumes,
        user: state.profilePage.user,
        newResPost: state.resumesPage.newResume,
        newResSalery: state.resumesPage.newResSalery,
        newResExp: state.resumesPage.newResExp,
        newResAbout: state.resumesPage.newResAbout,
        skills: state.skills
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        EditResume: (resume) => {
            dispatch(EditResumeActionCreator(resume))
        },
        ChangeResume: (salaryRes, expRes, aboutRes, fileRes, imgRes) => {
            dispatch(ChangeResumeActionCreator(salaryRes, expRes, aboutRes, fileRes, imgRes))
        }
    }
}
let EditResumeContainer = connect(mapStateToProps, mapDispatchToProps) (EditResume);

export default EditResumeContainer;
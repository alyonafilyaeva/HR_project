import React from "react";
import { connect } from "react-redux";
import { AddResumeActionCreator, ChangeResumeActionCreator } from "../../redux/resumes-reducer";
import AddResume from "./AddResume";

let mapStateToProps = (state) => {
    return {
        resumes: state.resumesPage.resumes,
        user: state.profilePage.user,
        newResPost: state.resumesPage.newResume,
        newResSalery: state.resumesPage.newResSalery,
        newResExp: state.resumesPage.newResExp,
        newResAbout: state.resumesPage.newResAbout,

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddResume: () => {
            dispatch(AddResumeActionCreator())
        },
        ChangeResume: (salaryRes, expRes, aboutRes) => {
            dispatch(ChangeResumeActionCreator( salaryRes, expRes, aboutRes))
        }
    }
}

const AddResumeContainer = connect(mapStateToProps, mapDispatchToProps) (AddResume);

export default AddResumeContainer;
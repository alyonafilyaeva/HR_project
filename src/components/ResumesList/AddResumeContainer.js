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
            debugger;
            dispatch(AddResumeActionCreator())
        },
        ChangeResume: (postRes, aboutRes, salaryRes, expRes) => {
            debugger;
            dispatch(ChangeResumeActionCreator(postRes, aboutRes, salaryRes, expRes))
        }
    }
}

const AddResumeContainer = connect(mapStateToProps, mapDispatchToProps) (AddResume);

export default AddResumeContainer;
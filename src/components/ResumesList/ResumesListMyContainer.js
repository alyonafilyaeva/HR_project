import React from "react";
import { connect } from "react-redux";
import ResumesListMy from "./ResumesListMy";
import { SetResumesActionCreator } from "../../redux/resumes-reducer";

let mapStateToProps = (state) => {
    return {
        resumesPage: state.resumesPage,
        resumes: state.resumesPage.resumes
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setResumes: (resumes) => {
            dispatch(SetResumesActionCreator(resumes))
        }
    }
}

let ResumesListMyContainer = connect(mapStateToProps, mapDispatchToProps) (ResumesListMy);

export default ResumesListMyContainer;
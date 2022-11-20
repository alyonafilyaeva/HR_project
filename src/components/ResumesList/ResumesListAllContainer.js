import React from "react";
import { connect } from "react-redux";
import ResumesListAll from "./ResumesListAll"
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
            debugger;
            dispatch(SetResumesActionCreator(resumes))
        }
    }
}

let ResumesListAllContainer = connect(mapStateToProps, mapDispatchToProps) (ResumesListAll);

export default ResumesListAllContainer;
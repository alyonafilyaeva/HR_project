import React from "react";
import { connect } from "react-redux";
import { SetResumesActionCreator } from "../../redux/resumes-reducer";
import { ChangeSortActionCreator } from "../../redux/vacansies-sorts-reducer";
import SortsResumes from "./SortsResumes";

let mapStateToProps = (state) => {
    return {
        resumesPage: state.resumesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setResumes: (resumes) => {
            dispatch(SetResumesActionCreator(resumes))
        }
    }
}

let SortsResumesContainer = connect(mapStateToProps, mapDispatchToProps)(SortsResumes);

export default SortsResumesContainer;
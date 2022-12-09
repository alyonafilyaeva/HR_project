import React from "react";
import { connect } from "react-redux";
import { SetVacansiesActionCreator } from "../../redux/vacansies-reducer";
import { ChangeSortActionCreator } from "../../redux/vacansies-sorts-reducer";
import SortsResumes from "./SortsResumes";

let mapStateToProps = (state) => {
    return {
        vacansiesPage: state.vacansiesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setVacansies: (vacansies) => {
            debugger;
            dispatch(SetVacansiesActionCreator(vacansies))
        },
        changeSorts: (sortValue, salaryValue, expValue, depValue) => {
            dispatch(ChangeSortActionCreator(sortValue, salaryValue, expValue, depValue))
        }
    }
}

let SortsResumesContainer = connect(mapStateToProps, mapDispatchToProps) (SortsResumes);

export default SortsResumesContainer;
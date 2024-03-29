import React from "react";
import { connect } from "react-redux";
import { ChangeVacansieActionCreator, EditedVacansiesActionCreator, EditVacansieActionCreator } from "../../../redux/vacansies-reducer";
import ActiveVacansie from "../PresentationComponents/ActiveVacansie";


let mapStateToProps = (state) => {
    return {
        user: state.profilePage.user,
        vacansiesPage: state.vacansiesPage,
        editedVacansie: state.vacansiesPage.editedVacansie,
        activeVacTitle: state.vacansiesPage.activeVacTitle,
        activeVacSalery: state.vacansiesPage.activeVacSalery,
        activeVacExp: state.vacansiesPage.activeVacExp,
        activeVacText: state.vacansiesPage.activeVacText,
        newVacTitle: state.vacansiesPage.newVacTitle,
        newVacSalery: state.vacansiesPage.newVacSalery,
        newVacExp: state.vacansiesPage.newVacExp,
        newVacText: state.vacansiesPage.newVacText,
        employment: state.vacansiesPage.employment,
        schedule: state.vacansiesPage.schedule
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        EditVacansie: (vacansie) => {
            dispatch(EditVacansieActionCreator(vacansie))
        },
        EditedVacansie: (vacansie) => {
            dispatch(EditedVacansiesActionCreator(vacansie))
        },
        ChangeVacansie: (titleVac, salaryVac, expVac, textVac) => {
            dispatch(ChangeVacansieActionCreator(titleVac, salaryVac, expVac, textVac))
        },

    }
}

let ActiveVacansieContainer = connect(mapStateToProps, mapDispatchToProps) (ActiveVacansie);

export default ActiveVacansieContainer;
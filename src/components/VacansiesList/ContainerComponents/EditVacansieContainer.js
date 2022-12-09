import React from "react";
import { connect } from "react-redux";
import { ChangeVacansieActionCreator, EditVacansieActionCreator } from "../../../redux/vacansies-reducer";
import EditVacansie from "../PresentationComponents/EditVacansie";

let mapStateToProps = (state) => {
    return {
        user: state.profilePage.user,
        vacansiesPage: state.vacansiesPage,
        activeVacTitle: state.vacansiesPage.activeVacTitle,
        activeVacSalery: state.vacansiesPage.activeVacSalery,
        activeVacExp: state.vacansiesPage.activeVacExp,
        activeVacText: state.vacansiesPage.activeVacText,
        newVacTitle: state.vacansiesPage.newVacTitle,
        newVacSalery: state.vacansiesPage.newVacSalery,
        newVacExp: state.vacansiesPage.newVacExp,
        newVacText: state.vacansiesPage.newVacText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        EditVacansie: (vacansie) => {
            debugger;
            dispatch(EditVacansieActionCreator(vacansie))
        },
        ChangeVacansie: (titleVac, salaryVac, expVac, textVac) => {
            dispatch(ChangeVacansieActionCreator(titleVac, salaryVac, expVac, textVac))
        },

    }
}

let EditVacansieContainer = connect(mapStateToProps, mapDispatchToProps) (EditVacansie);

export default EditVacansieContainer;
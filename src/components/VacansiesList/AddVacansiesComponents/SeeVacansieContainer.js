import React from "react";
import { connect } from "react-redux";
import { AddVacansieActionCreator, ChangeVacansieActionCreator } from "../../../redux/vacansies-reducer";
import SeeVacansie from "./SeeVacansie";

let mapStateToProps = (state) => {
    return {
        vacansies: state.vacansiesPage.vacansies,
        newVacTitle: state.vacansiesPage.newVacansie,
        newVacSalery: state.vacansiesPage.newVacansie,
        newVacExp: state.vacansiesPage.newVacansie,
        newVacText: state.vacansiesPage.newVacansie
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddVacansie: () => {
            debugger;
            dispatch(AddVacansieActionCreator())
        },
        ChangeVacansie: (titleVac, salaryVac, expVac, textVac) => {
            debugger;
            dispatch(ChangeVacansieActionCreator(titleVac, salaryVac, expVac, textVac))
        }
    }
}

const SeeVacansieContainer = connect(mapStateToProps, mapDispatchToProps) (SeeVacansie);

export default SeeVacansieContainer;
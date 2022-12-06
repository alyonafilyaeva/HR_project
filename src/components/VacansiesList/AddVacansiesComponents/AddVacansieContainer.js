import React from "react";
import { connect } from "react-redux";
import { AddVacansieActionCreator, ChangeVacansieActionCreator, GetIDVacansieActionCreator, SendVacansieActionCreator } from "../../../redux/vacansies-reducer";
import AddVacansie from "./AddVacansie";

let mapStateToProps = (state) => {
    return {
        ID: state.vacansiesPage.ID,
        vacansies: state.vacansiesPage.vacansies,
        newVacTitle: state.vacansiesPage.newVacTitle,
        newVacSalery: state.vacansiesPage.newVacSalery,
        newVacExp: state.vacansiesPage.newVacExp,
        newVacText: state.vacansiesPage.newVacText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddVacansie: () => {
            dispatch(AddVacansieActionCreator())
        },
        ChangeVacansie: (titleVac, salaryVac, expVac, textVac) => {
            dispatch(ChangeVacansieActionCreator(titleVac, salaryVac, expVac, textVac))
        },
        GetID: (ID) => {
            debugger;
            dispatch(GetIDVacansieActionCreator(ID))
        }
    }
}

const AddVacansieContainer = connect(mapStateToProps, mapDispatchToProps) (AddVacansie);

export default AddVacansieContainer;
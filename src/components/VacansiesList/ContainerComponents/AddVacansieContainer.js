import React from "react";
import { connect } from "react-redux";
import { AddVacansieActionCreator, ChangeVacansieActionCreator, EditedVacansiesActionCreator, GetIDVacansieActionCreator, SendVacansieActionCreator } from "../../../redux/vacansies-reducer";
import AddVacansie from "../PresentationComponents/AddVacansie";

let mapStateToProps = (state) => {
    return {
        ID: state.vacansiesPage.ID,
        vacansies: state.vacansiesPage.vacansies,
        newVacTitle: state.vacansiesPage.newVacTitle,
        newVacSalery: state.vacansiesPage.newVacSalery,
        newVacExp: state.vacansiesPage.newVacExp,
        newVacText: state.vacansiesPage.newVacText,
        editedVacansie: state.vacansiesPage.editedVacansie,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddVacansie: (user) => {
            dispatch(AddVacansieActionCreator(user))
        },
        ChangeVacansie: (titleVac, salaryVac, expVac, textVac) => {
            dispatch(ChangeVacansieActionCreator(titleVac, salaryVac, expVac, textVac))
        },
        GetID: (ID) => {
            dispatch(GetIDVacansieActionCreator(ID))
        },
        EditedVacansie: (vacansie) => {
            dispatch(EditedVacansiesActionCreator(vacansie))
        },
    }
}

const AddVacansieContainer = connect(mapStateToProps, mapDispatchToProps) (AddVacansie);

export default AddVacansieContainer;
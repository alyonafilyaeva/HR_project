import React from "react";
import { connect } from "react-redux";
import { AddVacansieActionCreator, ChangeVacansieActionCreator, EditedVacansiesActionCreator, GetIDVacansieActionCreator, SendVacansieActionCreator } from "../../../redux/vacansies-reducer";
import AddVacansie from "../PresentationComponents/AddVacansie";

let mapStateToProps = (state) => {
    return {
        ID: state.vacansiesPage.ID,
        vacansies: state.vacansiesPage.vacansies,
        newVacTitle: state.vacansiesPage.newVacTitle,
        newVacSaleryFrom: state.vacansiesPage.newVacSaleryFrom,
        newVacSaleryTo: state.vacansiesPage.newVacSaleryTo,
        newVacExp: state.vacansiesPage.newVacExp,
        newVacText: state.vacansiesPage.newVacText,
        editedVacansie: state.vacansiesPage.editedVacansie,
        skills: state.skills,
        employment: state.vacansiesPage.employment,
        schedule: state.vacansiesPage.schedule
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddVacansie: (user) => {
            dispatch(AddVacansieActionCreator(user))
        },
        ChangeVacansie: (titleVac, salaryFromVac, salaryToVac, expVac, textVac) => {
            dispatch(ChangeVacansieActionCreator(titleVac, salaryFromVac, salaryToVac, expVac, textVac))
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
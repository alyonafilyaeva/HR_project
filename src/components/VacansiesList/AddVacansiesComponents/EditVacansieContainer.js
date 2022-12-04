import React from "react";
import { connect } from "react-redux";
import { EditVacansieActionCreator } from "../../../redux/vacansies-reducer";
import EditVacansie from "./EditVacansie";

let mapStateToProps = (state) => {
    return {
        user: state.profilePage.user,
        vacansiesPage: state.vacansiesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        EditVacansie: (vacansie) => {
            debugger;
            dispatch(EditVacansieActionCreator(vacansie))
        }

    }
}

let EditVacansieContainer = connect(mapStateToProps, mapDispatchToProps) (EditVacansie);

export default EditVacansieContainer;
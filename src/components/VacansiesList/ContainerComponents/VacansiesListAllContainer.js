import React from "react";
import { connect } from "react-redux";
import VacansiesListAll from "../PresentationComponents/VacansiesListAll"
import { SetVacansiesActionCreator } from "../../../redux/vacansies-reducer";

let mapStateToProps = (state) => {
    return {
        vacansiesPage: state.vacansiesPage,
        vacansies: state.vacansiesPage.vacansies
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setVacansies: (vacansies) => {
            dispatch(SetVacansiesActionCreator(vacansies))
        }
    }
}

let VacansiesListAllContainer = connect(mapStateToProps, mapDispatchToProps) (VacansiesListAll);

export default VacansiesListAllContainer;




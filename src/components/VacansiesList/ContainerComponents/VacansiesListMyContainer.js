import React from "react";
import { connect } from "react-redux";
import VacansiesListAll from "../PresentationComponents/VacansiesListAll"
import { SetVacansiesActionCreator } from "../../../redux/vacansies-reducer";
import VacansiesListMy from "../PresentationComponents/VacansiesListMy";

let mapStateToProps = (state) => {
    return {
        vacansiesPage: state.vacansiesPage,
        vacansies: state.vacansiesPage.vacansies
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setVacansies: (vacansies) => {
            debugger;
            dispatch(SetVacansiesActionCreator(vacansies))
        }
    }
}
debugger;

let VacansiesListMyContainer = connect(mapStateToProps, mapDispatchToProps) (VacansiesListMy);

export default VacansiesListMyContainer;




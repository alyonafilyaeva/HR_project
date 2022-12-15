import React from "react";
import { connect } from "react-redux";
import { SetVacansiesActionCreator } from "../../../redux/vacansies-reducer";
import { ChangeSortActionCreator } from "../../../redux/vacansies-sorts-reducer";
import SortsVacansies from "../PresentationComponents/SortsVacansies";

let mapStateToProps = (state) => {
    return {
        vacansiesPage: state.vacansiesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setVacansies: (vacansies) => {
            dispatch(SetVacansiesActionCreator(vacansies))
        },
        changeSorts: (sortValue, salaryValue, expValue, depValue) => {
            dispatch(ChangeSortActionCreator(sortValue, salaryValue, expValue, depValue))
        }
    }
}

let SortsVacansiesContainer = connect(mapStateToProps, mapDispatchToProps) (SortsVacansies);

export default SortsVacansiesContainer;
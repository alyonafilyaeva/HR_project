import React from "react";
import { connect } from "react-redux";
import ActiveVacansie from "./ActivVacansie";


let mapStateToProps = (state) => {
    return {
        vacansie: state.vacansiesPage.vacansies[0],
    }
}

/* let mapDispatchToProps = (dispatch) => {
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
} */

const ActiveVacansieContainer = connect(mapStateToProps) (ActiveVacansie);

export default ActiveVacansieContainer;
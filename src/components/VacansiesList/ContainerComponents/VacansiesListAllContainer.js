import React from "react";
import { connect } from "react-redux";
import VacansiesListAll from "../PresentationComponents/VacansiesListAll"
import { SetSkillsActionCreator, SetVacansiesActionCreator } from "../../../redux/vacansies-reducer";

let mapStateToProps = (state) => {
    return {
        vacansiesPage: state.vacansiesPage,
        vacansies: state.vacansiesPage.vacansies,
        skills: state.skills
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setVacansies: (vacansies) => {
            dispatch(SetVacansiesActionCreator(vacansies))
        },
        setSkills: (skills) => {
            dispatch(SetSkillsActionCreator(skills))
        }
    }
}

let VacansiesListAllContainer = connect(mapStateToProps, mapDispatchToProps) (VacansiesListAll);

export default VacansiesListAllContainer;




import React from "react";
import { connect } from "react-redux";
import Vacansies from "./Vacansies";
import { SetVacansiesActionCreator } from "../redux/vacansies-reducer";
import { SetSkillsActionCreator } from "../redux/vacansies-reducer";

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

let VacansiesContainer = connect(mapStateToProps, mapDispatchToProps) (Vacansies);

export default VacansiesContainer;
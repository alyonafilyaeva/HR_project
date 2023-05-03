import React from "react";
import { connect } from "react-redux";

import {SetProfileActionCreator} from "../../redux/profile-reducer"
import Skills from "./Skills";
import { SetSkillsActionCreator } from "../../redux/skills-reducer";

let mapStateToProps = (state) => {
    return {
        vacansiesPage: state.vacansiesPage,
        skills: state.skills
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setSkills: (skills) => {
            dispatch(SetSkillsActionCreator(skills))
        }
    }
}

let SkillsContainer = connect(mapStateToProps, mapDispatchToProps) (Skills);

export default SkillsContainer;
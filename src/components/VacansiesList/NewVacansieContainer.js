import React from "react";
import { connect } from "react-redux";
import newVacansie from "./NewVacansie";

let mapStateToProps = (state) => {
    return {
        vacansiesPage: state.vacansiesPage,
        vacansies: state.vacansiesPage.vacansies
    }
}

debugger;

let NewVacansieContainer = connect(mapStateToProps) (newVacansie);

export default NewVacansieContainer;




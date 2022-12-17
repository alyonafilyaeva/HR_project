import React from "react";
import { connect } from "react-redux";
import { setVacansiesRequestsActionCreator } from "../../redux/requests-reducer";
import VacansiesList from "./VacansiesList";

let mapStateToProps = (state) => {
    return {
        requestsPage: state.requestsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setVacansiesRequests: (request) => {
            dispatch(setVacansiesRequestsActionCreator(request))
        }
    }
}

let VacansiesListContainer = connect(mapStateToProps, mapDispatchToProps) (VacansiesList);

export default VacansiesListContainer;
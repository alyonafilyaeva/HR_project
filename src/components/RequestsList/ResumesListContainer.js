import React from "react";
import { connect } from "react-redux";
import { setVacansiesRequestsActionCreator } from "../../redux/requests-reducer";
import ResumesList from "./ResumesList";
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

let ResumesListContainer = connect(mapStateToProps, mapDispatchToProps) (ResumesList);

export default ResumesListContainer;
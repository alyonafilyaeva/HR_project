import React from "react";
import { connect } from "react-redux";
import VacansiesListAll from "./VacansiesListAll"
import { SetVacansiesActionCreator } from "../../redux/vacansies-reducer";

/* function VacansiesListAllContainer() {
    return <StoreContext.Consumer>
            { (store) => {
                return <VacansiesListAll vacansiesPage={store.getState().vacansiesPage} /> }
            }
        </StoreContext.Consumer>
    
} */

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

let VacansiesListAllContainer = connect(mapStateToProps, mapDispatchToProps) (VacansiesListAll);

export default VacansiesListAllContainer;




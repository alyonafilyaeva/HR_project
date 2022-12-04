import ActiveVacansie from "./ActivVacansie";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        user: state.profilePage.user,
        vacansies: state.vacansiesPage.vacansies
    }
}

let ActiveVacansieContainer = connect(mapStateToProps) (ActiveVacansie);

export default ActiveVacansieContainer;
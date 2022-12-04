import { connect } from "react-redux";
import Vacansies from "./Vacansies";

let mapStateToProps = (state) => {
    return {
        vacansiesPage: state.vacansiesPage,
        user: state.profilePage.user
    }
}

let VacansiesContainer = connect(mapStateToProps) (Vacansies);

export default VacansiesContainer;
import { connect } from "react-redux";
import ActiveResume from "./ActiveResume";

let mapStateToProps = (state) => {
    return {
        user: state.profilePage.user,
        resumes: state.resumesPage.resumes
    }
}

let ActiveResumeContainer = connect(mapStateToProps) (ActiveResume);

export default ActiveResumeContainer;
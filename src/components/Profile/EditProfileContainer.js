import { connect } from "react-redux";
import Profile from "./Profile"
import {ChangeProfileActionCreator} from "../../redux/profile-reducer"
import EditProfile from "./EditProfile";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        user: state.profilePage.user,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        
        ChangeProfile: (nameProfile, emailProfile) => {
            dispatch(ChangeProfileActionCreator(nameProfile, emailProfile))
        }
    }
}

let EditProfileContainer = connect(mapStateToProps, mapDispatchToProps) (EditProfile);

export default EditProfileContainer;
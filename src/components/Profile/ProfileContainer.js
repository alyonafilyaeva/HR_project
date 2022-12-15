import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile"
import {SetProfileActionCreator} from "../../redux/profile-reducer"

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => {
            dispatch(SetProfileActionCreator(user))
        }
    }
}

let ProfileContainer = connect(mapStateToProps, mapDispatchToProps) (Profile);

export default ProfileContainer;
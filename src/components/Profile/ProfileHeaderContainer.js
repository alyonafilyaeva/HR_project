import React from "react";
import { connect } from "react-redux";
import ProfileHeader from "./ProfileHeader";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

let ProfileHeaderContainer = connect(mapStateToProps) (ProfileHeader);

export default ProfileHeaderContainer;

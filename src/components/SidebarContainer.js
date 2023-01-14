import React from "react";
import { connect } from "react-redux";
import { ChangeSidebarActionCreator } from "../redux/sidebar-reducer";
import Sidebar from "./Sidebar";

let mapStateToProps = (state) => {
    return {
        isOpen: state.sidebar.isOpen
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        ChangeSidebar: (isOpen) => {
            dispatch(ChangeSidebarActionCreator( isOpen))
        }
    }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps) (Sidebar);

export default SidebarContainer;
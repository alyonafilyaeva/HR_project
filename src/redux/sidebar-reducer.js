const CHANGE_SIDEBAR = 'CHANGE-SIDEBAR'

let initialState = {
    isOpen: false
}

const sidebarReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_SIDEBAR: {
            return {
                ...state,
                isOpen: action.isOpen
            }
        }
        default:
            return state
    }
}

export const ChangeSidebarActionCreator = (isOpen) => {
    return { type: CHANGE_SIDEBAR, isOpen: isOpen }
}

export default sidebarReducer;
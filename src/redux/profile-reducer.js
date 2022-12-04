let SET_USER = "SET-USER"

let initialState = {
    user: {
        "department": "front",
        "email": "head@head.head",
        "full_name": "Петр Петрович",
        "id": 11,
        "image": null,
        "is_admin": false,
        "is_header_dep": true
    }
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export const SetProfileActionCreator = (user) => {
    debugger;
    return { type: SET_USER, user: user }
}

export default profileReducer;
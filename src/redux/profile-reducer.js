let SET_USER = "SET-USER"
let CHANGE_PROFILE = "CHANGE-PROFILE"

let initialState = {
    user: {
        "department": "front",
        "email": "head@head.head",
        "full_name": "Петр Петрович",
        "id": 11,
        "image": null,
        "is_admin": false,
        "is_header_dep": true
    },
    newName: '',
    newEmail: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
                newName: action.user.full_name,
                newEmail: action.user.email
            }
            case CHANGE_PROFILE: {
                return {
                    ...state,
                    newName: action.name,
                    newEmail: action.email
                };
            }
        default:
            return state
    }
}

export const SetProfileActionCreator = (user) => {
    return { type: SET_USER, user: user }
}

export const ChangeProfileActionCreator = (nameProfile, emailProfile) => {
    return { type: CHANGE_PROFILE, name: nameProfile, email: emailProfile }
}

export default profileReducer;
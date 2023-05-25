import { act } from "react-dom/test-utils"

let SET_USER = "SET-USER"
let CHANGE_PROFILE = "CHANGE-PROFILE"

let initialState = {
    user: {
        "department": "front",
        "email": "head@head.head",
        "full_name": "Петр Петрович",
        "id": 11,
        "phone_number": 88005553535,
        "image": null,
        "is_admin": false,
        "is_header_dep": true
    },
    newName: '',
    newEmail: '',
    newTel: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
                newName: action.user.full_name,
                newEmail: action.user.email,
                newTel: action.user.phone_number
            }
            case CHANGE_PROFILE: {
                return {
                    ...state,
                    newName: action.name,
                    newEmail: action.email,
                    newTel: action.tel
                };
            }
        default:
            return state
    }
}

export const SetProfileActionCreator = (user) => {
    return { type: SET_USER, user: user }
}

export const ChangeProfileActionCreator = (nameProfile, emailProfile, telProfile) => {
    return { type: CHANGE_PROFILE, name: nameProfile, email: emailProfile, tel:  telProfile}
}

export default profileReducer;
const ADD_VACANSIE = 'ADD-VACANSIE'
const CHANGE_VACANSIE = 'CHANGE-VACANSIE'
const SET_VACANSIES = 'SET-VACANSIES'
const SEND_VACANSIE = 'SEND-VACANSIE'
const EDIT_VACANSIE = 'EDIT-VACANSIE'
const EDITED_VACANSIE = 'EDITED-VACANSIE'
const GET_ID = 'GET-ID'
const CHANGE_SORT = 'CHANGE-SORT'
const SET_SKILLS = 'SET-SKILLS'

let initialState = {
    vacansies: [
        {
            "id": 7,
            "user": "11",
            "department": "front",
            "title": "C# разработчик",
            "description": "Enim in duis ea consequat sunt Lorem aute. Est elit sunt quis officia reprehenderit do elit commodo eiusmod esse voluptate. Sit ipsum commodo sint voluptate culpa labore elit magna ullamco nostrud. Laboris magna magna anim labore mollit irure voluptate. Aute non magna aliqua aliqua sunt.",
            "exp_work": 2,
            "salary": 10000,
            "skills": [2, 3],
            "status": "published",
            "data_updated": "2022-10-29T22:48:07.747404+03:00"
        }
        

    ],
    /* newVacansie: [
        {
            newVacTitle: '',
            newVacSalery: '',
            newVacExp: '',
            newVacText: ''
        }
    ], */
    newVacTitle: '',
    newVacSalery: '',
    newVacExp: '',
    newVacText: '',
    ID: '',
    sort: '',
    salary: '',
    exp: '',
    dep: '',
    editedVacansie: {},
    skills: [{id: 1, name: 'JS1', status: 1}, {id: 2, name: 'JS2', status: 1}, {id: 3, name: 'JS3', status: 1}]
}
const vacansiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VACANSIE: {
            let newVac = {
                title: state.newVacTitle,
                salary: state.newVacSalery,
                exp_work: state.newVacExp,
                description: state.newVacText,
                user: action.user,
                status: "T_W"
            }
            return {
                ...state,
                vacansies: [...state.vacansies, newVac],
                newVacTitle: "",
                newVacSalery: "",
                newVacExp: "",
                newVacText: "",
            }
        }
        case CHANGE_VACANSIE: {
            return {
                ...state,
                newVacTitle: action.newTitle,
                newVacSalery: action.newSalery,
                newVacExp: action.newExp,
                newVacText: action.newText,
            }
        }
        case SET_VACANSIES:

            return {
                ...state,
                vacansies: action.vacansies
            }
        case SEND_VACANSIE:
            return {
                ...state,
                vacansies: action.vacansies
            }
        case EDIT_VACANSIE:

            return {
                ...state,
                newVacTitle: action.oldTitle,
                newVacSalery: action.oldSalery,
                newVacExp: action.oldExp,
                newVacText: action.oldText,
                
            }
        case GET_ID:

            return {
                ...state,
                ID: action.ID
            }
        case CHANGE_SORT:
            return {
                ...state,
                sort: action.sortValue,
                salary: action.salaryValue,
                exp: action.expValue,
                dep: action.depValue
            }
        case EDITED_VACANSIE:
            return {
                ...state,
                editedVacansie: action.vacansie
            }
        case SET_SKILLS:
            return {
                ...state,
                skills: action.skills
            }
        default:
            return state
    }
}

export const AddVacansieActionCreator = (user) => {
    return { type: ADD_VACANSIE, user: user }
}

export const ChangeVacansieActionCreator = (titleVac, salaryVac, expVac, textVac) => {
    return { type: CHANGE_VACANSIE, newTitle: titleVac, newSalery: salaryVac, newExp: expVac, newText: textVac }
}

export const EditVacansieActionCreator = (vacansie) => {
    return { type: EDIT_VACANSIE, oldTitle: vacansie.title, oldSalery: vacansie.salary, oldExp: vacansie.exp_work, oldText: vacansie.description }
}

export const SetVacansiesActionCreator = (vacansies) => {
    return { type: SET_VACANSIES, vacansies: vacansies }
}

export const GetIDVacansieActionCreator = (ID) => {
    return { type: GET_ID, ID: ID }
}

export const ChangeSortActionCreator = (sortValue, salaryValue, expValue, depValue) => {
    return { type: CHANGE_SORT, sortValue, salaryValue, expValue, depValue }
}

export const EditedVacansiesActionCreator = (vacansie) => {
    return { type: EDITED_VACANSIE, vacansie: vacansie }
}

export const SetSkillsActionCreator = (skills) => {
    return { type: SET_SKILLS, skills: skills }
}

export default vacansiesReducer;
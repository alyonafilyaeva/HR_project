const ADD_VACANSIE = 'ADD-VACANSIE'
const CHANGE_VACANSIE = 'CHANGE-VACANSIE'
const SET_VACANSIES = 'SET-VACANSIES'
const SEND_VACANSIE = 'SEND-VACANSIE'
const EDIT_VACANSIE = 'EDIT-VACANSIE'
const EDITED_VACANSIE = 'EDITED-VACANSIE'
const GET_ID = 'GET-ID'
const CHANGE_SORT = 'CHANGE-SORT'

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
            "status": "published",
            "data_updated": "2022-10-29T22:48:07.747404+03:00"
        },
        {
            "id": 13,
            "user": "11",
            "department": "front",
            "title": "Python dev",
            "description": "Enim in duis ea consequat sunt Lorem aute. Est elit sunt quis officia reprehenderit do elit commodo eiusmod esse voluptate. Sit ipsum commodo sint voluptate culpa labore elit magna ullamco nostrud. Laboris magna magna anim labore mollit irure voluptate. Aute non magna aliqua aliqua sunt.",
            "exp_work": 5,
            "salary": 10000,
            "status": "T_W",
            "data_updated": "2022-10-29T22:45:53.753629+03:00"
        },

        {
            "id": 5,
            "user": "11",
            "date": "06.09.2021",
            "title": "Тимлид",
            "salary": "200K",
            "exp_work": "6",
            "department": "Департамент 5",
            "headDepartment": "Иван Иванович Иванов",
            "description": "Ex sunt sunt aliqua reprehenderit aliqua occaecat. Minim anim commodo officia veniam proident aute cillum eu sunt aute nostrud. Laboris fugiat velit ut pariatur occaecat adipisicing pariatur occaecat. Duis sint enim et consectetur quis pariatur laborum excepteur. Ipsum aliquip qui laborum commodo consectetur do velit veniam occaecat. Ad nisi dolor cillum elit magna dolor voluptate ea. Enim in duis ea consequat sunt Lorem aute.\n\nEst elit sunt quis officia reprehenderit do elit commodo eiusmod esse voluptate. Sit ipsum commodo sint voluptate culpa labore elit magna ullamco nostrud. Laboris magna magna anim labore mollit irure voluptate. Aute non magna aliqua aliqua sunt. Velit mollit consectetur aliqua id tempor ut. Tempor cupidatat aliquip excepteur occaecat incididunt nulla Lorem sint.\n\nNon commodo anim deserunt in et aliquip incididunt ut consectetur sunt esse commodo deserunt et. Tempor fugiat laboris cillum laboris labore. Deserunt quis ad do labore amet culpa officia. Esse et officia nostrud tempor occaecat officia anim incididunt amet sunt excepteur Lorem. Aute occaecat magna velit nisi sit anim consequat velit qui pariatur. Esse incididunt id officia aliqua anim ut et.",
            "status": "T_W",
            "data_updated": "2022-10-29T22:45:53.753629+03:00"
        },

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
    editedVacansie: {}
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

export default vacansiesReducer;
const ADD_VACANSIE = 'ADD-VACANSIE'
const CHANGE_VACANSIE = 'CHANGE-VACANSIE'
const SET_VACANSIES = 'SET-VACANSIES'
const FILTER_VACANSIES = 'FILTER-VACANSIES'

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
    filtredVacansies: [],
    /* newVacansie: [
        {
            newVacTitle: '',
            newVacSalery: '',
            newVacExp: '',
            newVacText: ''
        }
    ] */
    newVacTitle: '',
    newVacSalery: '',
    newVacExp: '',
    newVacText: ''
}
const vacansiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VACANSIE: {
            let newVac = {
                id: "8",
                date: "03.11.2022",
                title: state.newVacTitle,
                salary: state.newVacSalery,
                exp_work: state.newVacExp,
                description: state.newVacText,
                status: "unpublished"
            }
            return {
                ...state,
                vacansies: [...state.vacansies, newVac],
                /* newVacTitle: "",
                newVacSalery: "",
                newVacExp: "",
                newVacText: "", */
            }
            /* state.vacansies.unshift(newVac);
            state.newVacTitle = action.newTitle
            state.newVacSalery = action.newSalery
            state.newVacExp = action.newExp
            state.newVacText = action.newText */

        }
        case CHANGE_VACANSIE: {
            return {
                ...state,
                newVacTitle: action.newTitle,
                newVacSalery: action.newSalery,
                newVacExp: action.newExp,
                newVacText: action.newText,
            }
            /* state.newVacTitle = action.newTitle
            state.newVacSalery = action.newSalery
            state.newVacExp = action.newExp
            state.newVacText = action.newText
            return state */
        }
        case SET_VACANSIES:
            debugger;
            return {
                ...state,
                vacansies: [...state.vacansies, action.vacansies]
            }
        case FILTER_VACANSIES:
            return {
                ...state,
                vacansies: [...state.vacansies].filter((vacansie) =>
                    vacansie.title.toLowerCase().includes(action.vacansies.toLowerCase())
                )
            };
        default:
            return state
    }
}

export const AddVacansieActionCreator = () => {
    return { type: ADD_VACANSIE }
}

export const ChangeVacansieActionCreator = (titleVac, salaryVac, expVac, textVac) => {
    return { type: CHANGE_VACANSIE, newTitle: titleVac, newSalery: salaryVac, newExp: expVac, newText: textVac }
}

export const SetVacansiesActionCreator = (vacansies) => {
    debugger;
    return { type: SET_VACANSIES, vacansies: vacansies }
}
export const FilterVacansiesActionCreator = (vacansies) => {
    
    return { type: FILTER_VACANSIES, vacansies: vacansies }
}

export default vacansiesReducer;
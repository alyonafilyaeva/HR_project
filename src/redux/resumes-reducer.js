const ADD_RESUME = 'ADD-RESUME'
const CHANGE_RESUME = 'CHANGE-RESUME'
const SET_RESUMES = 'SET-RESUMES'

let initialState = {
    resumes: [
        {
            "about_me": "<p>Условия:</p><ul><li></li><li></li></ul>",
            "data_updated": "2022-11-01T16:45:05.521955+05:00",
            "exp_work": 1,
            "file": null,
            "id": 7,
            "image": null,
            "salary": 2,
            "status": "T_W",
            "user": "16"
        },
    ],
    /* newResume: [
        {
            newResPost: '',
            newResSalery: '',
            newResExp: '',
            newResAbout: ''
        }
    ] */
    newResPost: '',
    newResSalery: '1',
    newResExp: '',
    newResAbout: ''
}
const resumesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RESUME: {
            let newRes = {
                id: "8",
                date: "03.11.2022",
                name: "Вася Пупкин",
                salary: state.newResSalery,
                exp_work: state.newResExp,
                about_me: state.newResAbout
            };
            return {
                ...state,
                resumes: [...state.resumes, newRes],
                newResSalery: "",
                newResExp: "",
                newResAbout: "",
            };
        }
        case CHANGE_RESUME: {
            return {
                ...state,
                newResPost: action.newPost,
                newResSalery: action.newSalery,
                newResExp: action.newExp,
                newResAbout: action.newAbout,
            };
        }
        case SET_RESUMES:
            debugger;
            return {
                ...state,
                resumes: action.resumes
            }

        default:
            return state;
    }
}

export const AddResumeActionCreator = () => {
    return { type: ADD_RESUME }
}

export const ChangeResumeActionCreator = (postRes, aboutRes, salaryRes, expRes) => {
    return { type: CHANGE_RESUME, newPost: postRes, newSalery: salaryRes, newExp: expRes, newAbout: aboutRes }
}

export const SetResumesActionCreator = (resumes) => {
    debugger;
    return { type: SET_RESUMES, resumes: resumes }
}

export default resumesReducer;
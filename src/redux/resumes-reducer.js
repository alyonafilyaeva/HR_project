const ADD_RESUME = 'ADD-RESUME'
const CHANGE_RESUME = 'CHANGE-RESUME'
const SET_RESUMES = 'SET-RESUMES'
const EDIT_RESUME = 'EDIT-RESUME'
const GET_ID = 'GET-ID'

let initialState = {
    resumes: [
        {
            'about_me': "",
            'data_updated': "2022-12-03T23:11:30.692805+05:00",
            'exp_work': 3,
            'file': "http://127.0.0.1:8000/media/files/2022/12/03/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_%D0%BE%D1%82_2022-12-03_22-52-41.png",
            'id': 11,
            'image': null,
            'salary': 75000,
            'status': "Y_P",
            'user': 
                {   id: 27, 
                    full_name: 'Ещё Один Обычный Сотрудник Вот Такой', 
                    email: 'usual.user07@gmail.com'
                }
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
    newResSalery: '0',
    newResExp: '',
    newResAbout: '',
    newResFile: null,
    newResImg: null

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
                newResSalery: action.newSalery,
                newResExp: action.newExp,
                newResAbout: action.newAbout,
            };
        }
        case SET_RESUMES:
            return {
                ...state,
                resumes: action.resumes
            }
        case EDIT_RESUME:
            return {
                ...state,
                newResSalery: action.oldSalery,
                newResExp: action.oldExp,
                newResAbout: action.oldAbout,
                newResFile: action.oldFile,
                newResImg: action.oldImg

            }
        case GET_ID:
            return {
                ...state,
                ID: action.ID
            }
        default:
            return state;
    }
}

export const AddResumeActionCreator = () => {
    return { type: ADD_RESUME }
}

export const ChangeResumeActionCreator = ( salaryRes, expRes, aboutRes) => {
    return { type: CHANGE_RESUME, newSalery: salaryRes, newExp: expRes, newAbout: aboutRes }
}

export const EditResumeActionCreator = (resume) => {

    return { type: EDIT_RESUME,  oldSalery: resume.salary, oldExp: resume.exp_work, oldAbout: resume.about_me, oldFile: resume.file, oldImg: resume.image }
}

export const SetResumesActionCreator = (resumes) => {

    return { type: SET_RESUMES, resumes: resumes }
}

export const GetIDResumeActionCreator = (ID) => {
    return { type: GET_ID, ID: ID }
}

export default resumesReducer;
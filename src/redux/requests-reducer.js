const SET_REQUEST = 'SET-REQUEST'

let initialState = {
    requests: [{
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
    },],

}

const requestsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_REQUEST:
            return {
                ...state,
                requests: action.requests
            }
            default:
                return state;
    }
}

export const setVacansiesRequestsActionCreator = (requests) => {
    return { type: SET_REQUEST, requests: requests }
}

export default requestsReducer;
const SET_REQUEST = 'SET-REQUEST'

let initialState = {
    requests: [{
        "id":9,
        "destination":
        {"full_name":"Ещё Один Глава Вот Такой",
        "email":"headerofdepartment@gmail.com"},
        "status":"1",
        "data_created":"2022-12-16T13:30:33.552559+05:00",
        "addressee":27
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
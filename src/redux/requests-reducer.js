const SET_REQUEST = 'SET-REQUEST'

let initialState = {
    requests: [{
        "id": 9,
        "destination":
        {
            "full_name": "Ещё Один Глава Вот Такой",
            "email": "headerofdepartment@gmail.com"
        },
        "status": "1",
        "data_created": "2022-12-16T13:30:33.552559+05:00",
        "addressee": 27,
        "item":
        {
            "id": 2,
            "user": {
                "id": 3,
                "full_name": "Ещё Один Глава Вот Такой",
                "email": "headerofdepartment@gmail.com"
            },
            "title": "C# разработчик",
            "description": "Enim in duis ea consequat sunt Lorem aute. Est elit sunt quis officia reprehenderit do elit commodo eiusmod esse voluptate. Sit ipsum commodo sint voluptate culpa labore elit magna ullamco nostrud. Laboris magna magna anim labore mollit irure voluptate. Aute non magna aliqua aliqua sunt.",
            "exp_work": 2,
            "salary_from": 10000,
            "salary_to": 500000,
            "skills": [2, 3],
            "status": "published",
            "data_updated": "2022-10-29T22:48:07.747404+03:00"

        }
    },

    ],

}

const requestsReducer = (state = initialState, action) => {
    switch (action.type) {
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
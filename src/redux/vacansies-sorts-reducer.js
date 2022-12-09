const CHANGE_SORT = 'CHANGE-SORT'

const initialState = {
    sort: '',
    salary: '',
    exp: '',
    dep: ''
}

const vacansiesSortsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SORT:
            return {
                ...state,
                sort: action.sortValue,
                salary: action.salaryValue,
                exp: action.expValue,
                dep: action.depValue
            }
        default:
            return state;

    }
}

export const ChangeSortActionCreator = (sortValue, salaryValue, expValue, depValue) => {
    return { type: CHANGE_SORT, sortValue, salaryValue, expValue, depValue }
}

export default vacansiesSortsReducer;
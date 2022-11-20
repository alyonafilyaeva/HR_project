import { combineReducers, legacy_createStore} from '@reduxjs/toolkit'
import vacansiesReducer from './vacansies-reducer';
import resumesReducer from './resumes-reducer';

let reducers = combineReducers({
    vacansiesPage: vacansiesReducer,
    resumesPage: resumesReducer
});
let store = legacy_createStore(reducers);

export default store;
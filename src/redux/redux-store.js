import { combineReducers, legacy_createStore} from '@reduxjs/toolkit'
import vacansiesReducer from './vacansies-reducer';
import resumesReducer from './resumes-reducer';
import profileReducer from './profile-reducer'

let reducers = combineReducers({
    vacansiesPage: vacansiesReducer,
    resumesPage: resumesReducer,
    profilePage: profileReducer
});
let store = legacy_createStore(reducers);

export default store;
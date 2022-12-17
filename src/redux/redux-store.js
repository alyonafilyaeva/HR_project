import { combineReducers, legacy_createStore} from '@reduxjs/toolkit'
import vacansiesReducer from './vacansies-reducer';
import resumesReducer from './resumes-reducer';
import profileReducer from './profile-reducer';
import requestsReducer from './requests-reducer';
import vacansiesSortsReducer from './vacansies-sorts-reducer';

let reducers = combineReducers({
    vacansiesPage: vacansiesReducer,
    resumesPage: resumesReducer,
    profilePage: profileReducer,
    requestsPage: requestsReducer,
    vacansiesSorts: vacansiesSortsReducer,
});
let store = legacy_createStore(reducers);

export default store;
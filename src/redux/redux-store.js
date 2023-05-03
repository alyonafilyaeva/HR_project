import { combineReducers, legacy_createStore} from '@reduxjs/toolkit'
import vacansiesReducer from './vacansies-reducer';
import resumesReducer from './resumes-reducer';
import profileReducer from './profile-reducer';
import requestsReducer from './requests-reducer';
import vacansiesSortsReducer from './vacansies-sorts-reducer';
import sidebarReducer from './sidebar-reducer';
import skillsReducer from './skills-reducer';

let reducers = combineReducers({
    vacansiesPage: vacansiesReducer,
    resumesPage: resumesReducer,
    profilePage: profileReducer,
    requestsPage: requestsReducer,
    vacansiesSorts: vacansiesSortsReducer,
    sidebar: sidebarReducer,
    skills: skillsReducer
});
let store = legacy_createStore(reducers);

export default store;
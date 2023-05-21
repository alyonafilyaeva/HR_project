const SET_SKILLS = 'SET-SKILLS'

let initialState = {
    skills: [{id: 1, name: 'JS', status: 1}, {id: 2, name: 'React', status: 1}, {id: 3, name: 'Работа в команде', status: 1}, {id: 4, name: 'Python', status: 1}]
}

const skillsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SKILLS:
            return {
                ...state,
                skills: action.skills
            }
        default:
            return state
    }
}

export const SetSkillsActionCreator = (skills) => {
    return { type: SET_SKILLS, skills: skills }
}

export default skillsReducer;
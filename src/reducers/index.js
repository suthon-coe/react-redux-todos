import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    todos,
    visibilityFilter,
    counter: (state = 0, action) => {
        if(action.type == 'INC')
            return state + 1
        return state
    }
})
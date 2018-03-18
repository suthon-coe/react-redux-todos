import { VisibilityFilters, setVisibilityFilter } from "../actions";
import { handleActions } from 'redux-actions';

/*const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    if(action.type == 'SET_VISIBILITY_FILTER'){
        return action.filter
    }
    return state
}*/

const visibilityFilter = handleActions({
    [setVisibilityFilter](state, {payload : {filter}}){
        return filter
    }
}, VisibilityFilters.SHOW_ALL)

export default visibilityFilter; 
import { createActions } from 'redux-actions'

let nextTodoId = 3
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    completed: false, 
    text
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const  VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter: filter || VisibilityFilters.SHOW_ALL
})*/

export const { setVisibilityFilter } = createActions({
    SET_VISIBILITY_FILTER: (filter = VisibilityFilters.SHOW_ALL) => ({filter})
})


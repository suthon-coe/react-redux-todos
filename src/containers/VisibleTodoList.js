import React, {Component} from 'react'
import TodoList from '../components/TodoList';
import {connect} from 'react-redux';
import { toggleTodo, VisibilityFilters } from '../actions';
import { createSelector } from 'reselect';
const getVisibleTodos = (todos, filter) => {
    console.log('filtering...')
    switch(filter){            
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            return todos
    }
}
const todosSelector = (state) => state.todos
const visibilityFilterSelector = (state) => state.visibilityFilter
const getVisibileTodosSelector = createSelector([todosSelector, visibilityFilterSelector],
    (todos, visibilityFilter) => getVisibleTodos(todos, visibilityFilter)
)

const mapStateToProps = (state) => ({
    todos: getVisibileTodosSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
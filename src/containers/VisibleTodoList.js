import React, {Component} from 'react'
import TodoList from '../components/TodoList';
import {connect} from 'react-redux';
import { toggleTodo } from '../actions';

const mapStateToProps = (state) => ({todos: state.todos})
const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
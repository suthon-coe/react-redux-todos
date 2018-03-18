import React, {Component} from 'react'
import TodoList from '../components/TodoList';
import {connect} from 'react-redux';
import { toggleTodo } from '../actions';
class VisibleTodoList extends Component {
    render(){
        return <TodoList {...this.props}/>
    }
}
const mapStateToProps = (state) => ({todos: state})
const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList);
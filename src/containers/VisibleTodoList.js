import React, {Component} from 'react'
import TodoList from '../components/TodoList';
import {connect} from 'react-redux';
class VisibleTodoList extends Component {
    render(){
        return <TodoList todos={this.props.todos}/>
    }
}
const mapStateToProps = (state) => ({todos: state})
export default connect(mapStateToProps)(VisibleTodoList);
import React, { Component } from 'react';
import VisibleTodoList from './containers/VisibleTodoList';
import AddTodo from './containers/AddTodo';
import VisibilityFilterBar from './containers/VisibilityFilterBar';

class App extends Component {
  render() {
    return (
      <div>
        <VisibleTodoList/>
        <VisibilityFilterBar/>
        <AddTodo/>
      </div>
    );
  }
}

export default App;

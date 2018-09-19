import React, { Component } from 'react';
// import Count from './components/count/index';
// import Todo from './components/todo/index';
import TodoList from './components/todoList/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Count /> */}
        {/* <Todo /> */}
        <TodoList/>
      </div>
    );
  }
}

export default App;

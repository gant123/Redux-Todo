import React, { Component } from 'react';
import './App.css';
import Todos from './components/todos';
import { connect } from 'react-redux';
import TodoForm from './components/todoForm';
import { handleChange, addTodo, toggleCompleted } from './actions/todoActions';

class App extends Component {
  handleEvent(e) {
    this.props.handleChange(e.target.value);
  }
  render() {
    return (
      <div className="App">
        <Todos
          toggleCompleted={this.props.toggleCompleted}
          todos={this.props.todos}
        />
        <TodoForm
          handleChange={this.handleEvent.bind(this)}
          addTodo={this.props.addTodo}
          inputText={this.props.inputText}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    inputText: state.inputText
  };
}

export default connect(
  mapStateToProps,
  { handleChange, addTodo, toggleCompleted }
)(App);

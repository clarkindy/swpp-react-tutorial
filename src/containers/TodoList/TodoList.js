import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Todo from '../../components/Todo/Todo';
import TodoDetail from '../../components/TodoDetail/TodoDetail';
import './TodoList.css';

class TodoList extends Component {
  state = {
    todos: [
      { id: 1, title: 'SWPP', content: 'take swpp class', done: true },
      { id: 2, title: 'Movie', content: 'watch movie', done: false },
      { id: 3, title: 'Dinner', content: 'eat dinner', done: false },
    ],
    selectedTodo: null,
  }

  clickTodoHandler(td) {
    if (this.state.selectedTodo === td) {
      this.setState({selectedTodo: null});
      // this.state.selectedTodo = null; // Do not do this
    } else {
      this.setState({selectedTodo: td});
    }
  }

  render() {
    let todoDetail = null;
    if (this.state.selectedTodo) {
      todoDetail = <TodoDetail
        title={this.state.selectedTodo.title}
        content={this.state.selectedTodo.content}
      />;
    }
    const todos = this.state.todos.map((td) => {
      return (
        <Todo
          key={td.id}
          title={td.title}
          done={td.done}
          clicked={() => this.clickTodoHandler(td)}
        />
      );
    });
    return (
      <div className="TodoList">
        <div className="title">{this.props.title}</div>
        <div className="todos">{todos}</div>
        {todoDetail}
        <NavLink to="/new-todo" exact>New Todo</NavLink>
      </div>
    );
  }
}

export default TodoList;
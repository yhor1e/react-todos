import React from 'react'
import './App.css'
import NewTodo from './NewTodo'
import Todos from './Todos'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { text: 'todo1', isEdit: false, isDone: false },
        { text: 'todo2', isEdit: false, isDone: true },
        { text: 'todo3', isEdit: false, isDone: false },
      ],
    }
  }
  handleKeyPressNewTodo(e) {
    if (e.key !== 'Enter') return
    const todos = [...this.state.todos]
    todos.push({ text: e.target.value, isEdit: false })
    this.setState({ todos: todos })
  }
  handleDoubleClickListItem(i) {
    const todos = [...this.state.todos]
    todos.forEach((todo) => (todo.isEdit = false))
    todos[i].isEdit = true
    this.setState({ todos: todos })
  }
  handleClickListItemCheckbox(i) {
    const todos = [...this.state.todos]
    todos[i].isDone = !todos[i].isDone
    this.setState({ todos: todos })
  }
  render() {
    return (
      <div className="App">
        <NewTodo onKeyPress={(e) => this.handleKeyPressNewTodo(e)} />
        <Todos
          todos={this.state.todos}
          onDoubleClick={(i) => this.handleDoubleClickListItem(i)}
          onClick={(i) => this.handleClickListItemCheckbox(i)}
        />
      </div>
    )
  }
}

export default App

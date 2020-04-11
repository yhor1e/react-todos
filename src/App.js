import React from 'react'
import './App.css'
import Todos from './Todos'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { id: 1, text: 'todo1', isEdit: false },
        { id: 2, text: 'todo2', isEdit: false },
        { id: 3, text: 'todo3', isEdit: false },
      ],
    }
  }
  handleDoubleClickListItem(i) {
    const todos = [...this.state.todos]
    todos.forEach((todo) => (todo.isEdit = false))
    todos.find((todo) => todo.id === i).isEdit = true
    this.setState({ todos: todos })
  }
  render() {
    return (
      <div className="App">
        <Todos
          todos={this.state.todos}
          onDoubleClick={(i) => this.handleDoubleClickListItem(i)}
        />
      </div>
    )
  }
}

export default App

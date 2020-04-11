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
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App

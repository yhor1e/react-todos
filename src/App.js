import React from 'react'
import './App.css'
import NewTodo from './NewTodo'
import Todos from './Todos'
import Todo from './Todo'

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
    e.target.value = ''
  }
  handleChangeItem(i, text) {
    const todos = [...this.state.todos]
    todos[i].text = text
    this.setState({ todos: todos })
  }
  handleBlurItem(i) {
    const todos = [...this.state.todos]
    todos.forEach((todo) => (todo.isEdit = false))
    this.setState({ todos: todos })
  }
  handleKeyPressItem(e, i) {
    if (e.key !== 'Enter') return
    this.handleBlurItem(i)
  }
  handleDoubleClickListItem(i) {
    const todos = [...this.state.todos]
    if (todos[i].isDone) return
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
    const listItems = this.state.todos.map((todo, index) => (
      <Todo
        key={index}
        text={todo.text}
        isEdit={todo.isEdit}
        isDone={todo.isDone}
        onDoubleClick={() => this.handleDoubleClickListItem(index)}
        onClick={() => this.handleClickListItemCheckbox(index)}
        onChange={(e) => this.handleChangeItem(index, e.target.value)}
        onBlur={(e) => this.handleBlurItem(index)}
        onKeyPress={(e) => this.handleKeyPressItem(e, index)}
      />
    ))

    return (
      <div className="App">
        <NewTodo onKeyPress={(e) => this.handleKeyPressNewTodo(e)} />
        <Todos>{listItems}</Todos>
      </div>
    )
  }
}

export default App

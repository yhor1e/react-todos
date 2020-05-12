import React from 'react'
import './App.css'
import NewTodo from './NewTodo'
import Todos from './Todos'
import Todo from './Todo'
import db from './db'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
  }
  componentDidMount(){
    db.todos.toArray()
      .then((todos) => {
        this.setState({ todos: todos });
      });
  }
  handleKeyPressNewTodo(e) {
    if (e.key !== 'Enter') return
    const todo = { text: e.target.value, isDone: false}
    db.todos.add(todo)
      .then((id) => {
        const todos = [...this.state.todos, Object.assign({}, todo, { id })];
        this.setState({ todos: todos });
      });
    e.target.value = ''
  }
  handleChangeItem(id, text) {
    db.todos.update(id, {text})
      .then(() => {
        const todos = [...this.state.todos]
        const todo = todos.find((todo)=>todo.id === id)
        todo.text = text
        this.setState({ todos: todos });
      });
  }
  handleBlurItem() {
    const todos = [...this.state.todos]
    todos.forEach((todo) => (todo.isEdit = false))
    this.setState({ todos: todos })
  }
  handleKeyPressItem(e, id) {
    if (e.key !== 'Enter') return
    this.handleBlurItem(id)
  }
  handleDoubleClickListItem(i) {
    const todos = [...this.state.todos]
    if (todos[i].isDone) return
    todos.forEach((todo) => (todo.isEdit = false))
    todos[i].isEdit = true
    this.setState({ todos: todos })
  }
  handleClickListItemCheckbox(e, id) {
    db.todos.update(id, { isDone: e.target.checked }).then(() => {
      const todos = [...this.state.todos]
      const todo = todos.find((todo) => todo.id === id)
      todo.isDone = !todo.isDone
      this.setState({ todos: todos })
    })
  }
  handleClickDeleteButton(id) {
    db.todos.delete(id)
      .then(() => {
        const todos = [...this.state.todos]
        todos.splice(todos.findIndex((todo)=>todo.id === id), 1)
        this.setState({ todos: todos });
      });
  }
  render() {
    const listItems = this.state.todos.map((todo, i) => (
      <Todo
        key={todo.id}
        text={todo.text}
        isEdit={todo.isEdit}
        isDone={todo.isDone}
        onDoubleClick={() => this.handleDoubleClickListItem(i)}
        onClick={(e) => this.handleClickListItemCheckbox(e, todo.id)}
        onClickDeleteButton={() => this.handleClickDeleteButton(todo.id)}
        onChange={(e) => this.handleChangeItem(todo.id, e.target.value)}
        onBlur={() => this.handleBlurItem()}
        onKeyPress={(e) => this.handleKeyPressItem(e, todo.id)}
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

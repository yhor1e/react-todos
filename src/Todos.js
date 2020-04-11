import React from 'react'
import Todo from './Todo'

class Todos extends React.Component {
  static defaultProps = {
    todos: [],
  }
  render() {
    const listItems = this.props.todos.map((todo) => (
      <Todo
        key={todo.id}
        text={todo.text}
        isEdit={todo.isEdit}
        onDoubleClick={() => this.props.onDoubleClick(todo.id)}
      />
    ))
    return <ul>{listItems}</ul>
  }
}

export default Todos

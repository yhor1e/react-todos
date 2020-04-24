import React from 'react'
import Todo from './Todo'

class Todos extends React.Component {
  static defaultProps = {
    todos: [],
  }
  render() {
    const listItems = this.props.todos.map((todo, index) => (
      <Todo
        key={index}
        text={todo.text}
        isEdit={todo.isEdit}
        isDone={todo.isDone}
        onDoubleClick={() => this.props.onDoubleClick(index)}
        onClick={() => this.props.onClick(index)}
      />
    ))
    return <ul>{listItems}</ul>
  }
}

export default Todos

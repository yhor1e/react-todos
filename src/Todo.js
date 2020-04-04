import React from 'react'

class Todo extends React.Component {
  render() {
    let content

    if (this.props.isEdit) {
      content = <input type="text" defaultValue={this.props.text} />
    } else {
      content = <p>{this.props.text}</p>
    }

    return <li onDoubleClick={this.props.onDoubleClick}>{content}</li>
  }
}

export default Todo

import React from 'react'

class Todo extends React.Component {
  render() {
    let content

    if (this.props.isEdit) {
      content = (
        <input
          type="text"
          defaultValue={this.props.text}
          onChange={this.props.onChange}
        />
      )
    } else {
      content = (
        <>
          <p onDoubleClick={this.props.onDoubleClick}>{this.props.text}</p>
          <input
            type="checkbox"
            defaultChecked={this.props.isDone}
            onClick={this.props.onClick}
          />
        </>
      )
    }
    return <li>{content}</li>
  }
}

export default Todo

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
          onBlur={this.props.onBlur}
          onKeyPress={this.props.onKeyPress}
        />
      )
    } else {
      content = (
        <>
          <p
            onDoubleClick={this.props.onDoubleClick}
            className={this.props.isDone ? 'done' : ''}
          >
            {this.props.text}
          </p>
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

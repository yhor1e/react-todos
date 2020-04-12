import React from 'react'

class NewTodo extends React.Component {
  render() {
    return <input onKeyPress={this.props.onKeyPress} />
  }
}

export default NewTodo

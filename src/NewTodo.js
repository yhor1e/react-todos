import React from 'react'

class NewTodo extends React.Component {
  render() {
    return <input onChange={this.props.onChange} />
  }
}

export default NewTodo

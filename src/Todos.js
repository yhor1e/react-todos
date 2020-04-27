import React from 'react'

class Todos extends React.Component {
  render() {
    return <ul>{this.props.children}</ul>
  }
}

export default Todos

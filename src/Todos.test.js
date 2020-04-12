import React from 'react'
//import jest from 'jest-mock'
import { shallow } from 'enzyme'

import Todos from './Todos'
describe('<Todos>', () => {
  it('should output a ul', () => {
    const wrapper = shallow(<Todos />)
    expect(wrapper.find('ul')).toHaveLength(1)
  })
  it('accepts a todos prop', () => {
    const todos = [{ text: 'todo1' }, { text: 'todo2' }]
    const wrapper = shallow(<Todos todos={todos} />)
    expect(wrapper.find('Todo')).toHaveLength(2)

    expect(wrapper.find('Todo').get(0).key).toEqual('0')
    expect(wrapper.find('Todo').get(0).props.text).toEqual('todo1')

    expect(wrapper.find('Todo').get(1).key).toEqual('1')
    expect(wrapper.find('Todo').get(1).props.text).toEqual('todo2')
  })
  test.todo('accepts a todos prop')
})

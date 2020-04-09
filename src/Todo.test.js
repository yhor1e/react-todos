import React from 'react'
import jest from 'jest-mock'
import Todo from './Todo'
import { shallow } from 'enzyme'

describe('<Todo>', () => {
  it('should output a p', () => {
    const wrapper = shallow(<Todo />)
    expect(wrapper.find('p')).toHaveLength(1)
  })

  it('should output a p and accepts a text prop', () => {
    const wrapper = shallow(<Todo text="todo" />)
    expect(wrapper.find('p')).toHaveLength(1)
    expect(wrapper.text()).toEqual('todo')
  })

  it('should output a input (accepts a isEdit prop)', () => {
    const wrapper = shallow(<Todo isEdit={true} />)
    expect(wrapper.find('input')).toHaveLength(1)
  })

  it('should output a input and accepts a text prop', () => {
    const wrapper = shallow(<Todo isEdit={true} text="todo" />)
    expect(wrapper.find('input')).toHaveLength(1)
    expect(wrapper.find('input').props().value).toEqual('todo')
  })

  it('accepts a onDoubleClick prop', () => {
    const mockClick = jest.fn()
    const wrapper = shallow(<Todo onDoubleClick={mockClick} />)
    wrapper.find('li').simulate('dblclick')
    expect(mockClick).toHaveBeenCalled()
  })
})

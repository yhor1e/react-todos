import React from 'react'
import jest from 'jest-mock'
import NewTodo from './NewTodo'
import { shallow } from 'enzyme'

describe('<NewTodo>', () => {
  it('should output a input', () => {
    const wrapper = shallow(<NewTodo />)
    expect(wrapper.find('input')).toHaveLength(1)
  })

  it('accepts a onChange prop', () => {
    const mockKeyPress = jest.fn()
    const wrapper = shallow(<NewTodo onKeyPress={mockKeyPress} />)
    wrapper.find('input').simulate('keypress')
    expect(mockKeyPress).toHaveBeenCalled()
  })
})

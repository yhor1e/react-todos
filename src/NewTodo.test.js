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
    const mockChange = jest.fn()
    const wrapper = shallow(<NewTodo onChange={mockChange} />)
    wrapper.find('input').simulate('change')
    expect(mockChange).toHaveBeenCalled()
  })
})

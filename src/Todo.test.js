import React from 'react'
import jest from 'jest-mock'
import Todo from './Todo'
import { shallow } from 'enzyme'

describe('<Todo>', () => {
  it('should output a p', () => {
    const wrapper = shallow(<Todo />)
    expect(wrapper.find('p')).toHaveLength(1)
  })

  it('should output a input[type="checkbox"]', () => {
    const wrapper = shallow(<Todo />)
    expect(wrapper.find('input[type="checkbox"]')).toHaveLength(1)
  })

  it('should output a button', () => {
    const wrapper = shallow(<Todo />)
    expect(wrapper.find('button')).toHaveLength(1)
  })

  it('accepts a isDone prop', () => {
    const wrapper = shallow(<Todo isDone={true} />)
    expect(
      wrapper.find('input[type="checkbox"]').prop('defaultChecked')
    ).toEqual(true)
    expect(wrapper.find('p').prop('className')).toEqual('done')
  })

  it('accepts a onClickCheckbox prop', () => {
    const mockClick = jest.fn()
    const wrapper = shallow(<Todo onClick={mockClick} />)
    wrapper.find('input[type="checkbox"]').simulate('click')
    expect(mockClick).toHaveBeenCalled()
  })

  it('accepts a onClickDeleteButton prop', () => {
    const mockClick = jest.fn()
    const wrapper = shallow(<Todo onClickDeleteButton={mockClick} />)
    wrapper.find('button').simulate('click')
    expect(mockClick).toHaveBeenCalled()
  })

  it('accepts a onChange prop', () => {
    const mockChange = jest.fn()
    const wrapper = shallow(<Todo isEdit={true} onChange={mockChange} />)
    wrapper.find('input[type="text"]').simulate('change')
    expect(mockChange).toHaveBeenCalled()
  })

  it('accepts a onBlur prop', () => {
    const mockBlur = jest.fn()
    const wrapper = shallow(<Todo isEdit={true} onBlur={mockBlur} />)
    wrapper.find('input[type="text"]').simulate('blur')
    expect(mockBlur).toHaveBeenCalled()
  })

  it('accepts a onKeyPress prop', () => {
    const mockKeypress = jest.fn()
    const wrapper = shallow(<Todo isEdit={true} onKeyPress={mockKeypress} />)
    wrapper.find('input[type="text"]').simulate('keypress')
    expect(mockKeypress).toHaveBeenCalled()
  })

  it('should output a p and accepts a text prop', () => {
    const wrapper = shallow(<Todo text="todo" />)
    expect(wrapper.find('p')).toHaveLength(1)
    expect(wrapper.find('p').text()).toEqual('todo')
  })

  it('should output a input (accepts a isEdit prop)', () => {
    const wrapper = shallow(<Todo isEdit={true} />)
    expect(wrapper.find('input')).toHaveLength(1)
    expect(wrapper.find('input').props().autoFocus).toEqual(true)
  })

  it('should output a input and accepts a text prop', () => {
    const wrapper = shallow(<Todo isEdit={true} text="todo" />)
    expect(wrapper.find('input')).toHaveLength(1)
    expect(wrapper.find('input').props().defaultValue).toEqual('todo')
  })

  it('accepts a onDoubleClick prop', () => {
    const mockClick = jest.fn()
    const wrapper = shallow(<Todo onDoubleClick={mockClick} />)
    wrapper.find('li > p').simulate('dblclick')
    expect(mockClick).toHaveBeenCalled()
  })
})

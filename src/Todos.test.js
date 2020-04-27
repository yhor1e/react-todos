import React from 'react'
import { shallow } from 'enzyme'

import Todos from './Todos'
describe('<Todos>', () => {
  it('should output a ul', () => {
    const wrapper = shallow(<Todos />)
    expect(wrapper.find('ul')).toHaveLength(1)
  })
  it('should output children', () => {
    const wrapper = shallow(
      <Todos>
        <p>children</p>
      </Todos>
    )
    expect(wrapper.find('p')).toHaveLength(1)
    expect(wrapper.find('p').text()).toEqual('children')
  })
})

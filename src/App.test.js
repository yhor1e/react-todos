import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('<Todo>', () => {
  it('should output a p', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('div.App')).toHaveLength(1)
  })
})

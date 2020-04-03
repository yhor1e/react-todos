import React from 'React'
import { render } from '@testing-library/react'
import Todo from './Todo'

test('render Todo', () => {
  const { getByText } = render(<Todo />)
  const todoElement = getByText(/todo/i)
  expect(todoElement).toBeInTheDocument()
})

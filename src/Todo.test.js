import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import jest from 'jest-mock';
import Todo from './Todo'

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('<Todo>', () => {
  it('should output a p', () => {
    act(() => {
      render(<Todo />, container)
    })
    expect(container.querySelector('p')).toBeTruthy()
  })

  it('should output a p and accepts a text prop', () => {
    act(() => {
      render(<Todo text="todo" />, container)
    })
    expect(container.querySelector('p')).toBeTruthy()
    expect(container.textContent).toBe('todo')
  })

  it('should output a input (accepts a isEdit prop)', () => {
    act(() => {
      render(<Todo isEdit={true} />, container)
    })
    expect(container.querySelector('input')).toBeTruthy()
  })

  it('should output a input and accepts a text prop', () => {
    act(() => {
      render(<Todo isEdit={true} text="todo" />, container)
    })
    expect(container.querySelector('input')).toBeTruthy()
    expect(container.querySelector('input').value).toBe('todo')
  })

  it('accepts a dblClick prop', () => {
    const mockClick = jest.fn();
    act(() => {
      render(<Todo onDoubleClick={mockClick}/>, container)
    })
    container.querySelector('li').dispatchEvent(new MouseEvent('dblclick', {bubbles: true}))
    expect(mockClick).toHaveBeenCalled();
  })
    // act(() => {
    //   render(<Todo isEdit={true} />, container);
    // });
    // expect(container.textContent).toBe("Hello, Jenny!");

    // act(() => {
    //   render(<Hello name="Margaret" />, container);
    // });
    // expect(container.textContent).toBe("Hello, Margaret!");
})

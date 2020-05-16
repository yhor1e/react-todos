import React from 'react'
import { action } from '@storybook/addon-actions'
import Todo from '../Todo'
import { Button } from '@storybook/react/demo'

export default {
  title: 'Todo',
  component: Button,
}

export const Text = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
)

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀
    </span>
  </Button>
)

export const Basic = () => (
  <Todo
    text="text"
    onDoubleClick={action('clicked')}
    onClick={action('clicked')}
    onClickDeleteButton={action('clicked')}
    onChange={action('clicked')}
    onBlur={action('clicked')}
    onKeyPress={action('clicked')}
  />
)

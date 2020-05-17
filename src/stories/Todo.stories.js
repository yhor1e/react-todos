import React from 'react'
import { action } from '@storybook/addon-actions'
import Todo from '../Todo'
import { filename } from 'paths.macro'

export default {
  title: filename.replace('stories', ''),
  component: Todo,
}

export const basic = () => (
  <Todo
    text="text"
    onDoubleClick={action('double clicked')}
    onClick={action('clicked')}
    onClickDeleteButton={action('deleted')}
    onChange={action('text changed')}
    onBlur={action('blured')}
    onKeyPress={action('key pressed')}
  />
)

export const edit = () => (
  <Todo
    text="text"
    isEdit={true}
    onDoubleClick={action('clicked')}
    onClick={action('clicked')}
    onClickDeleteButton={action('clicked')}
    onChange={action('clicked')}
    onBlur={action('clicked')}
    onKeyPress={action('clicked')}
  />
)

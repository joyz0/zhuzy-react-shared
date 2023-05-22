import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useQueue } from '../src'

const Demo = () => {
  const { add, remove, first, last, size } = useQueue()
  return (
    <div>
      <ul>
        <li>first: {first}</li>
        <li>last: {last}</li>
        <li>size: {size}</li>
      </ul>
      <button onClick={() => add((last || 0) + 1)}>Add</button>
      <button onClick={() => remove()}>Remove</button>
    </div>
  )
}

const meta = {
  title: 'hook/useQueue',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

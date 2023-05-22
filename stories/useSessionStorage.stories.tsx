import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useSessionStorage } from '../src'

const Demo = () => {
  const [value, setValue] = useSessionStorage('hello-key', 'foo')

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={() => setValue('bar')}>bar</button>
      <button onClick={() => setValue('baz')}>baz</button>
    </div>
  )
}

const meta = {
  title: 'hook/useSessionStorage',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

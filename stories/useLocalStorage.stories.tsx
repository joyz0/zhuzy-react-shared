import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useLocalStorage } from '../src'

const Demo = () => {
  const [value, setValue] = useLocalStorage('hello-key', 'foo')
  const [removableValue, setRemovableValue, remove] =
    useLocalStorage('removeable-key')

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={() => setValue('bar')}>bar</button>
      <button onClick={() => setValue('baz')}>baz</button>
      <br />
      <br />
      <div>Removable Value: {removableValue}</div>
      <button onClick={() => setRemovableValue('foo')}>foo</button>
      <button onClick={() => setRemovableValue('bar')}>bar</button>
      <button onClick={() => remove()}>Remove</button>
    </div>
  )
}

const meta = {
  title: 'hook/useLocalStorage',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useMap } from '../src'

const Demo = () => {
  const [map, { set, remove, reset }] = useMap<{ [propName: string]: string }>({
    hello: 'there',
  })

  return (
    <div>
      <button onClick={() => set(String(Date.now()), new Date().toJSON())}>
        Add
      </button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => remove('hello')} disabled={!map.hello}>
        Remove 'hello'
      </button>
      <pre>{JSON.stringify(map, null, 2)}</pre>
    </div>
  )
}

const meta = {
  title: 'hook/useMap',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

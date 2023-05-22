import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useUpdateEffect } from '../src'

const Demo = () => {
  const [count, setCount] = React.useState(0)
  const [didUpdate, setDidUpdate] = React.useState(false)

  useUpdateEffect(() => {
    setDidUpdate(true)
  }, [count])

  return (
    <div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Count: {count}
      </button>
      <p>Updated: {didUpdate}</p>
    </div>
  )
}

const meta = {
  title: 'hook/useUpdateEffect',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

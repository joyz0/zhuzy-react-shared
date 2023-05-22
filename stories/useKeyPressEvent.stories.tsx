import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useKeyPressEvent } from '../src'

const Demo = () => {
  const [count, setCount] = React.useState(0)

  const increment = () => {
    console.log('INCREMENT')
    setCount((currentCount) => ++currentCount)
  }
  const decrement = () => {
    console.log('DECREMENT')
    setCount((currentCount) => --currentCount)
  }
  const reset = () => setCount(() => 0)

  useKeyPressEvent(']', increment)
  useKeyPressEvent('[', decrement)
  useKeyPressEvent('r', reset)

  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: `code {color: red}` }} />
      <p>
        Try pressing <code>[</code>, <code>]</code>, and <code>r</code> to see
        the count incremented and decremented.
      </p>
      <p>Count: {count}</p>
    </div>
  )
}

const meta = {
  title: 'hook/useKeyPressEvent',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useKey } from '../src'

const Demo = () => {
  const [count, setCount] = React.useState(0)

  const increment = () => setCount((currentCount) => ++currentCount)
  const decrement = () => setCount((currentCount) => --currentCount)
  const reset = () => setCount(() => 0)

  useKey(']', increment)
  useKey('[', decrement)
  useKey('r', reset)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '400px',
        margin: '40px auto',
      }}
    >
      <div style={{ width: '100%' }}>
        <style dangerouslySetInnerHTML={{ __html: `code {color: red}` }} />
        <p>
          Try pressing <code>[</code>, <code>]</code>, and <code>r</code> to see
          the count incremented and decremented.
        </p>
        <p>Count: {count}</p>
      </div>
    </div>
  )
}

const CounterDemo = () => {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount((currentCount) => ++currentCount)
  useKey('ArrowUp', increment)

  return <div>Press arrow up: {count}</div>
}

const meta = {
  title: 'hook/useKey',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

export const SimpleCounter: Story = {
  render: () => <CounterDemo />,
}

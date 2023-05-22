import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useInterval, useToggle } from '../src'

const Demo = () => {
  const [count, setCount] = React.useState(0)
  const [delay, setDelay] = React.useState(1000)
  const [isRunning, toggleIsRunning] = useToggle(true)

  useInterval(
    () => {
      setCount(count + 1)
    },
    isRunning ? delay : null,
  )

  return (
    <div>
      <div>
        delay:{' '}
        <input
          value={delay}
          onChange={(event) => setDelay(Number(event.target.value))}
        />
      </div>
      <h1>count: {count}</h1>
      <div>
        <button onClick={toggleIsRunning}>
          {isRunning ? 'stop' : 'start'}
        </button>
      </div>
    </div>
  )
}

const meta = {
  title: 'hook/useInterval',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

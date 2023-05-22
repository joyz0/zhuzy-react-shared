import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useLatest } from '../src'

const Demo = () => {
  const [count, setCount] = React.useState(0)
  const latestCount = useLatest(count)
  const timeoutMs = 3000

  function handleAlertClick() {
    setTimeout(() => {
      alert(`Latest count value: ${latestCount.current}`)
    }, timeoutMs)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleAlertClick}>
        Show alert in {timeoutMs / 1000}s
      </button>
    </div>
  )
}

const meta = {
  title: 'hook/useLatest',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

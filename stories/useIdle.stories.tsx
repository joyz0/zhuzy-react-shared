import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useIdle } from '../src'

const Demo = () => {
  const [idleDelay, setIdleDelay] = React.useState(3e3)
  const isIdle = useIdle(idleDelay)

  return (
    <div>
      Idle delay ms:{' '}
      <input
        type="number"
        value={idleDelay}
        onChange={({ target }) => setIdleDelay(+target.value)}
      />
      <div>User is idle: {isIdle ? 'Yes' : 'No'}</div>
    </div>
  )
}

const meta = {
  title: 'hook/useIdle',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

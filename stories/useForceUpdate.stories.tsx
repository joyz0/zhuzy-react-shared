import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useForceUpdate } from '../src'

const Demo = () => {
  const forceUpdate = useForceUpdate()

  return (
    <div>
      <button onClick={() => forceUpdate()}>强制更新</button>
    </div>
  )
}

const meta = {
  title: 'hook/useForceUpdate',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

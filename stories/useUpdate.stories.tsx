import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useUpdate } from '../src'

const Demo = () => {
  const update = useUpdate()
  return (
    <>
      <div>Time: {Date.now()}</div>
      <button onClick={update}>Update</button>
    </>
  )
}

const meta = {
  title: 'hook/useUpdate',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

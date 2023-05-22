import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useFirstMountState, useUpdate } from '../src'

const Demo = () => {
  const isFirstMount = useFirstMountState()
  const update = useUpdate()

  return (
    <div>
      <span>This component is just mounted: {isFirstMount ? 'YES' : 'NO'}</span>
      <br />
      <button onClick={update}>re-render</button>
    </div>
  )
}

const meta = {
  title: 'hook/useFirstMountState',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

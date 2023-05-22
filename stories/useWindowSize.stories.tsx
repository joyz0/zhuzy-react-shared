import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useWindowSize } from '../src'

const Demo = () => {
  const { width, height } = useWindowSize()

  return (
    <div>
      <div>width: {width}</div>
      <div>height: {height}</div>
    </div>
  )
}

const meta = {
  title: 'hook/useWindowSize',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

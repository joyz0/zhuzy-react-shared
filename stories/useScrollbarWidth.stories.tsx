import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useScrollbarWidth } from '../src'

const Demo = () => {
  const sbw = useScrollbarWidth()

  return (
    <div>
      {sbw === undefined
        ? `DOM is not ready yet, SBW detection delayed`
        : `Browser's scrollbar width is ${sbw}px`}
    </div>
  )
}

const meta = {
  title: 'hook/useScrollbarWidth',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

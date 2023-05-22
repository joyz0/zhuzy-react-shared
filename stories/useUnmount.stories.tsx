import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useUnmount } from '../src'

const Demo = () => {
  useUnmount(() => alert('UNMOUNTED'))

  return (
    <div>
      <code>useUnmount()</code> hook can be used to perform side-effects when
      component unmounts. This component will alert you when it is un-mounted.
    </div>
  )
}

const meta = {
  title: 'hook/useUnmount',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

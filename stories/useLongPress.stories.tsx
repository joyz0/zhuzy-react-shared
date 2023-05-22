import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useLongPress } from '../src'

const Demo = () => {
  const onLongPress = () => {
    console.log('calls callback after long pressing 300ms')
  }

  const defaultOptions = {
    isPreventDefault: true,
    delay: 300,
  }
  const longPressEvent = useLongPress(onLongPress, defaultOptions)

  return <button {...longPressEvent}>useLongPress</button>
}

const meta = {
  title: 'hook/useLongPress',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

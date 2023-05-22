import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useGeolocation } from '../src'

const Demo = () => {
  const state = useGeolocation()

  return <pre>{JSON.stringify(state, null, 2)}</pre>
}

const meta = {
  title: 'hook/useGeolocation',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

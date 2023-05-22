import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useEffectOnce } from '../src'

const Demo = () => {
  useEffectOnce(() => {
    console.log('Running effect once on mount')

    return () => {
      console.log('Running clean-up of effect on unmount')
    }
  })

  return <p>Open the developer console to see logs</p>
}

const meta = {
  title: 'hook/useEffectOnce',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

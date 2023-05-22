import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useMountedState } from '../src'

const Demo = () => {
  const isMounted = useMountedState()
  const [, updateState] = React.useState()

  // @ts-ignore
  requestAnimationFrame(updateState)

  return <div>This component is {isMounted() ? 'MOUNTED' : 'NOT MOUNTED'}</div>
}

const meta = {
  title: 'hook/useMountedState',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

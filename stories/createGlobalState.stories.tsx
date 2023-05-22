import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { createGlobalState } from '../src'

const useGlobalValue = createGlobalState<number>(0)

const CompA: React.FC = () => {
  const [value, setValue] = useGlobalValue()

  return <button onClick={() => setValue(value + 1)}>+</button>
}

const CompB: React.FC = () => {
  const [value, setValue] = useGlobalValue()

  return <button onClick={() => setValue(value - 1)}>-</button>
}

const Demo: React.FC = () => {
  const [value] = useGlobalValue()
  return (
    <div>
      <p>{value}</p>
      <CompA />
      <CompB />
    </div>
  )
}

const meta = {
  title: 'factory/createGlobalState',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

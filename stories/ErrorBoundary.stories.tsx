import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ErrorBoundary } from '../src'

const Child = ({ error }) => {
  if (error) {
    throw Error()
  }
  return <div>child</div>
}

const Demo = () => {
  return (
    <ErrorBoundary>
      <Child error />
    </ErrorBoundary>
  )
}

const meta = {
  title: 'components/ErrorBoundary',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

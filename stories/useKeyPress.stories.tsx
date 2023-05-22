import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useKeyPress } from '../src'

const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

const Demo = () => {
  const states: boolean[] = []
  for (const key of keys) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    states.push(useKeyPress(key)[0])
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '400px',
        margin: '40px auto',
      }}
    >
      <div style={{ width: '100%' }}>
        <div style={{ textAlign: 'center' }}>
          Try pressing numbers
          <br />
          {states.reduce(
            (s, pressed, index) =>
              s + (pressed ? (s ? ' + ' : '') + keys[index] : ''),
            '',
          )}
        </div>
      </div>
    </div>
  )
}

const meta = {
  title: 'hook/useKeyPress',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

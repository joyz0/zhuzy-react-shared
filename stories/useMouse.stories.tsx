import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useMouse } from '../src'

const Demo = () => {
  const ref = React.useRef(null)
  const state = useMouse(ref)

  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <br />
      <br />
      <div
        ref={ref}
        style={{
          position: 'relative',
          width: '400px',
          height: '400px',
          backgroundColor: 'whitesmoke',
        }}
      >
        <span
          style={{
            position: 'absolute',
            left: `${state.elX}px`,
            top: `${state.elY}px`,
            pointerEvents: 'none',
            transform: 'scale(4)',
          }}
        >
          🐭
        </span>
      </div>
    </>
  )
}

const meta = {
  title: 'hook/useMouse',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

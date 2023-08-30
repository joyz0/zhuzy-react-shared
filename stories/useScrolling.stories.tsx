import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useScrolling } from '../src'

const Demo = () => {
  const scrollRef = React.useRef(null)
  const scrolling = useScrolling(scrollRef)

  return (
    <>
      {<div>{scrolling ? 'Scrolling' : 'Not scrolling'}</div>}
      <br />
      <div
        ref={scrollRef}
        style={{
          width: '400px',
          height: '400px',
          backgroundColor: 'whitesmoke',
          overflow: 'scroll',
        }}
      >
        <div style={{ width: '2000px', height: '2000px' }}>Scroll me</div>
      </div>
    </>
  )
}

const meta = {
  title: 'hook/useScrolling',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { createBreakpoint } from '../src'

const useBreakpointA = createBreakpoint()
const useBreakpointB = createBreakpoint({
  mobileM: 350,
  laptop: 1024,
  tablet: 768,
})

const Demo = () => {
  const breakpointA = useBreakpointA()
  const breakpointB = useBreakpointB()
  return (
    <div>
      <p>{'try resize your window'}</p>
      <p>
        {
          'createBreakpoint() #default : { laptopL: 1440, laptop: 1024, tablet: 768 }'
        }
      </p>
      <p>{breakpointA}</p>
      <p>{'createBreakpoint({ mobileM: 350, laptop: 1024, tablet: 768 })'}</p>
      <p>{breakpointB}</p>
    </div>
  )
}

const meta = {
  title: 'factory/createBreakpoint',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

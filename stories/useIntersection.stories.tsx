import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useIntersection } from '../src'

const Spacer = () => (
  <div
    style={{
      width: '200px',
      height: '300px',
      backgroundColor: 'whitesmoke',
    }}
  />
)

const Demo = () => {
  const intersectionRef = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })

  return (
    <div
      style={{
        width: '400px',
        height: '400px',
        backgroundColor: 'whitesmoke',
        overflow: 'scroll',
      }}
    >
      Scroll me
      <Spacer />
      <div
        ref={intersectionRef}
        style={{
          width: '100px',
          height: '100px',
          padding: '20px',
          backgroundColor: 'palegreen',
        }}
      >
        {intersection && intersection.intersectionRatio < 1
          ? 'Obscured'
          : 'Fully in view'}
      </div>
      <Spacer />
    </div>
  )
}

const meta = {
  title: 'hook/useIntersection',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

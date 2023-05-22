import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useToggle, useFullscreen } from '../src'

const Demo = () => {
  const [show, toggle] = useToggle(false)
  const ref = React.useRef(null)
  const videoRef = React.useRef(null)
  const isFullScreen = useFullscreen(ref, show, {
    onClose: () => toggle(false),
    video: videoRef,
  })

  const controls = (
    <div style={{ background: 'white', padding: '20px' }}>
      <div>{isFullScreen ? 'is full screen' : 'not full screen'}</div>
      <button onClick={() => toggle()}>Toggle</button>
      <button onClick={() => toggle(true)}>set ON</button>
      <button onClick={() => toggle(false)}>set OFF</button>
    </div>
  )

  return (
    <div>
      <div
        ref={ref}
        style={{
          backgroundColor: isFullScreen ? 'black' : 'grey',
          width: 400,
          height: 300,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <video
          ref={videoRef}
          style={{ width: '70%' }}
          src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
          autoPlay={true}
        />
        {isFullScreen && controls}
      </div>

      <br />
      <br />

      {!isFullScreen && controls}
    </div>
  )
}

const meta = {
  title: 'hook/useFullscreen',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

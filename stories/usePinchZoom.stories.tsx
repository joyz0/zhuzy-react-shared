import type { Meta, StoryObj } from '@storybook/react'
import React, { useState, useEffect, useRef } from 'react'
import { ZoomState } from '../src/hooks/usePinchZoom'
import { usePinchZoom } from '../src'

const Demo = () => {
  const [scale, setState] = useState(1)
  const scaleRef = useRef(null)
  const { zoomingState, pinchState } = usePinchZoom(scaleRef)

  useEffect(() => {
    if (zoomingState === ZoomState.ZOOMING_IN) {
      // perform zoom in scaling
      setState(scale + 0.1)
    } else if (zoomingState === ZoomState.ZOOMING_OUT) {
      // perform zoom out in scaling
      setState(scale - 0.1)
    }
  }, [zoomingState, pinchState])

  return (
    <div ref={scaleRef}>
      <img
        src="https://www.olympus-imaging.co.in/content/000107506.jpg"
        style={{
          zoom: scale,
        }}
        alt="scale img"
      />
    </div>
  )
}

const meta = {
  title: 'hook/usePinchZoom',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

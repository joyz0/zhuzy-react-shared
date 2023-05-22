import type { Meta, StoryObj } from '@storybook/react'
import React, { useEffect } from 'react'
import { useRafState } from '../src'

const Demo = () => {
  const [state, setState] = useRafState({ x: 0, y: 0 })

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      setState({ x: event.clientX, y: event.clientY })
    }
    const onTouchMove = (event: TouchEvent) => {
      setState({
        x: event.changedTouches[0].clientX,
        y: event.changedTouches[0].clientY,
      })
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('touchmove', onTouchMove)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  return <pre>{JSON.stringify(state, null, 2)}</pre>
}

const meta = {
  title: 'hook/useRafState',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

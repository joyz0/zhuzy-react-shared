import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useSetState } from '../src'

const Demo = () => {
  const [state, setState] = useSetState<any>({})

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={() => setState({ hello: 'world' })}>hello</button>
      <button onClick={() => setState({ foo: 'bar' })}>foo</button>
      <button
        onClick={() => {
          setState((prevState) => ({
            count: prevState.count === undefined ? 0 : prevState.count + 1,
          }))
        }}
      >
        increment
      </button>
    </div>
  )
}

const meta = {
  title: 'hook/useSetState',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

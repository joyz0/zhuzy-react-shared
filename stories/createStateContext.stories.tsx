import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { createStateContext } from '../src'

const [useSharedText, SharedTextProvider] = createStateContext('')

const ComponentA = () => {
  const [text, setText] = useSharedText()
  return (
    <p>
      Component A:
      <br />
      <input
        type="text"
        value={text}
        onInput={(ev) => setText(ev.currentTarget.value)}
      />
    </p>
  )
}

const ComponentB = () => {
  const [text, setText] = useSharedText()
  return (
    <p>
      Component B:
      <br />
      <input
        type="text"
        value={text}
        onInput={(ev) => setText(ev.currentTarget.value)}
      />
    </p>
  )
}

const Demo = () => {
  return (
    <SharedTextProvider>
      <p>Those two fields share the same value.</p>
      <ComponentA />
      <ComponentB />
    </SharedTextProvider>
  )
}

const meta = {
  title: 'factory/createStateContext',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

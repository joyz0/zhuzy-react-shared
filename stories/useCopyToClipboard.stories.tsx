import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useCopyToClipboard } from '../src'

const Demo = () => {
  const [text, setText] = React.useState('')
  const [state, copyToClipboard] = useCopyToClipboard()

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button type="button" onClick={() => copyToClipboard(text)}>
        copy text
      </button>
      {state.error ? (
        <p>Unable to copy value: {state.error.message}</p>
      ) : (
        state.value && (
          <>
            <p>
              Copied {state.value}{' '}
              {state.noUserInteraction ? 'without' : 'with'} user interaction
            </p>
            <input type="text" placeholder="Paste it in here to check" />
          </>
        )
      )}
    </div>
  )
}

const meta = {
  title: 'hook/useCopyToClipboard',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

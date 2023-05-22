import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useSearchParam } from '../src'

const Demo = () => {
  const edit = useSearchParam('edit')

  return (
    <div>
      <div>edit: {edit || '🤷‍♂️'}</div>
      <div>
        <button
          onClick={() =>
            window.history.pushState(
              {},
              '',
              window.location.pathname + '?edit=123',
            )
          }
        >
          Edit post 123 (?edit=123)
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            window.history.pushState(
              {},
              '',
              window.location.pathname + '?edit=999',
            )
          }
        >
          Edit post 999 (?edit=999)
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            window.history.pushState({}, '', window.location.pathname)
          }
        >
          Close modal
        </button>
      </div>
    </div>
  )
}

const meta = {
  title: 'hook/useSearchParam',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

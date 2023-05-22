import type { Meta, StoryObj } from '@storybook/react'
import React, { useCallback } from 'react'
import { useEvent, useList } from '../src'

const Demo = () => {
  const [list, { push, clear }] = useList()

  const onKeyDown = useCallback(({ key }) => {
    if (key === 'r') {
      clear()
    }
    push(key)
  }, [])

  useEvent('keydown', onKeyDown)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '400px',
        margin: '40px auto',
      }}
    >
      <div style={{ width: '100%' }}>
        <p>
          Press some keys on your keyboard,{' '}
          <code style={{ color: 'tomato' }}>r</code> key resets the list
        </p>
        <pre>{JSON.stringify(list, null, 4)}</pre>
      </div>
    </div>
  )
}

const meta = {
  title: 'hook/useEvent',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {}

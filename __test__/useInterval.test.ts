import { renderHook } from '@testing-library/react-hooks'
import useInterval from '../src/hooks/useInterval'

let callback
let spyClearInterval
let spySetInterval

beforeEach(() => {
  callback = jest.fn()
  spyClearInterval = jest.spyOn(global, 'clearInterval')
  spySetInterval = jest.spyOn(global, 'setInterval')
})

beforeAll(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  callback.mockRestore()
  jest.clearAllTimers()
})

afterAll(() => {
  jest.useRealTimers()
})

it('should init hook with default delay', () => {
  const { result } = renderHook(() => useInterval(callback))

  expect(result.current).toBeUndefined()
  expect(spySetInterval).toHaveBeenCalledTimes(1)
  // if not delay provided, it's assumed as 0
  expect(spySetInterval).toHaveBeenCalledWith(expect.any(Function), 0)
})

it('should init hook with custom delay', () => {
  const { result } = renderHook(() => useInterval(callback, 5000))

  expect(result.current).toBeUndefined()
  expect(spySetInterval).toHaveBeenCalledTimes(1)
  expect(spySetInterval).toHaveBeenCalledWith(expect.any(Function), 5000)
})

it('should init hook without delay', () => {
  const { result } = renderHook(() => useInterval(callback, null))

  expect(result.current).toBeUndefined()
  // if null delay provided, it's assumed as no delay
  expect(spySetInterval).not.toHaveBeenCalled()
})

it('should repeatedly calls provided callback with a fixed time delay between each call', () => {
  renderHook(() => useInterval(callback, 200))
  expect(callback).not.toHaveBeenCalled()

  // fast-forward time until 1s before it should be executed
  jest.advanceTimersByTime(199)
  expect(callback).not.toHaveBeenCalled()

  // fast-forward until 1st call should be executed
  jest.advanceTimersByTime(1)
  expect(callback).toHaveBeenCalledTimes(1)

  // fast-forward until next timer should be executed
  jest.advanceTimersToNextTimer()
  expect(callback).toHaveBeenCalledTimes(2)

  // fast-forward until 3 more timers should be executed
  jest.advanceTimersToNextTimer(3)
  expect(callback).toHaveBeenCalledTimes(5)
})

it('should clear interval on unmount', () => {
  const { unmount } = renderHook(() => useInterval(callback, 200))
  const initialTimerCount = jest.getTimerCount()
  expect(spyClearInterval).not.toHaveBeenCalled()

  unmount()

  expect(spyClearInterval).toHaveBeenCalledTimes(1)
  expect(jest.getTimerCount()).toBe(initialTimerCount - 1)
})

it('should handle new interval when delay is updated', () => {
  let delay = 200
  const { rerender } = renderHook(() => useInterval(callback, delay))
  expect(callback).not.toHaveBeenCalled()

  // fast-forward initial delay
  jest.advanceTimersByTime(200)
  expect(callback).toHaveBeenCalledTimes(1)

  // update delay by increasing previous one
  delay = 500
  rerender()

  // fast-forward initial delay again but this time it should not execute the cb
  jest.advanceTimersByTime(200)
  expect(callback).toHaveBeenCalledTimes(1)

  // fast-forward remaining time for new delay
  jest.advanceTimersByTime(300)
  expect(callback).toHaveBeenCalledTimes(2)
})

it('should clear pending interval when delay is updated', () => {
  let delay = 200
  const { rerender } = renderHook(() => useInterval(callback, delay))
  expect(spyClearInterval).not.toHaveBeenCalled()
  const initialTimerCount = jest.getTimerCount()

  // update delay while there is a pending interval
  delay = 500
  rerender()

  expect(spyClearInterval).toHaveBeenCalledTimes(1)
  expect(jest.getTimerCount()).toBe(initialTimerCount)
})

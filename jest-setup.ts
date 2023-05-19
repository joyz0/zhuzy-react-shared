import '@testing-library/jest-dom'
import 'jest-localstorage-mock'
import { isBrowser } from './src/utils'

if (isBrowser) {
  ;(window as any).ResizeObserver = class ResizeObserver {
    observe() {}

    disconnect() {}
  }
}

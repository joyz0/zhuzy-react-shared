import { scrollbarWidth } from '@xobotyi/scrollbar-width'
import { useEffect, useState } from 'react'

function useScrollbarWidth(): number | undefined {
  const [sbw, setSbw] = useState(scrollbarWidth())

  // this needed to ensure the scrollbar width in case hook called before the DOM is ready
  useEffect(() => {
    if (typeof sbw !== 'undefined') {
      return
    }

    const raf = requestAnimationFrame(() => {
      setSbw(scrollbarWidth())
    })

    return () => cancelAnimationFrame(raf)
  }, [])

  return sbw
}

export default useScrollbarWidth

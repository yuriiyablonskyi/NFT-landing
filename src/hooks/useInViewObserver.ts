import { useState, useRef, useEffect } from 'react'

const useElementInView = (options: IntersectionObserverInit) => {
  const [isInView, setIsInView] = useState<boolean>(false)
  const targetRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries
      setIsInView(entry.isIntersecting)
    }, options)

    const currentRef = targetRef.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options])

  return [targetRef, isInView] as const
}

export default useElementInView

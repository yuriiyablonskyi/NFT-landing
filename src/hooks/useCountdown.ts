import { useEffect, useState } from 'react'
import { CountdownValues } from '../../types'

export const useCountdown = (initialHours: number, initialMinutes: number, initialSeconds: number): CountdownValues => {
  const initialTime = initialHours * 3600 + initialMinutes * 60 + initialSeconds
  const [timeRemaining, setTimeRemaining] = useState(initialTime)

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime <= 0) {
          clearInterval(timerInterval)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timerInterval)
  }, [])

  const hours = Math.floor(timeRemaining / 3600)
  const minutes = Math.floor((timeRemaining % 3600) / 60)
  const seconds = timeRemaining % 60

  return { hours, minutes, seconds }
}

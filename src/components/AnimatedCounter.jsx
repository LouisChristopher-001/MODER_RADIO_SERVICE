import { useEffect, useState } from 'react'

export default function AnimatedCounter({ to = 100, duration = 1500, prefix = '', suffix = '' }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let start = 0
    const stepTime = Math.max(Math.floor(duration / to), 10)
    const timer = setInterval(() => {
      start += 1
      setValue((prev) => (prev < to ? start : to))
      if (start >= to) clearInterval(timer)
    }, stepTime)
    return () => clearInterval(timer)
  }, [to, duration])
  return <span>{prefix}{value}{suffix}</span>
}
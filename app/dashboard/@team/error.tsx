'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting sevice
    console.error(error)
  }, [error])

  return (
    <section className="h-96 w-96 border-lg p-4 bg-red-300">
      <h2 className="text-xl text-red-800">Team Error!</h2>

      <p>{error?.message}</p>
    </section>
  )
}

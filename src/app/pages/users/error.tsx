"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[69vh]">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Algo deu errado!</h2>
      <p className="text-gray-600 mb-6">Não foi possível carregar a lista de usuários.</p>
      <button onClick={() => reset()} className="bg-blue-600 rounded-lg text-white p-5 hover:bg-blue-700">
        Tentar novamente
      </button>
    </div>
  )
}


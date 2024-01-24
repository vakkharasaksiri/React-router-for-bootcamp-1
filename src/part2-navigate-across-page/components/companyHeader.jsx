import { useState } from "react"

export const CompanyHeader = props => {
  const { children } = props

  return (
    <>
      <header className="border-b px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold uppercase">Company Name</h1>
        <Counter />
      </header>
      <main className="mx-auto max-w-xl pt-8">
        {children}
      </main>
    </>
  )
}

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="flex space-x-4">
      <button
        className="bg-gray-100 rounded-md text-sm w-6 h-6"
        onClick={() => setCount(prev => prev - 1)}
      >-</button>
      <span>{count}</span>
      <button
        className="bg-gray-100 rounded-md text-sm w-6 h-6"
        onClick={() => setCount(prev => prev + 1)}
      >+</button>
    </div>
  )
}
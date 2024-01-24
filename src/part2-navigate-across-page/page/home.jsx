import { useRef } from 'react'
import { Link } from 'react-router-dom'

import { CompanyHeader } from "../components/companyHeader"
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const onClick = () => {
    const value = inputRef.current?.value

    if (value === 'secret')
      navigate('/b')
    else
      alert('invalid secret')
  }

  return (
    <CompanyHeader>
      <h1 className="text-2xl">Home page</h1>
      <section className="pt-4">
        <h2 className="text-lg font-bold">Regular navigation</h2>
        <div className="space-x-4">
          <a href="/a" className="underline text-blue-500 text-lg">via {'<a>'}</a>
          <Link to="/a" className="underline text-blue-500 text-lg">via {'<Link>'}</Link>
        </div>
      </section>
      <section className="pt-4">
        <h2 className="text-lg font-bold">Programatically</h2>
        <div className="flex space-x-4">
          <input ref={inputRef} className="max-w-sm border rounded px-2 py-0.5" type="password" placeholder='Password' />
          <button className="bg-black text-white rounded px-2 text-sm font-medium" onClick={onClick}>Submit</button>
        </div>
      </section>
    </CompanyHeader>
  )
}
import { Link } from "react-router-dom"

import { CompanyHeader } from "../components/companyHeader"

export const PageA = () => {
  return (
    <CompanyHeader>
      <h1 className="text-2xl">This is page A</h1>
      <Link to="/" className="underline text-blue-500 text-lg">Home</Link>
    </CompanyHeader>
  )
}
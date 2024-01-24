import { Link } from "react-router-dom"

import { CompanyHeader } from "../components/companyHeader"

export const PageB = () => {
  return (
    <CompanyHeader>
      <h1 className="text-2xl">This is page B</h1>
      <Link to="/" className="underline text-blue-500 text-lg">Home</Link>
    </CompanyHeader>
  )
}
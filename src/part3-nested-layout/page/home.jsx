import { CompanyHeader } from "../components/companyHeader"

export const Home = () => {
  return (
    <CompanyHeader>
      <h1 className="text-2xl">Home page</h1>
      <a href="/about" className="underline text-blue-500 text-lg">About</a>
    </CompanyHeader>
  )
}
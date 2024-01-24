import { CompanyHeader } from "../components/companyHeader"

export const About = () => {
  return (
    <CompanyHeader>
      <h1 className="text-2xl">About page</h1>
      <a href="/" className="underline text-blue-500 text-lg">Home</a>
    </CompanyHeader>
  )
}
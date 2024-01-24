import { Link } from 'react-router-dom'

import { CompanyHeader } from "../components/companyHeader"
import { contents } from '../constants/contents'

export const BlogList = () => {
  return (
    <CompanyHeader>
      <h1 className="text-2xl">List</h1>
      <div className="pt-4 space-y-4">
        {contents.map(content => (
          <Link to={"/blog/" + content.id} key={'blog-link-' + content.id}>
            <h2 className="text-lg font-bold underline">{content.title}</h2>
          </Link>
        ))}
      </div>
    </CompanyHeader>
  )
}
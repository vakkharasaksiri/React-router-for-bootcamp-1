import { Link, useParams } from "react-router-dom"

import { contents } from "../constants/contents"
import { CompanyHeader } from "../components/companyHeader"

export const BlogPost = () => {
  const params = useParams()
  const targetBlog = contents.find(content => content.id === params.id)

  console.log(params)

  return (
    <CompanyHeader>
      <h1 className="text-2xl">Post</h1>
      <span>ID: {params.id}</span>
      {targetBlog === undefined ? (
        <p>Not found</p>
      ) : <h1 className="font-bold text-lg">{targetBlog.title}</h1>}
      <Link to="/blog" className="underline">Back to listing</Link>
    </CompanyHeader>
  )
}
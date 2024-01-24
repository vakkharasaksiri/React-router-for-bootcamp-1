import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { BlogList } from './page/blogList'
import { BlogPost } from './page/blogPost'

const router = createBrowserRouter([
  {
    path: '/blog',
    element: <BlogList />,
  },
  {
    path: '/blog/:id',
    element: <BlogPost />
  }
])

export const App = () => <RouterProvider router={router} />

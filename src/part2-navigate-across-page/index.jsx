import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Home } from "./page/home"
import { PageA } from "./page/pageA"
import { PageB } from "./page/pageB"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/a',
    element: <PageA />,
  },
  {
    path: '/b',
    element: <PageB />,
  },
])

export const App = () => <RouterProvider router={router} />

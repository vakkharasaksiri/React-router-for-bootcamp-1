import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello world</h1>,
  },
  {
    path: '/about',
    element: <h1>About Page</h1>,
  },
])

export const App = () => <RouterProvider router={router} />

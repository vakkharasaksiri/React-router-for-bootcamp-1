import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './page/home'
import { About } from './page/about'

// import { CompanyHeader } from './components/companyHeader'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  // {
  //   element: <CompanyHeader />,
  //   children: [
  //     {
  //       path: '/',
  //       element: <Home />,
  //     },
  //     {
  //       path: '/about',
  //       element: <About />,
  //     },
  //   ],
  // }
])

export const App = () => <RouterProvider router={router} />

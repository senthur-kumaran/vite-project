import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'
import About from './About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

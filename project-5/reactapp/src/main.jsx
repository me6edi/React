import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello "/"</h1>
  },
  {
    path: '/about',
    element: <h1>I am About Path</h1>
  },
  {
    path: '/blog',
    element: <h1>I am Blog Path</h1>
  },
  {
    path: '/contact',
    element: <h1>I am Blog Path</h1>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

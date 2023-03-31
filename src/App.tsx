/* eslint-disable import/no-extraneous-dependencies */
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
// import ErrorFallback from './components/Error/ErrorFallback'

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

import './app.scss'

function Layout() {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/products/:id',
          element: <Products />
        },
        {
          path: '/product/:id',
          element: <Product />
        }
        // {
        //   path: '*',
        //   element: <ErrorFallback />
        // }
      ]
    }
  ])

  return (
    <h1>
      <RouterProvider router={router} />
    </h1>
  )
}

export default App

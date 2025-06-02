import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx'
import Products from './components/Products/Products.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Moreinfo from './components/Moreinfo/Moreinfo.jsx';
// import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>,
//     errorElement: <ErrorPage></ErrorPage>,
//     children:[
//       {    
//       path: '/home',
//       element: <Home></Home>
//       },
//       {
//         path: '/product',
//         element: <Products></Products>
//       },
//       {
//         path: '/blog',
//         element: <Blogs></Blogs>
//       },
//       {
//         path: '/about',
//         element: <About></About>
//       },
//       {
//         path: '/contact',
//         element: <Contact></Contact>
//       }
//     ]
//   },
//   {
//     path: '/home',
//     element: <Home></Home>
//   }
// ]);


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children:[
    {
    path: '/home',
    element: <Home></Home>
        },
    {
    path: '/product',
    loader: () => fetch('https://fakestoreapi.com/products'),
    element: <Products></Products>
    },
    {
    path: '/about',
    element: <About></About>
    },
    {
      path: '/product/:productID',
      loader: ({params}) => fetch(`https://fakestoreapi.com/products/${params.productID}`),
      element: <Moreinfo></Moreinfo>
    },
    {
    path: '/blog',
    element: <Blogs></Blogs>
    },
    
    {
    path: '/contact',
    element: <Contact></Contact>
  }
    ]
  }
]);




createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import ErrorPage from './errorPage/ErrorPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>
    
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

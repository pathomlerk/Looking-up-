import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Style from './components/Style/Style.jsx'
import Product from './components/Product/Product.jsx'
import Contact from './components/Contact/Contact.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Log/Login.jsx'
import Signup from './components/Signup/Signup.jsx'
import Quiz from './components/Quiz/Quiz.jsx'

const router = createBrowserRouter([
  {
    path: "/", element: <Home />
  },
  {
    path: "style", element:<Style/>
  },
  {
    path: "product", element:<Product/>
  },
  {
    path: "contact", element:<Contact/>
  },
  {
    path: "login", element:<Login/>
  },
  {
    path: "signup", element:<Signup/>
  },
  {
    path: "quiz", element:<Quiz/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Error from './Pages/Error';
import AddBook from './Pages/AddBook/AddBook';
import AllBook from './Pages/AllBook/AllBook';
import BorrowedBook from './Pages/BorrowedBook/BorrowedBook';
import Login from './Pages/Login/Login';
import Root from './Pages/Root/Root';
import Register from './Pages/Register/Register';
import AuthProvider, { AuthContext } from './AuthProvider/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
         path:'/addBook',
         element:<AddBook></AddBook>
      },
      {
        path:'/allBook',
         element:<AllBook></AllBook>
      },
      {
        path:'/borrowedBook',
        element:<BorrowedBook></BorrowedBook>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
   
  </React.StrictMode>,
)

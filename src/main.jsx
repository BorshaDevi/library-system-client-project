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
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Update from './Pages/Update/Update';
import BookList from './Pages/BookList/BookList';
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
         element:<PrivateRoute><AddBook></AddBook></PrivateRoute>
      },
      {
        path:'/allBook',
         element:<PrivateRoute><AllBook></AllBook></PrivateRoute>
      },
      {
        path:'/borrowedBook',
        element:<PrivateRoute><BorrowedBook></BorrowedBook></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/update/:id',
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader:({params})=>fetch(`https://library-system-server-project.vercel.app/updateID/${params.id}`)
      },
      
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

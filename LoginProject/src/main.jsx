import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Components/Login/Login.jsx';
import Registration from './Components/Registration/Registration.jsx';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import { Logout } from './Logout.jsx';
import './index.css';
import { AuthProvider } from './auth.jsx';

const router = createBrowserRouter([
{
  path:"",
  element:<Layout/>, 
  children:[
    { 
      path:'',
      element:<Home />
    },
    {
      path:'/login',
      element:<Login />
    },
    {
      path:'/registration',
      element:<Registration />
    },
    { 
      path:'/logout',
      element:<Logout />
    }
  ]
}

])  

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
      <React.StrictMode>
         <RouterProvider router={router}/>
      </React.StrictMode>
  </AuthProvider>
)

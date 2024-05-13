import { useState } from 'react'

import './App.css'

import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import { CookiesProvider, useCookies } from 'react-cookie'



function App() {
  const [cookies, setCookie] = useCookies(['user'])

  function handleLogin(user) {
        setCookie('user', user, { path: '/' })
      }


  return (
    <>
     <CookiesProvider>
       <div>{cookies.user ? <Home user={cookies.user} /> : <Login onLogin={handleLogin} />}</div>
     </CookiesProvider>
    </>
  )
}

export default App

// import React from 'react'
// import WelcomePage from './WelcomePage.js'
// import LoginPage from './LoginPage.js'
// import { CookiesProvider, useCookies } from 'react-cookie'
//import Login from './Components/Login/Login';

// function App() {
//   const [cookies, setCookie] = useCookies(['user'])

//   function handleLogin(user) {
//     setCookie('user', user, { path: '/' })
//   }

//   return (
//     <CookiesProvider>
//       <div>{cookies.user ? <WelcomePage user={cookies.user} /> : <LoginPage onLogin={handleLogin} />}</div>
//     </CookiesProvider>
//   )
// }

// export default App
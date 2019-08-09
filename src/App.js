import React, { useContext } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home/Home'
import { Router, Redirect } from '@reach/router'
import { Detail } from './pages/Detail/Detail'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Context } from './Context'
import { NotFound } from './pages/NoFound'

/* Deprecated with contextapi
const UserLogged = ({ children }) => {
  return children({ isAuth: false })
} */

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from={'/favs'} to='/login' noThrow />}
        {!isAuth && <Redirect from={'/user'} to='/login' noThrow />}
        {isAuth && <Redirect from={'/login'} to='/' noThrow />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </div>
  )
}

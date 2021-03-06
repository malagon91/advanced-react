import React, { useContext, Suspense } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home/Home'
import { Router, Redirect } from '@reach/router'
import { Detail } from './pages/Detail/Detail'
import { NavBar } from './components/NavBar'
// import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Context } from './Context'
import { NotFound } from './pages/NoFound'
const Favs = React.lazy(() => import('./pages/Favs'))

/* Deprecated with contextapi
const UserLogged = ({ children }) => {
  return children({ isAuth: false })
} */

/*
* PAra componentes qie se carguen dinamicamente necesitamos suspense que recibe un callback con lo que renderiza mientras carga el componente dinamico
* */
export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />} >
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
    </Suspense>
  )
}

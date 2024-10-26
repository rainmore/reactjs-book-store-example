import React, { Suspense, useContext, useState } from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { AppRoutePaths, appRoutes } from './app-routes.ts'
import { MainLayoutComponent } from './components/layout/main-layout-component.tsx'
import { MainNavComponent } from './components/layout/nav/main-nav-component.tsx'
import { PlainLayoutComponent } from './components/layout/plain-layout-component.tsx'
import LoginPage from './pages/auth/login-page.tsx'
import { CurrentUserContext } from './services/auth/auth-context.ts'

import 'react-toastify/dist/ReactToastify.css'

export const App: React.FC = () => {
  const currentUserContext = useContext(CurrentUserContext)
  const [currentUser, setCurrentUser] = useState(currentUserContext?.currentUser)

  return (
    <>
      <ToastContainer />
      <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            {appRoutes.map((route) => {
              if (route.requireAuth) {
                if (!currentUser) {
                  return <Route key={route.path} path={route.path} element={<Navigate replace to={AppRoutePaths.AUTH_LOGIN} />} />
                } else {
                  return (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={
                        <>
                          <MainNavComponent currentUser={currentUser || null} setCurrentUser={setCurrentUser} />
                          <MainLayoutComponent currentUser={currentUser || null} element={route.element} />
                        </>
                      }
                    />
                  )
                }
              } else {
                return <Route key={route.path} path={route.path} element={<PlainLayoutComponent element={<route.element />} />} />
              }
            })}
            <Route
              key={AppRoutePaths.AUTH_LOGIN}
              path={AppRoutePaths.AUTH_LOGIN}
              element={
                <PlainLayoutComponent
                  element={<LoginPage currentUser={currentUser || null} setCurrentUser={setCurrentUser} />}
                ></PlainLayoutComponent>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

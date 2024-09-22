import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Routes
}                     from 'react-router-dom';
import './main.scss';
import {
  MainLayoutComponent,
  PlainLayoutComponent
}                     from './components';
import {
  DashboardPage,
  LoginPage,
  ForgetPasswordPage
}                     from './pages';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab }     from '@fortawesome/free-brands-svg-icons';
import { fas }     from '@fortawesome/free-solid-svg-icons';
import { far }     from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}

    <Router>
      <Routes>
        <Route
          path="/auth/login"
          element={
            <PlainLayoutComponent>
              <LoginPage />
            </PlainLayoutComponent>
          }
        />
        <Route
          path="/auth/forget-password"
          element={
            <PlainLayoutComponent>
              <ForgetPasswordPage />
            </PlainLayoutComponent>
          }
        />
        <Route
          path="/"
          element={
            <MainLayoutComponent>
              <DashboardPage />
            </MainLayoutComponent>
          }
        />
      </Routes>
    </Router>
  </StrictMode>
);

import React, {
    useContext
}                             from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
}                             from 'react-router-dom';
import {
    MainLayoutComponent,
    PlainLayoutComponent
}                             from './components';
import {
    DashboardPage,
    ForgetPasswordPage,
    LoginPage
}                             from './pages';
import { BookListPage }       from './pages/book/list.tsx';
import { CurrentUserContext } from './services/auth/auth-context.ts';
import { AppRoute } from './components/app-route.tsx';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <DashboardPage />,
//   },
//   {
//     path: "/auth/login",
//     element: <PlainLayoutComponent><LoginPage /></PlainLayoutComponent>,
//   },
//   {
//     path: "/auth/forget-password",
//     element: <PlainLayoutComponent><ForgetPasswordPage /></PlainLayoutComponent>,
//   },
//   {
//     path: "/book",
//     element: <BookListPage />,
//   },

// ]);


export const App: React.FC = () => {
    const currentUserContext = useContext(CurrentUserContext);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (currentUserContext === null || currentUserContext === undefined) {
    //         console.log('currentUser', currentUserContext);
    //         navigate('/auth/login');
    //     }
    // });
// https://reactrouter.com/en/main/start/overview#nested-routes
// https://www.dhiwise.com/post/fixing-error-all-component-children-of-routes-must-be-a-route
    return (
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
                <Route path="/" element={
                  <MainLayoutComponent currentUser={currentUserContext?.currentUser || null}>
                    <AppRoute index element={<DashboardPage />} />
                    <AppRoute path="book" element={<BookListPage />} />
                  </MainLayoutComponent>
                }>
                </Route>
            </Routes>
        </Router>
    );
};
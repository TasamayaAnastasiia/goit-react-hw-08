import { useEffect, lazy } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute.jsx";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute.jsx";
import { refreshUser } from "./redux/auth/operations.js";
import { Route, Routes } from "react-router-dom";
import { selectIsRefreshing } from './redux/auth/selectors.js'
import { Layout } from "./Layout.jsx";

  const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
  const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"));
  const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
  const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    isRefreshing ? (
      <b>Refreshing user...</b>
    ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegistrationPage/>} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage/>} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage/>} />
          }
        />
      </Routes>
    </Layout>
  ))
};

export default App;

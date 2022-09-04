import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "hoc";
import { Loader } from "components/ui/Loader/Loader";

const Layout = lazy(() => import("components/Layout/Layout"));
const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("pages/ContactsPage"));
const Login = lazy(() => import("pages/LoginPage"));
const Register = lazy(() => import("pages/RegisterPage/RegisterPage"));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

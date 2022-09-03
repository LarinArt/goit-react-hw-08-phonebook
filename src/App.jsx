import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "components/PublicRoute/PublicRoute";
import { Loader } from "components/ui/Loader/Loader";

const Layout = lazy(() =>
  import("components/Layout/Layout" /* webpackChunkName: "layout" */)
);
const HomePage = lazy(() =>
  import("pages/HomePage/HomePage" /* webpackChunkName: "HomePage" */)
);
const ContactsPage = lazy(() =>
  import("pages/ContactsPage" /* webpackChunkName: "ContactsPage" */)
);
const Login = lazy(() =>
  import("pages/LoginPage" /* webpackChunkName: "Login" */)
);
const Register = lazy(() =>
  import("pages/RegisterPage/RegisterPage" /* webpackChunkName: "Register" */)
);

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

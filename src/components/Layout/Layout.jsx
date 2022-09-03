import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import { Outlet } from "react-router";

import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";
import Wrapper from "./Wrapper/Wrapper.styled";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Layout;

import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;

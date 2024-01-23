import { Outlet } from "react-router-dom";
import HeaderPage from "../components/header/header";

const Root = () => {
  return (
    <>
      <HeaderPage />
      <Outlet />
    </>  
  );
}

export default Root;
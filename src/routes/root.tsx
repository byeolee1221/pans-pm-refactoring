import { Outlet } from "react-router-dom";
import HeaderPage from "../components/header/header";
import FooterPage from "@/components/footer/footer";

const Root = () => {
  return (
    <>
      <HeaderPage />
      <Outlet />
      <FooterPage />
    </>  
  );
}

export default Root;
import { Outlet } from "react-router-dom";
import HeaderPage from "../components/header/header";
import FooterPage from "@/components/footer/footer";
import ScrollToTop from "@/components/scrollToTop";

// root 라우트 아래 구성컴포넌트에 항상 표시되는 컴포넌트
const Root = () => {
  return (
    <>
      <ScrollToTop />
      <HeaderPage />
      <Outlet />
      <FooterPage />
    </>  
  );
}

export default Root;
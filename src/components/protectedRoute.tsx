import { auth } from "@/firebase";
import { Navigate } from "react-router-dom";

// 비로그인 유저의 관리자페이지 접근을 막는 컴포넌트
const ProtectedRoute = ({
  children
}: {
  children: React.ReactNode;  
}) => {
  const user = auth.currentUser;

  if (user === null) {
    alert("잘못된 접근입니다.");
    return <Navigate to="/" />
  };

  return children;
}

export default ProtectedRoute;
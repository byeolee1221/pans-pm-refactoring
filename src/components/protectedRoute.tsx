import { auth } from "@/firebase";
import { Navigate } from "react-router-dom";

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
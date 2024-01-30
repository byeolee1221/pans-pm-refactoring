import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import AboutPage from "./routes/about";
import Root from "./routes/root";
import RegisterPage from "./routes/register";
import SignupPage from "./routes/signup";
import SigninPage from "./routes/signin";
import PanstalkPage from "./routes/panstalk";
import Mypage from "./routes/mypage";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import LoadingScreen from "./components/loading-screen";
import ProtectedRoute from "./components/protectedRoute";
import ManagePage from "./routes/manage";
import ScrollToTop from "./components/scrollToTop";
import Error from "./components/error";

// 라우트 및 인증상태를 확인하는 app 컴포넌트
const App = () => {
  const [isLoading, setLoading] = useState(true);

  // 파이어베이스 인증상태 기다리는 코드
  const init = async () => {
    await auth.authStateReady();
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <AboutPage /> },
        { path: "register", element: <RegisterPage /> },
        { path: "signup", element: <SignupPage /> },
        { path: "signin", element: <SigninPage /> },
        { path: "panstalk", element: <PanstalkPage /> },
        { path: "mypage", element: <Mypage /> }
      ]
    },
    {
      path: "manage",
      element:
        <ProtectedRoute>
          <ScrollToTop />
          <ManagePage />
        </ProtectedRoute>
    }
  ])

  return (
    <>
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </>
  )
}

export default App;

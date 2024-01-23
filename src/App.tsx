import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import AboutPage from "./routes/about";
import Root from "./routes/root";
import RegisterPage from "./routes/register";
import SignupPage from "./routes/signup";
import SigninPage from "./routes/signin";
import PanstalkPage from "./routes/panstalk";
import Mypage from "./routes/mypage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
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
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App;

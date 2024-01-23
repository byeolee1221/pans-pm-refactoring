import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import AboutPage from "./routes/about";
import Root from "./routes/root";
import RegisterPage from "./routes/register";
import SignupPage from "./routes/signup";
import SigninPage from "./routes/signin";

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
      ]
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App;

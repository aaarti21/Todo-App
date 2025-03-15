import About from "./components/About/About";
import Alltodo from "./components/Alltodo/Alltodo";
import "./App.css";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./pages/Rootlayout";
import Login from "./components/Login/Login";
import Registration from "./components/register/Registration";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Alltodospage from "./pages/Alltodospage";
import Regsterpage from "./pages/Regsterpage";
import Loginpage from "./pages/Loginpage";
import Privateroutes from "./Routes/Privateroutes";
import DetailsPage from "./pages/DetailsPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorPage/>,
      element: <Privateroutes><Rootlayout /></Privateroutes>,
      children: [
        { path: "/", element: <Homepage/> },
        {
          path: "/About",
          element: <Aboutpage/>,
        },
        {
          path: "/Alltodo",
          element: <Alltodo/>,
        },
        {path:"/details/:id",element:<DetailsPage/>}
      ],
    },
    {
      path: "/login",
      element: <Loginpage/>,
    },
    {
      path: "/register",
     element: <Regsterpage/>,
    },
  ]);
  return (
    <>
      {/* <Home /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;

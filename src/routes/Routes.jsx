import { createBrowserRouter } from "react-router-dom";

// routes.js
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    name: "login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    name: "home",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "*",
    name: "error",
    element: <Error />,
  },
]);

export default routes;

import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/home/HomeScreen";
import { AuthLayout } from "../components/layouts/AuthLayout";
import { Register } from "../pages/auth/Register";
import { Login } from "../pages/auth/Login";
import { DashLayout } from "../components/layouts/DashLayout";
import { Home } from "../pages/dashboard/Home";
import { Study } from "../pages/dashboard/Study";
import { PrivateRouter } from "./PrivateRouter";
import { History } from "../pages/dashboard/History";
import { Rank } from "../pages/dashboard/Rank";
import { Lesson } from "../pages/dashboard/Lesson";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashLayout />
      </PrivateRouter>
    ),
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "study",
        element: <Study />,
      },
      {
        path: "study/:id",
        element: <Study />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "rank",
        element: <Rank />,
      },
      {
        path: "lesson/:id",
        element: <Lesson />,
      },
    ],
  },
]);

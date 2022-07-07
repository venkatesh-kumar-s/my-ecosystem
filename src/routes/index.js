import SecurityCheck from "../components/SecurityCheck";
import Home from "../pages/Home";
import { Navigate } from "react-router-dom";

export const AuthRoutes = [
  {
    path: "/dashboard",
    element: <Home />,
  },
  {
    path: "*",
    element: <Navigate to="/dashboard" />,
  },
];

export const NonAuthRoutes = [
  {
    path: "/identity-check",
    element: <SecurityCheck />,
  },
  {
    path: "*",
    element: <Navigate to="/identity-check" />,
  },
];

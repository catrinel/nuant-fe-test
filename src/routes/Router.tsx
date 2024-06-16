import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import UserProfile from "./UserProfile/UserProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/user",
    element: <UserProfile />,
  },
]);

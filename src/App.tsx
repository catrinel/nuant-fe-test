import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./routes/LandingPage/LandingPage";
import Avatar from "./common/Avatar/Avatar";
import Nav from "./common/Nav/Nav";
import { navItems } from "./routes/navItems";
import Bulbasaur from "./assets/bulbasaur.png";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/user",
    element: (
      <Avatar src={Bulbasaur} name="Hi, Bulbasaur!" alt="Bulbasaur pokemon" />
    ),
  },
]);

function App() {
  return (
    <div className="min-h-full">
      <Nav navItems={navItems} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

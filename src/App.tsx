import { RouterProvider } from "react-router-dom";
import Nav from "./common/Nav/Nav";
import { navItems } from "./routes/navItems";
import { router } from "./routes/Router";

import "./App.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="h-full min-h-full">
      <Nav navItems={navItems} />

      <RouterProvider router={router} />

      <Toaster position="top-center" />
    </div>
  );
}

export default App;

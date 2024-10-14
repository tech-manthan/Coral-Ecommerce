import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages";
import { Root } from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default router;

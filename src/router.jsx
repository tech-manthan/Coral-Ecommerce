import { createBrowserRouter } from "react-router-dom";
import { Home, NotFound } from "./pages";
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
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

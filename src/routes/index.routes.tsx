import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "../pages/About";
import { Academics } from "../pages/Academics";
import { Activities } from "../pages/Activities";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Root } from "../Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <About />,
      },
      {
        path: "/atividades",
        element: <Activities />,
      },
      {
        path: "/academico",
        element: <Academics />,
      },
      {
        path: "/contato",
        element: <Contact />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}

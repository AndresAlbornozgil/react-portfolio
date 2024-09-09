import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
import ReactDOM from "react-dom/client"
import App from "./App"

import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

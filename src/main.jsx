import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio";
import ReactDOM from "react-dom/client"
import App from "./App"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "portfolio",
        element: <Portfolio />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />

);
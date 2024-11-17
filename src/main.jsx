import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import App from "./App";
import "./index.css";
import ProjectDetail from "./components/Projects/ProjectDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  ,
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/projects/:projectId",
    element: <ProjectDetail />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

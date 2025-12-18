import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import TaskDetail from "./pages/TaskDetail.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task-detail",
    element: <TaskDetail />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

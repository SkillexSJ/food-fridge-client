import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <MainLayout></MainLayout>
    </RouterProvider>
  </StrictMode>
);

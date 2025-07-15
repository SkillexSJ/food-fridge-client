import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Fridge from "../Pages/Fridge/Fridge";
import FoodDetailsPage from "../Pages/FoodDetailsPage";
import AddFood from "../Pages/AddFood/AddFood";
import MyItems from "../Pages/MyItems/MyItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("/fakedata.json");
          const data = await res.json();
          return data;
        },
        element: <Home></Home>,
      },

      {
        loader: async () => {
          const res = await fetch("/fakedata.json");
          const data = await res.json();
          return data;
        },
        path: "/fridge",
        element: <Fridge></Fridge>,
      },

      {
        path: "/food/:id",
        loader: async ({ params }) => {
          const res = await fetch("/fakedata.json");
          const data = await res.json();
          const item = data.find((item) => item.id === params.id);
          return item;
        },
        element: <FoodDetailsPage></FoodDetailsPage>,
      },

      {
        path: "/addfood",
        element: <AddFood></AddFood>,
      },

      {
        path: "/myitems",
        loader: async () => {
          const res = await fetch("/fakedata.json");
          const data = await res.json();
          return data;
        },
        element: <MyItems></MyItems>,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },

      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;

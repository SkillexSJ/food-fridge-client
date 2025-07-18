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
import MyProfile from "../Pages/MyProfile/MyProfile";
import PrivateRoute from "../Provider/PrivateRoute";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        index: true,
        loader: async () => {
          const res = await axios.get("http://localhost:3000/foods", {
            withCredentials: true,
          });
          return res.data;
        },
        element: <Home></Home>,
      },

      {
        loader: async () => {
          const res = await axios.get("http://localhost:3000/foods", {
            withCredentials: true,
          });
          return res.data;
        },
        path: "/fridge",
        element: <Fridge></Fridge>,
      },

      {
        path: "/food/:id",
        loader: async ({ params }) => {
          const res = await axios.get(
            `http://localhost:3000/foods/${params.id}`,
            {
              withCredentials: true,
            }
          );
          return res.data;
        },
        element: (
          <PrivateRoute>
            <FoodDetailsPage></FoodDetailsPage>
          </PrivateRoute>
        ),
      },

      {
        path: "/addfood",

        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },

      {
        path: "/myitems",
        element: (
          <PrivateRoute>
            <MyItems></MyItems>
          </PrivateRoute>
        ),
      },

      {
        path: "/myprofile",

        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
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

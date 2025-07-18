import React, { useContext, useState } from "react";
import pic from "../../assets/lottie/Cart.json";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../../Provider/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
const AddFood = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    foodTitle: "",
    foodImage: "",
    category: "Dairy",
    quantity: "",
    expiryDate: "",
    description: "",
  });

  const notify = () =>
    toast.success("Food Added!", {
      style: {
        border: "1px solid #116f6f",
        padding: "16px",
        color: "black",
      },
      iconTheme: {
        primary: "#116f6f",
        secondary: "#FFFAEE",
      },
    });

  const notify2 = () =>
    toast.error("Failed To Add!", {
      style: {
        border: "1px solid #116f6f",
        padding: "16px",
        color: "black",
      },
      iconTheme: {
        primary: "#116f6f",
        secondary: "#FFFAEE",
      },
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      addedBy: user?.email,
      addedOn: new Date().toISOString(),
    };

    try {
      await axios.post("http://localhost:3000/foods", dataToSend, {
        withCredentials: true, // send cookies
      });
      notify();
      navigate("/myitems");
    } catch (err) {
      notify2();
    }
  };

  return (
    <div className="flex min-h-full items-center justify-center bg-gray-50 p-4 sm:p-6 lg:p-8">
      <Toaster></Toaster>
      <div className="grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-xl bg-white shadow-2xl md:grid-cols-2">
        {/* Welcome Section */}
        <div className="hidden flex-col gap-10 justify-center bg-teal-600 p-12 text-white md:flex">
          <div className="flex flex-col text-center justify-center items-center">
            <h2 className="text-3xl font-arvo font-bold">Log Your Next Meal</h2>
            <p className="mt-4 text-xl text-pretty line-clamp-2">
              Keep your inventory fresh and up-to-date. Adding a new item is the
              first step to smarter food management.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <div style={{ width: "300px", height: "300px" }}>
              <Lottie animationData={pic}></Lottie>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <div className="w-full">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-teal-800 sm:text-4xl">
                <Typewriter
                  words={["Setup New Food Item"]}
                  loop={2}
                  cursor
                  cursorStyle="_"
                  typeSpeed={60}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                Fill out the form below to add an item to your inventory.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-10 space-y-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="foodTitle"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Food Title
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="foodTitle"
                      id="foodTitle"
                      required
                      value={formData.foodTitle}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="foodImage"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Food Image URL
                  </label>
                  <div className="mt-2">
                    <input
                      type="url"
                      name="foodImage"
                      id="foodImage"
                      required
                      value={formData.foodImage}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Category
                  </label>
                  <div className="mt-2">
                    <select
                      id="category"
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    >
                      <option>Dairy</option>
                      <option>Meat</option>
                      <option>Vegetables</option>
                      <option>Fruits</option>
                      <option>Grains</option>
                      <option>Snacks</option>
                      <option>Beverages</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Quantity
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="quantity"
                      id="quantity"
                      required
                      value={formData.quantity}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="expiryDate"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Expiry Date
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="expiryDate"
                    id="expiryDate"
                    required
                    value={formData.expiryDate}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 rounded-lg text-teal-50 bg-teal-800 p-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium ">Added By</p>
                  <p className="mt-1 text-base font-semibold ">{user?.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Added On</p>
                  <p className="mt-1 text-base font-semibold">
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  Add Food
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;

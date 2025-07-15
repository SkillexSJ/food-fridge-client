import React from "react";

const AddFood = () => {
  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow-xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Add a New Food Item
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Fill out the form below to add an item to your inventory.
            </p>
          </div>
          <form className="mt-10 space-y-8">
            {/* Row 1: Title and Image URL */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="food-title"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Food Title
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="food-title"
                    id="food-title"
                    required
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="food-image"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Food Image URL
                </label>
                <div className="mt-2">
                  <input
                    type="url"
                    name="food-image"
                    id="food-image"
                    required
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Category and Quantity */}
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
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
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
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Expiry Date */}
            <div>
              <label
                htmlFor="expiry-date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Expiry Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="expiry-date"
                  id="expiry-date"
                  required
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Row 4: Description */}
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>

            {/* Auto-filled Info */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 rounded-lg bg-gray-50 p-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-gray-500">Added By</p>
                <p className="mt-1 text-base font-semibold text-gray-900">
                  {/* {userEmail} */}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Added On</p>
                <p className="mt-1 text-base font-semibold text-gray-900">
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Submit Button */}
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
  );
};

export default AddFood;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import axios from "axios";
import { motion } from "framer-motion";

const MyItems = () => {
  const { user } = useContext(AuthContext);

  const [myFoods, setMyFoods] = useState([]);
  const [editingFood, setEditingFood] = useState(null);

  // Fetch user-specific foods
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/foods?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyFoods(data))
        .catch((err) => console.error("Error fetching recipes:", err));
    }
  }, [user?.email]);

  // Open modal with selected food
  const openModal = (item) => {
    setEditingFood(item);
    document.getElementById("update_modal").showModal();
  };

  // Handle food update
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:3000/foods/${editingFood._id}`,
        editingFood
      );

      if (response.data.modifiedCount > 0 || response.status === 200) {
        // Update
        setMyFoods((prev) =>
          prev.map((item) =>
            item._id === editingFood._id ? { ...item, ...editingFood } : item
          )
        );

        alert("✅ Food updated successfully!");
        setEditingFood(null);
        document.getElementById("update_modal").close();
      } else {
        alert("❌ Update failed on server");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("❌ Failed to update item.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/foods/${id}`);
      if (response.data.deletedCount > 0) {
        setMyFoods(myFoods.filter((item) => item._id !== id));
        alert("🗑️ Food deleted successfully!");
      }
    } catch (error) {
      alert("❌ Deletion failed:", error);
    }
  };

  return (
    <>
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              My Added Food Items
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Manage the food items you've added.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-lg bg-white shadow-xl">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                    Food
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                    Expires On
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium uppercase text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {myFoods.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={item.foodImage}
                          alt={item.foodTitle}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div className="ml-4 text-sm font-medium text-gray-900">
                          {item.foodTitle}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.expiryDate?.split("T")[0]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-4">
                        <button
                          onClick={() => openModal(item)}
                          className="btn bg-teal-600 text-white hover:bg-black"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="btn bg-red-400 text-black hover:text-red-900"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Modal */}
      <dialog id="update_modal" className="modal modal-bottom sm:modal-middle">
        {editingFood && (
          <motion.div
            className="modal-box bg-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <h3 className="font-bold text-2xl text-teal-600">
              Update "{editingFood.foodTitle}"
            </h3>

            <form onSubmit={handleUpdate} className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Food Title
                </label>
                <input
                  type="text"
                  value={editingFood.foodTitle}
                  onChange={(e) =>
                    setEditingFood({
                      ...editingFood,
                      foodTitle: e.target.value,
                    })
                  }
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <input
                  type="text"
                  value={editingFood.quantity}
                  onChange={(e) =>
                    setEditingFood({
                      ...editingFood,
                      quantity: e.target.value,
                    })
                  }
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="date"
                  value={editingFood.expiryDate?.split("T")[0]}
                  onChange={(e) =>
                    setEditingFood({
                      ...editingFood,
                      expiryDate: e.target.value,
                    })
                  }
                  className="input input-bordered w-full"
                />
              </div>

              <div className="modal-action">
                <button
                  type="button"
                  onClick={() => {
                    setEditingFood(null);
                    document.getElementById("update_modal").close();
                  }}
                  className="btn"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn bg-teal-600 text-white hover:bg-teal-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </dialog>
    </>
  );
};

export default MyItems;

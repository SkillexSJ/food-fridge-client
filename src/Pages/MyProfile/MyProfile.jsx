import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";
import hello from "../../assets/lottie/Welcome Animation.json";
import Lottie from "lottie-react";
import axios from "axios";
const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("profile");
  const [foodItems, setFoodItems] = useState([]);

  // fetching
  useEffect(() => {
    const fetchUserFoods = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/user-foods?email=${user.email}`,
          { withCredentials: true }
        );
        setFoodItems(res.data);
      } catch (error) {
        console.error("Error fetching user foods:", error);
      }
    };

    if (user?.email) fetchUserFoods();
  }, [user]);

  // Stats
  const stats = {
    itemsAdded: foodItems.length,
  };

  // activity
  const activity = [...foodItems]
    .sort(
      (a, b) => new Date(b.addedOn).getTime() - new Date(a.addedOn).getTime()
    )
    .map((item, idx) => ({
      id: idx + 1,
      action: "Added",
      item: item.foodTitle,
      date: new Date(item.addedOn).toLocaleDateString(),
    }));

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 className="text-xl font-semibold">Profile Information</h3>
            <p>Email: {user.email}</p>
            <p>Total Items Added: {stats.itemsAdded}</p>
          </motion.div>
        );

      default:
        return null;
    }
  };
  return (
    <div className="bg-gray-100  min-h-screen pb-12">
      {/* Header */}
      <div className="relative h-48 md:h-64 bg-gradient-to-r from-teal-50 to-emerald-100">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            src={user.photoURL}
            alt="User Avatar"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Info */}
      <div className="text-center mt-16 md:mt-20">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          {user.displayName}
        </h1>
        <p className="text-sm md:text-md text-gray-500">{user.email}</p>
      </div>

      {/*  Animation */}
      <div className="w-full max-w-s md:max-w-sm mx-auto">
        <Lottie animationData={hello} loop autoplay />
      </div>

      {/* Stats Section */}
      <div className="max-w-4xl mx-auto  px-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-3xl font-bold text-teal-600">
            <CountUp end={stats.itemsAdded} duration={1.5} />
          </p>
          <p className="text-sm text-gray-600 mt-1">Items Added</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="max-w-4xl mx-auto mt-6 px-4">
        <motion.div
          className="bg-white p-5 rounded-lg shadow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-3">
            {activity.length > 0 ? (
              activity.map((act, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="p-2 bg-teal-100 rounded-full">
                    <svg
                      className="w-5 h-5 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {act.action}{" "}
                      <span className="text-teal-600">{act.item}</span>
                    </p>
                    <p className="text-xs text-gray-500">{act.date}</p>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 text-sm font-medium">
                No activity yet.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyProfile;

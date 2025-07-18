import { useContext, useState } from "react";
import Countdown from "react-countdown";
import { useLoaderData } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../Provider/AuthContext";

const FoodDetailsPage = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const isExpired = new Date(data.expiryDate) < new Date();
  const justDate = new Date(data.addedOn).toLocaleDateString();
  const {
    foodImage,
    category,
    foodTitle,
    description,
    expiryDate,
    quantity,
    addedBy,
  } = data;

  const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="text-red-500 font-bold">Expired</span>;
    } else {
      return (
        <span className="text-teal-50 font-medium">
          {days}d {hours}h {minutes}m {seconds}s remaining
        </span>
      );
    }
  };

  const handleNoteSubmit = (e) => {
    e.preventDefault();
    if (newNote.trim() === "") return;
    const note = {
      text: newNote,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
    setNotes([note, ...notes]);
    setNewNote("");
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Countdown Section */}
        <div className="bg-gradient-to-r from-teal-600 via-emerald-500 to-lime-400 text-white rounded-xl p-6 shadow-lg text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Time Remaining</h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-widest">
            <Countdown
              date={new Date(expiryDate)}
              renderer={countdownRenderer}
            />
          </p>
        </div>

        {/* Main Image + Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Food Image */}
          <div className="flex justify-center">
            <img
              src={foodImage}
              alt={foodTitle}
              className={`w-full max-w-md rounded-xl shadow-md object-cover ${
                isExpired ? "grayscale" : ""
              }`}
            />
          </div>
          {/* Info */}
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {foodTitle}
            </h1>
            <p className="text-lg font-medium text-teal-600">{category}</p>
            <p className="text-base text-gray-700">{description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-teal-800  rounded-lg p-4 shadow-sm">
                <p className="text-sm text-teal-50">Quantity</p>
                <p className="text-lg font-bold text-teal-50">{quantity}</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
                <p className="text-sm text-gray-500">Expiry Date</p>
                <p className="text-lg font-bold text-gray-800">{expiryDate}</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
                <p className="text-sm text-gray-500">Added On</p>
                <p className="text-lg font-bold text-gray-800">{justDate}</p>
              </div>
              <div className="bg-teal-800 rounded-lg p-4 shadow-sm">
                <p className="text-sm text-teal-50">Added By</p>
                <p className="text-lg font-bold  text-teal-50">{addedBy}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Notes</h2>

          {/* Show input only if current user added the food */}
          {user?.email === addedBy && (
            <form onSubmit={handleNoteSubmit} className="space-y-4">
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Write a note about this item..."
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                rows="3"
              ></textarea>
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg font-semibold transition"
              >
                Add Note
              </button>
            </form>
          )}

          {/* Notes List */}
          <div className="mt-6 space-y-4">
            <AnimatePresence>
              {notes.length === 0 && (
                <p className="text-gray-500">No notes yet.</p>
              )}
              {notes.map((note) => (
                <motion.div
                  key={note.id}
                  className="bg-gray-50 p-4 rounded-md shadow-sm border border-gray-200 flex justify-between items-start"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div>
                    <p className="text-gray-800">{note.text}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Posted on: {note.date}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteNote(note.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Delete
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FoodDetailsPage;

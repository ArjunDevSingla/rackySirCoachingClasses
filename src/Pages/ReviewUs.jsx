import React, { useState } from "react";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { FaStar } from "react-icons/fa";

const ReviewUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    review: "",
    rating: 0,
  });
  const [hover, setHover] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.rating === 0) return alert("Please select a rating");
    if (!formData.gender) return alert("Please select your gender");
    try {
      await addDoc(collection(db, "reviews"), {
        ...formData,
        createdAt: Timestamp.now(),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="min-h-screen bg-indigo-50 py-12 px-6">
      <motion.h2
        className="text-4xl font-bold text-indigo-700 text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Review Us
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {submitted ? (
          <div className="text-green-600 font-semibold text-center text-lg">
            ✅ Thank you for your review!
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />

            {/* Gender Section */}
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  className="accent-indigo-600"
                />
                <span className="text-gray-700 font-medium">Male</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                  className="accent-pink-500"
                />
                <span className="text-gray-700 font-medium">Female</span>
              </label>
            </div>

            <textarea
              name="review"
              rows="4"
              placeholder="Write your review..."
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />

            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => {
                const ratingVal = i + 1;
                return (
                  <label key={i}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingVal}
                      className="hidden"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          rating: ratingVal,
                        }))
                      }
                    />
                    <FaStar
                      size={28}
                      color={
                        ratingVal <= (hover || formData.rating)
                          ? "#facc15"
                          : "#d1d5db"
                      }
                      onMouseEnter={() => setHover(ratingVal)}
                      onMouseLeave={() => setHover(null)}
                      className="cursor-pointer transition duration-200"
                    />
                  </label>
                );
              })}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition"
            >
              Submit Review
            </button>

            <div className="bg-yellow-100 border border-yellow-300 rounded-xl p-4 mt-8 text-center">
              <p className="text-md text-gray-800 font-medium">
                Loved learning at Racky Sir Coaching?{" "}
                <a
                  href="https://g.page/r/CZDwFlM5hQQhEAI/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-700 underline hover:text-indigo-900 transition"
                >
                  Leave us a review on Google
                </a>{" "}
                too! ⭐
              </p>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default ReviewUs;

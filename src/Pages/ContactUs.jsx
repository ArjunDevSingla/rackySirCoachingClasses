// pages/ContactUs.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { db } from "../firebase"; // Adjust the path if needed
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: Timestamp.now(),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error saving contact info:", error);
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
        Contact Us
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-indigo-600 text-xl" />
            <span className="text-gray-700 font-medium">
              +91 98145 90911
              <br />
              +91 86998 22481
            </span>
          </div>

          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-green-500 text-xl" />
            <span className="text-gray-700 font-medium">+91 98159 02553</span>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-red-500 text-xl" />
            <span className="text-gray-700 font-medium">
              arjundevsingla1612@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-yellow-600 text-xl" />
            <a
              href="https://maps.app.goo.gl/n135RD2mMkr8VDaw9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 font-medium"
            >
              Address: Wadi hospital Street, opposite MHR public school, near Public Dharamshala, Malviya Nagar, Bathinda, Punjab 151001
            </a>
          </div>
        </div>

        {/* Contact Form */}
        {submitted ? (
          <div className="text-green-600 font-semibold text-center col-span-1">
            ✅ Thank you! Your message has been sent.
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}

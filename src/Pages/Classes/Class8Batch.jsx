import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaBook,
  FaClipboardList,
  FaUserAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { db } from "../../firebase"; // adjust if needed
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function Class8Batch() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
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
      await addDoc(collection(db, "batchEnquiries"), {
        ...formData,
        batch: "Class 8",
        createdAt: Timestamp.now(),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting batch enquiry:", error);
    }
  };

  return (
    <div className="min-h-screen bg-indigo-50 p-6 flex flex-col md:flex-row gap-6">
      {/* Info Section */}
      <motion.div
        className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg text-gray-800 space-y-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-indigo-700 flex items-center gap-2">
          <FaBookOpen /> 8th Grade – Batch Info
        </h2>

        <section>
          <h3 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
            <FaClipboardList /> Program Offerings
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Subjects: Maths & Science</li>
            <li>Schedule: Monday to Sunday</li>
            <li>Daily Sessions: 1.5 hours</li>
            <li>Regular classes even on Sundays – because it's all about practice</li>
            <li>Notes and practice papers provided</li>
            <li>Doubt-clearing sessions every weekend</li>
            <li>Regular tests and performance tracking</li>
            <li>Confirm your batch directly by talking to <strong>Racky Sir</strong></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
            <FaChalkboardTeacher /> About the Course
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">Doubt–Clearing Sessions</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Dedicated weekend sessions to clear doubts</li>
                <li>Students encouraged to bring doubts daily for review</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">Personal Attention</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>1-on-1 doubt clarification after class hours</li>
                <li>Close monitoring of each student's progress</li>
                <li>Mentorship support by Racky Sir personally</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">Study Materials Provided</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Printed notes and concept books for each subject</li>
                <li>Daily Practice Problems (DPPs) for consistency</li>
                <li>Handwritten classroom notes available for reference</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">Regular Tests & Feedback</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Weekly tests based on topics covered</li>
                <li>Chapter-wise and full syllabus mock tests</li>
                <li>Personalized feedback to parents and students</li>
              </ul>
            </div>
          </div>
        </section>
      </motion.div>

      {/* Form Section */}
      <motion.div
        className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
          <FaBook /> Enroll Now
        </h3>
        {submitted ? (
          <div className="text-green-600 font-medium text-center">
            ✅ Thank you! We'll contact you shortly.
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center gap-2">
              <FaUserAlt className="text-indigo-600" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-indigo-600" />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex items-center gap-2">
              <FaChalkboardTeacher className="text-indigo-600" />
              <select
                name="subject"
                required
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              >
                <option value="">Choose Subject</option>
                <option value="Maths & Science">Maths & Science</option>
                <option value="Only Maths">Only Maths</option>
              </select>
            </div>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition">
              Submit
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}

import React from "react";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaCalendarAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const batches = [
  {
    grade: "8th Grade",
    packages: ["Maths + Science", "Only Maths"],
    details:
      "Designed to build strong foundational concepts and critical thinking through regular practice and personal guidance.",
    link: "/batch/class8",
  },
  {
    grade: "9th Grade",
    packages: ["Maths + Science", "Only Maths"],
    details:
      "Curriculum aligned with school syllabus focusing on understanding, applications, and performance in school exams.",
    link: "/batch/class9",
  },
  {
    grade: "10th Grade",
    packages: ["Maths + Science", "Only Maths"],
    details:
      "Focused on board exams preparation with regular tests, feedback sessions, and doubt-clearing for each topic.",
    link: "/batch/class10",
  },
];

export default function BatchInfo() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
        Batch Information
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {batches.map((batch, idx) => (
          <div
            key={idx}
            className="bg-white hover:bg-indigo-700 text-gray-800 hover:text-white rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group flex flex-col items-center text-center"
          >
            <FaBookOpen className="text-3xl mb-4 text-indigo-700 group-hover:text-white transition-colors duration-300" />

            <h3 className="text-2xl font-semibold mb-3 text-indigo-700 group-hover:text-white transition-colors duration-300">
              {batch.grade}
            </h3>

            <div className="mb-4">
              <p className="font-semibold mb-1">Packages Offered:</p>
              <ul className="space-y-1">
                {batch.packages.map((pkg, i) => (
                  <li
                    key={i}
                    className="flex justify-center items-center gap-2"
                  >
                    <FaCheckCircle className="text-indigo-600 group-hover:text-white" />
                    <span>{pkg}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <p className="font-semibold mb-1">About the Course:</p>
              <p className="text-sm group-hover:text-white text-gray-600">
                {batch.details}
              </p>
            </div>

            <div>
              <p className="font-semibold mb-1">Schedule:</p>
              <div className="flex justify-center items-center gap-2 text-sm">
                <FaCalendarAlt className="text-indigo-600 group-hover:text-white" />
                <span>Monday to Sunday (Yes, even on Sundays)</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to={batch.link}
                className="mt-auto bg-white text-indigo-700 px-5 py-2 rounded-full font-semibold shadow transition duration-300 hover:scale-105"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg font-medium">
          Need to hear from our previous students?{" "}
          <a
            href="/about#reviews"
            className="text-indigo-700 font-semibold underline hover:text-indigo-900 transition"
          >
            Click here!
          </a>
        </p>
      </div>
    </div>
  );
}

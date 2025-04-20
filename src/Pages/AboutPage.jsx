// src/pages/AboutPage.jsx
import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-indigo-700 text-center mb-4"
        >
          About Racky Sir Coaching
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-indigo-600 px-4 py-4 rounded-xl shadow-xl"
        >
          <p className="text-lg text-white">
            <strong>With over 25 years of excellence</strong> in guiding
            students through Maths and Science,{" "}
            <strong>Racky Sir Coaching Classes</strong> has become a name
            synonymous with trust and results.
            <br />
            <br />
            What truly sets us apart is the <strong>personal attention</strong>{" "}
            each student receives—ensuring that{" "}
            <strong>no one is left behind</strong>.
            <br />
            <br />
            We begin with <strong>Class 8</strong>, focusing on{" "}
            <strong>building a strong base</strong> in Maths and Science.
            <br />
            In <strong>Class 9</strong>, we shift toward{" "}
            <strong>refined concepts and advanced applications</strong>, helping
            students think deeper and aim higher.
            <br />
            <br />
            But does that mean we leave basics behind?{" "}
            <strong>Absolutely not.</strong>
            <br />
            At Racky Sir Coaching Classes, we strongly believe that{" "}
            <strong>everything begins with the basics</strong>—no matter how
            advanced the topic.
            <br />
            We recognize that <strong>every student learns differently</strong>,
            and we wholeheartedly <strong>respect and nurture that uniqueness</strong>.
            <br />
            <br />
            By <strong>Class 10</strong>, our focus turns to{" "}
            <strong>board exam preparation</strong>, which demands a solid grasp
            of both <strong>9th and 10th-grade fundamentals</strong>.
            <br />
            Our teaching ensures that students are not just ready to
            perform—they’re <strong>ready to excel</strong>.
            <br />
            <br />
            All of this is delivered in an environment that strikes the{" "}
            <strong>perfect balance between fun and strictness</strong>, making
            learning both <strong>effective and enjoyable</strong>.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          src="/images/papa_coaching_place.jpg"
          alt="Racky Sir Teaching"
          className="w-full h-auto rounded-2xl shadow-md mt-6"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl text-indigo-700 font-semibold mt-10 mb-4"
        >
          Our Teaching Philosophy
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-800 text-lg space-y-4"
        >
          <p>
            We believe in making <strong>concepts crystal clear</strong> through
            a blend of <strong>visual learning</strong>,{" "}
            <strong>regular assessments</strong>, and
            <strong> personalized attention</strong>. Our classes are{" "}
            <strong>interactive, engaging</strong>, and designed to build not
            just knowledge, but <strong>confidence</strong> in every student.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              📚 Our Academic Pathway
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>8th Grade</strong> – Laying the{" "}
                <strong>foundation</strong> in Maths & Science with clear,
                simple explanations and strong basics.
              </li>
              <li>
                <strong>9th Grade</strong> – Advancing toward{" "}
                <strong>conceptual clarity</strong>, while beginning structured
                preparation for board-level expectations.
              </li>
              <li>
                <strong>10th Grade</strong> – Comprehensive,{" "}
                <strong>board-focused coaching</strong> covering the full
                syllabus with strategic revisions and exam-oriented practice.
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
        >
          <div className="p-4 shadow rounded-xl text-center">
            <h3 className="text-xl font-semibold text-indigo-600">
              25+ Years of Experience
            </h3>
            <p className="text-gray-600 mt-2">
              Trusted by thousands of students and parents
            </p>
          </div>
          <div className="p-4 shadow rounded-xl text-center">
            <h3 className="text-xl font-semibold text-indigo-600">
              Concept-Focused Teaching
            </h3>
            <p className="text-gray-600 mt-2">
              Clarity in fundamentals leads to success
            </p>
          </div>
          <div className="p-4 shadow rounded-xl text-center">
            <h3 className="text-xl font-semibold text-indigo-600">
              Personal Attention
            </h3>
            <p className="text-gray-600 mt-2">
              We value every student’s unique learning pace
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-lg font-medium">Want to know more or join a batch?</p>
          <a
            href="/"
            className="mt-4 inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Go Back Home
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;

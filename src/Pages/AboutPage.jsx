// src/pages/AboutPage.jsx
import React from "react";
import Slider from "react-slick";
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

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-2xl font-semibold text-center text-indigo-600 mt-16 mb-8"
        >
          What Students Say
        </motion.h2>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="max-w-6xl mx-auto px-4"
        >
          <Slider
            dots={false}
            infinite
            speed={1000}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay
            autoplaySpeed={3000}
            cssEase="linear"
            responsive={[
              {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
              },
              {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
              },
            ]}
          >
            {[
              {
                avatar: "/avatars/img_2.jpg",
                name: "Anjali Mehta",
                rating: 5,
                review:
                  "Racky Sir's explanations are so clear that even tough concepts feel simple. The way he breaks things down makes studying enjoyable and effective. I gained so much confidence before boards!",
              },
              {
                avatar: "/avatars/img_1.jpg",
                name: "Rajiv Sharma",
                rating: 4,
                review:
                  "Interactive classes and regular practice helped me a lot. Every doubt was solved with patience and clarity. I really recommend this coaching to anyone struggling with Science or Maths.",
              },
              {
                avatar: "/avatars/img_3.jpg",
                name: "Arjun Dev Singla",
                rating: 5,
                review:
                  "One of the best coaching experiences! I finally started enjoying Maths. Racky Sir's method is clear, practical, and friendly. Highly recommend for 8th to 10th students!",
              },
              {
                avatar: "/avatars/img_4.jpg",
                name: "Pooja Nair",
                rating: 5,
                review:
                  "One of the best coaching experiences! I finally started enjoying Maths. Racky Sir's method is clear, practical, and friendly. Highly recommend for 8th to 10th students!",
              },
            ].map((student, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="px-2"
              >
                <div className="bg-indigo-50 shadow-lg rounded-2xl p-6 h-[320px] flex flex-col items-center text-center overflow-hidden">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-20 h-20 object-cover rounded-full mb-4 border-2 border-indigo-500"
                  />
                  <h3 className="text-lg font-semibold text-indigo-700">
                    {student.name}
                  </h3>
                  <div className="text-yellow-400 text-xl mt-1 mb-2">
                    {"⭐".repeat(student.rating)}
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-4">
                    {student.review}
                  </p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.section>

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

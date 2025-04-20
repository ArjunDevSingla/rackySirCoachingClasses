import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { db } from "../firebase"; // adjust path based on your project
import { collection, getDocs } from "firebase/firestore";

const ReviewSlider = () => {
  const [reviews, setReviews] = useState([]);

  const getRandomAvatar = (gender) => {
    const avatars = {
      male: ["/avatars/img_1.jpg", "/avatars/img_3.jpg"],
      female: ["/avatars/img_2.jpg", "/avatars/img_4.jpg"],
    };
    const pool = avatars[gender.toLowerCase()] || avatars.male;
    const selected = pool[Math.floor(Math.random() * pool.length)];
    console.log(`Selected avatar for ${gender}:`, selected); // ✅ Console log
    return selected;
  };

  useEffect(() => {
    const fetchReviews = async () => {
      const querySnapshot = await getDocs(collection(db, "reviews"));
      const data = querySnapshot.docs.map((doc) => {
        const reviewData = doc.data();
        return {
          ...reviewData,
          avatar: getRandomAvatar(reviewData.gender || "male"),
        };
      });
      setReviews(data);
    };

    fetchReviews();
  }, []);

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-3xl font-bold text-center text-indigo-600 mt-12 mb-8"
      >
        What Our Students Say!
      </motion.h2>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        className="max-w-6xl mx-auto px-4"
      >
        <Slider
          dots={false}
          arrows={false}
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
          {reviews.map((student, idx) => (
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
    </>
  );
};

export default ReviewSlider;

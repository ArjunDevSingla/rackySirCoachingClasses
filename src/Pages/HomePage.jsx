import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReviewSlider from "./ReviewSlider";

const HomePage = () => {
  const carouselImages = [
    "/images/papa_batch2.jpg",
    "/images/papa_batch3.jpg",
    "/images/papa_batch4.jpg",
    "/images/papa_batch1.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-white p-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center py-10">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
            Racky Sir Coaching Classes
          </h1>
          <p className="text-xl">
            Empowering young minds with over{" "}
            <span className="font-semibold text-indigo-600">25 years</span> of
            excellence in education.
          </p>
        </div>

        {/* 🖼 Carousel Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4 text-center">
            Glimpses of Our Batches
          </h2>
          <Slider {...settings}>
            {carouselImages.map((src, index) => (
              <div key={index} className="px-4">
                <img
                  src={src}
                  alt={`Batch ${index + 1}`}
                  className="rounded-2xl mx-auto md:w-max md:max-h-[400px] w-full h-[300px] object-cover shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Description */}
        <div className="bg-white shadow-xl rounded-2xl p-6 mb-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Text Side */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
              About Us
            </h2>
            <p className="text-lg leading-relaxed">
              At Racky Sir Coaching Classes, we believe that a strong foundation
              in Maths and Science is the key to academic success. With over two
              decades of experience, our expert-led classes are designed to make
              complex concepts simple and fun. We focus on clarity, confidence,
              and results—delivering excellence one student at a time.
            </p>
            <Link
              to="/about"
              className="inline-block mt-4 text-indigo-600 hover:text-indigo-800 font-medium transition"
            >
              Learn more →
            </Link>
          </div>

          {/* Image Side */}
          <div className="flex justify-center">
            <img
              src="/images/papa_teaching.jpg" // Adjust path based on where you store it
              alt="Racky Sir in Class"
              className="rounded-2xl shadow-lg max-h-[300px] object-cover"
            />
          </div>
        </div>

        <ReviewSlider />

        <motion.div
          className="max-w-xl mx-auto mt-12 bg-indigo-100 text-indigo-900 px-6 py-4 rounded-2xl shadow-md text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-lg font-semibold">
            Our old student?{" "}
            <Link
              to="/review"
              className="text-indigo-700 underline hover:text-indigo-900 transition duration-300"
            >
              Come rate us!
            </Link>{" "}
            💬
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-3xl font-bold text-center text-indigo-600 mt-16 mb-8"
        >
          Join Us
        </motion.h2>

        {/* Batch Info */}
        {/* Batch Info */}
        <div className="justify-items-center mt-12 mb-8 w-full">
          {/* 8th Grade Batch */}
          <div className="bg-indigo-100 rounded-2xl p-5 shadow-md text-center w-full max-w-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-indigo-700 mb-2">
                📘 8th, 9th and 10th Class
              </h3>
              <h3 className="text-xl font-bold text-indigo-700 mb-2">
                Maths & Science
              </h3>
              <p className="text-base mb-4">
                New batches starting soon! <br />
                <strong className="text-indigo-700">Get updates now!</strong>
              </p>
            </div>
            <Link
              to="/batch"
              className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-indigo-700 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

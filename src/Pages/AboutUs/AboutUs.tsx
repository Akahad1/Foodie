import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto p-8 text-center bg-gray-100 rounded-lg shadow-xl">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-6">About Us</h1>
      <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
        Welcome to Foodieland, your go-to destination for delicious recipes and
        culinary inspiration. Our mission is to bring people together through
        the joy of cooking, offering easy-to-follow recipes and tips that make
        every meal special. Whether you're a beginner or a seasoned chef, we
        have something for everyone.
      </p>
      <div className="flex justify-center mb-8">
        <img
          src="https://via.placeholder.com/500"
          alt="About Us"
          className="rounded-lg shadow-xl border-4 border-gray-200"
        />
      </div>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h2>
      <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 mx-auto">
        <p className="flex items-center space-x-3 text-lg text-gray-700">
          <FaEnvelope className="text-primary text-xl" />
          <span>contact@foodieland.com</span>
        </p>
        <p className="flex items-center space-x-3 text-lg text-gray-700">
          <FaPhone className="text-primary text-xl" />
          <span>+123 456 7890</span>
        </p>
        <div className="flex space-x-6 mt-4">
          <a
            href="#"
            className="text-blue-600 text-2xl hover:text-blue-800 transition-all"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-blue-400 text-2xl hover:text-blue-600 transition-all"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-pink-500 text-2xl hover:text-pink-700 transition-all"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

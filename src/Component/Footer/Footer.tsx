import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 text-gray-700 text-center bo">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-semibold italic">
          <span className="text-black">Foodieland</span>
        </div>

        <nav className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-gray-900">
            Recipes
          </a>
          <a href="#" className="hover:text-gray-900">
            Blog
          </a>
          <a href="#" className="hover:text-gray-900">
            Contact
          </a>
          <a href="#" className="hover:text-gray-900">
            About us
          </a>
        </nav>
      </div>
      <hr className="my-6 border-gray-300" />
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500 flex justify-center">
          © 2024 <span className="text-red-500">SpaceZee</span>
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-black">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

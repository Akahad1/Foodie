import React from "react";
import PhotoPlate from "../../../public/recipe/Photo-plate.png";
import salad from "../../../public/recipe/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png";

const NewsletterSignup: React.FC = () => {
  return (
    <div className="mb-10 px-4 lg:mr-20 lg:ml-20 mr-3 ml-3 mt-10 ">
      <div className="bg-blue-100 p-10 rounded-3xl flex flex-col items-center text-center relative  shadow-lg overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
          Deliciousness to your inbox
        </h2>
        <p className="text-gray-600 mb-6 max-w-lg">
          Stay updated with the latest recipes and cooking tips delivered
          straight to your inbox.
        </p>
        <div className="flex w-full max-w-md">
          <input
            type="email"
            placeholder="Your email address..."
            className="input input-bordered w-full rounded-l-lg px-4"
          />
          <button className="btn bg-black text-white px-6 rounded-r-lg">
            Subscribe
          </button>
        </div>

        <div className="absolute left-4 bottom-4 w-24 h-24 md:w-32 md:h-32">
          <img src={salad} alt="Salad" />
        </div>
        <div className="absolute right-1 bottom-0 w-24 h-24 md:w-40 md:h-40">
          <img src={PhotoPlate} alt="Plate of food" />
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;

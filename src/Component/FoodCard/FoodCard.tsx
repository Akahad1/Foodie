/* eslint-disable @typescript-eslint/no-explicit-any */
import { Heart } from "lucide-react";
import burger from "../../../public/Images/image 26.png";
import Fresh from "../../../public/Images/Mask Group (1).png";
import Strawberry from "../../../public/Images/image 26 (2).png";
import Chicken from "../../../public/Images/image 26 (3).png";
import food from "../../../public/Images/Ads.png";
import orange from "../../../public/Images/image 26 (6).png";
import PotChicken from "../../../public/Images/image 26 (4).png";
import CrmyChicken from "../../../public/Images/image 26 (5).png";

const foodItems = [
  {
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    image: burger,
    time: "30 Minutes",
    category: "Snack",
  },
  {
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    image: Fresh,
    time: "30 Minutes",
    category: "Fish",
  },
  {
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    image: Strawberry,
    time: "30 Minutes",
    category: "Breakfast",
  },
  {
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    image: Chicken,
    time: "30 Minutes",
    category: "Healthy",
  },
  {
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    image: Chicken,
    time: "30 Minutes",
    category: "Healthy",
  },
  {
    image: food,
  },
  {
    title: "Chicken Meatballs with Cream Cheese",
    image: orange,
    time: "30 Minutes",
    category: "Meat",
  },
  {
    title: "The Best Easy One Pot Chicken and Rice",
    image: PotChicken,
    time: "30 Minutes",
    category: "Meat",
  },
  {
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    image: CrmyChicken,
    time: "30 Minutes",
    category: "Meat",
  },
];

const FoodCard = ({ title, image, time, category }: any) => {
  return (
    <div>
      <div className="lg:mr-15  lg:ml-15 mb-10 mr-3 ml-3 ">
        {title ? (
          <div className="card p-2 bg-[#E7F9FD] shadow-xl rounded-lg  overflow-hidden">
            <div className="relative">
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
              />

              <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                <Heart className="text-red-500" />
              </button>
            </div>

            <div className="p-4">
              <h2 className="font-bold text-lg">{title}</h2>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span className="flex items-center gap-1">⏳ {time}</span>
                <span className="flex items-center gap-1">🍽️ {category}</span>
              </div>
            </div>
          </div>
        ) : (
          <img className="h-[334px] w-full" src={image}></img>
        )}
      </div>
    </div>
  );
};

const FoodGallery = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <p className="text-4xl text-center mb-5 font-bold">
        Simple and tasty recipes
      </p>
      <p className="mt-10 mb-10 text-center text-sm">
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut <br /> labore et dolore magna aliqut enim ad minim{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodItems.map((item, index) => (
          <FoodCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;

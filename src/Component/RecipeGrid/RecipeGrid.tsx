import React from "react";
import img1 from "../../../public/recipe/Mask Group (1).png";
import img2 from "../../../public/recipe/image 26 (1).png";
import img3 from "../../../public/recipe/image 26 (3).png";
import img4 from "../../../public/recipe/image 26 (4).png";
import img5 from "../../../public/recipe/image 26 (5).png";
import img6 from "../../../public/recipe/image 26 (6).png";
import img7 from "../../../public/recipe/image 26.png";
import img8 from "../../../public/recipe/image 26 (6).png";

const recipes = [
  {
    title: "Mixed Tropical Fruit Salad with Superfood Boosts",
    time: "30 Minutes",
    category: "Healthy",
    image: img1,
  },
  {
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutes",
    category: "Western",
    image: img2,
  },
  {
    title: "Healthy Japanese Fried Rice with Asparagus",
    time: "30 Minutes",
    category: "Healthy",
    image: img3,
  },
  {
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    time: "30 Minutes",
    category: "Eastern",
    image: img4,
  },
  {
    title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
    time: "30 Minutes",
    category: "Healthy",
    image: img5,
  },
  {
    title: "Barbeque Spicy Sandwiches with Chips",
    time: "30 Minutes",
    category: "Snack",
    image: img6,
  },
  {
    title: "Firecracker Vegan Lettuce Wraps - Spicy!",
    time: "30 Minutes",
    category: "Seafood",
    image: img7,
  },
  {
    title: "Chicken Ramen Soup with Mushroom",
    time: "30 Minutes",
    category: "Japanese",
    image: img8,
  },
];

const RecipeGrid: React.FC = () => {
  return (
    <div className="lg:mr-15  lg:ml-15 mb-10 mr-3 ml-3 ">
      <div className="container mx-auto p-6">
        <div className="lg:flex justify-between mb-10">
          <h1 className="text-4xl font-bold mb-4">
            Try this delicious recipe to make your day
          </h1>
          <p className="text-gray-500 mb-6 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl overflow-hidden"
            >
              <figure>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-40 object-cover"
                />
              </figure>
              <div className="p-4">
                <h2 className="card-title text-lg font-semibold">
                  {recipe.title}
                </h2>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <span className="mr-2">⏳ {recipe.time}</span>
                  <span className="ml-2">🍽 {recipe.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeGrid;

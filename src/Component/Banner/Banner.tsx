import img1 from "../../../public/Images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1 (1).png";
// import badge from "../../../public/Images/Badge.png";
const Banner = () => {
  return (
    <div className="lg:mr-32 lg:ml-20  mb-10 mr-3 ml-3 md:mr-2 md:ml-0">
      <div className="flex flex-col md:flex-row items-center bg-blue-100  rounded-2xl shadow-lg   border border-blue-200 w-full mt-10 lg:h-[540px]">
        {/* Text Content */}
        <div className="md:w-1/2 p-4 lg:p-10">
          <span className="bg-white px-3 py-1 rounded-full shadow text-sm font-semibold">
            🔥 Hot Recipes
          </span>
          <div className=" flex">
            <h2 className="text-3xl lg:mt-7 font-bold mt-4 lg:text-6xl font-sans">
              Spicy delicious <br /> chicken wings
            </h2>
          </div>
          <p className="text-gray-600 mt-2 text-sm lg:mt-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad
            minim.
          </p>

          {/* Icons and Info */}
          <div className="flex items-center space-x-4 mt-4 lg:mt-7">
            <div className="bg-gray-200 px-3 py-1 rounded-full flex items-center">
              ⏱️ <span className="ml-1">30 Minutes</span>
            </div>
            <div className="bg-gray-200 px-3 py-1 rounded-full flex items-center">
              🍗 <span className="ml-1">Chicken</span>
            </div>
          </div>

          {/* Author Info */}
          <div className="flex items-center mt-6 lg:mt-16">
            <img
              src="https://s3-alpha-sig.figma.com/img/2649/d4c7/dab521f6cd5545aa07040c074c97ef51?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AtDMP2U3tqQYyTsO1hBsWiT2OjNwW8AHFQCtqYJ4I3kjjdo-t7GgWD5wP6fNspmqFOgE5vj~nLZw9i59JlS88Iv6ZWqXyF1EN29nLArI7prdacS~HLsl6PRQPf92JFeelUqpc~qA81n98pMb8YySVWb-tBKNxr1gtGGXXEnnYhFTGNmfKleKqn~SUqeQhbLkPFlgBBF-50SAcgcFo9ODHwXd20HKp5a2xVHmNXi577417cIayTALjxX8gJujyCWzzLy4KPp9zH5dGYrkmZ~EDQhDxHn35ik3wBEJTdcL9uvofNQfgQzNl3DE-S9B45d9ofdJKO6LGUB7imHGqDKd5w__"
              className="w-12 h-12 rounded-full"
              alt="Chicken Wings"
            />
            <div className="ml-3">
              <p className="font-semibold">John Smith</p>
              <p className="text-xs text-gray-500">15 March 2022</p>
            </div>
            {/* Button */}
            <button className="mt-4 bg-black text-white px-4 ml-10 lg:ml-20 py-2 rounded-2xl flex items-center hover:bg-gray-800">
              View Recipes ▶️
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center relative">
          <img
            src={img1}
            className="rounded-lg lg:h-[540px] lg:w-full lg:mr-[-100px]"
            alt="Chicken Wings"
          />

          {/* <div className="absolute top-4 right-10 bg-black text-white text-xs px-3 py-1 rounded-full flex items-center">
            👍 HANDPICKED RECIPES
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;

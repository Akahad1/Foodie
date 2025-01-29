import Breakfast from "../../../public/Images/image 25.png";
import Vegan from "../../../public/Images/image 20.png";
import Meat from "../../../public/Images/image 21.png";
import Dessert from "../../../public/Images/image 22.png";
import Lunch from "../../../public/Images/image 23.png";

interface TItem {
  id: number;
  name: string;
  image: string;
}
const Categories = () => {
  const items = [
    { id: 1, name: "Breakfast", image: Breakfast },
    { id: 2, name: "Vegan", image: Vegan },
    { id: 3, name: "Meat", image: Meat },
    { id: 4, name: "Dessert", image: Dessert },
    { id: 5, name: "Lunch", image: Lunch },
  ];
  return (
    <div className="lg:mr-20 lg:ml-20 mr-3 ml-3 mb-10  w-full mt-20">
      <div className="flex justify-between">
        <p className="font-sans font-bold lg:text-4xl  text-2xl">Categories</p>
        <button className="btn bg-[#E7FAFE] lg:mr-[160px] md:mr-8 mr-4">
          View All Categories
        </button>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 ml-8 md:ml-14 lg:ml-0 lg:gap-2 gap-4">
        {items.map((item: TItem) => (
          <div
            className="mt-10 shadow shadow-[#7082461A] w-32 p-2 rounded-2xl"
            key={item.id}
          >
            <img src={item.image} className="h-24 w-24 ml-2"></img>
            <p className="text-center text-lg mt-3">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

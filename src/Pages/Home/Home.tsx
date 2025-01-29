import Banner from "../../Component/Banner/Banner";
import Categories from "../../Component/Categories/Categories";
import FoodGallery from "../../Component/FoodCard/FoodCard";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <FoodGallery></FoodGallery>
    </div>
  );
};

export default Home;

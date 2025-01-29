import Banner from "../../Component/Banner/Banner";
import Banner2 from "../../Component/Banner2/Banner2";
import Categories from "../../Component/Categories/Categories";
import FoodGallery from "../../Component/FoodCard/FoodCard";
import Post from "../../Component/Post/Post";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <FoodGallery></FoodGallery>
      <Banner2></Banner2>
      <Post></Post>
    </div>
  );
};

export default Home;

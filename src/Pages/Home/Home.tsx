import Banner from "../../Component/Banner/Banner";
import Banner2 from "../../Component/Banner2/Banner2";
import Categories from "../../Component/Categories/Categories";
import FoodGallery from "../../Component/FoodCard/FoodCard";
import NewsletterSignup from "../../Component/NewsletterSignup/NewsletterSignup";
import Post from "../../Component/Post/Post";
import RecipeGrid from "../../Component/RecipeGrid/RecipeGrid";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <FoodGallery></FoodGallery>
      <Banner2></Banner2>
      <Post></Post>
      <RecipeGrid></RecipeGrid>
      <NewsletterSignup></NewsletterSignup>
    </div>
  );
};

export default Home;

import post from "../../../public/Images/Post.png";
import post2 from "../../../public/Images/Post (1).png";
import post3 from "../../../public/Images/Post (2).png";
import post4 from "../../../public/Images/Post (3).png";
const Post = () => {
  return (
    <div>
      <div className="mt-10 mb-10 bg-[#E7F9FD] p-10 pb-15">
        <p className="text-2xl lg:text-4xl md:text-3xl font-sans font-bold text-center ">
          Check out @foodieland on Instagram
        </p>
        <p className="text-sm mt-5 text-center">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore <br /> magna aliqut enim ad
          minim{" "}
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 lg:ml-10 mt-16">
          <img src={post} alt="" />
          <img src={post2} alt="" />
          <img src={post3} alt="" />
          <img src={post4} alt="" />
        </div>
        <div className="flex justify-center">
          <button className="btn text-white bg-black mt-14 ">
            Visit Our Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;

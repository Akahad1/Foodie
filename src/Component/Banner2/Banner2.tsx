import image from "../../../public/Images/Group 880 (1).png";
const Banner2 = () => {
  return (
    <div className="lg:mr-15 lg:ml-20 mb-10 mr-3 ml-3 w-full mt-10">
      <div className="lg:flex md:flex">
        <div>
          <p className="lg:text-4xl  text-2xl font-sans font-bold mt-20">
            Everyone can be a <br />
            chef in their own kitchen
          </p>
          <p className="text-sm  mt-10 mr-3">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna <br />{" "}
            <span className="md:hidden">
              aliqut enim ad minim Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ullam optio dolorum rerum,
              <br /> placeat nesciunt vero excepturi numquam voluptatem minima?
              Iusto repellat nulla, <br />
              asperiores magnam facilis esse neque laudantium repellendus ullam.
            </span>
          </p>
          <button className="btn bg-black lg:mt-24 md:mt-12 mt-24 text-white px-5 py-3">
            {" "}
            Learn More
          </button>
        </div>
        <img
          src={image}
          className="lg:h-[500px] h-96 mt-2  lg:ml-20 md:ml-20 mr-6 ml-3"
        ></img>
      </div>
    </div>
  );
};

export default Banner2;

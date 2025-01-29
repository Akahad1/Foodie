import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100  border-b-2 border-gray-200 pb-5 p-5">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Recipes</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">About us</Link>
              </li>
            </ul>
          </div>
          <p className="lobster font-bold text-2xl ml-5">
            Foodieland<span className="text-red-700">.</span>
          </p>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="font-sans text-lg mr-3" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-sans text-lg mr-3" to="/">
                Recipes
              </Link>
            </li>
            <li>
              <Link className="font-sans text-lg mr-3" to="/">
                Blog
              </Link>
            </li>
            <li>
              <Link className="font-sans text-lg mr-3" to="/">
                Contact
              </Link>
            </li>
            <li>
              <Link className="font-sans text-lg mr-3" to="/">
                About us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="flex lg:justify-between">
            <FaFacebookF className="w-10 h-5 lg:mr-5" />
            <FaTwitter className="w-10 h-5 lg:mr-5" />
            <FaInstagram className="w-10 h-5 lg:mr-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

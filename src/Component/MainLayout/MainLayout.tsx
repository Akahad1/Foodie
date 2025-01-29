import { Outlet } from "react-router";
import Navber from "../Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;

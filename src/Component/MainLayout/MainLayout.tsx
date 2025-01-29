import { Outlet } from "react-router";
import Navber from "../Navber/Navber";

const MainLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;

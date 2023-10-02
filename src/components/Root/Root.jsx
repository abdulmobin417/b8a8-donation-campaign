import Header from "../Header/Header";
import '../../App.css'
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="custom-font mb-20">
      <div className="container mx-auto">
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Resources/Logo.png";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown(!dropDown);
  };
  return (
    <div className="">
      <div className="flex justify-between items-center container mt-12 absolute z-20 px-4">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="md:flex gap-x-12 text-[#0B0B0B] text-lg hidden">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to={"/donation"}
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Donation
          </NavLink>
          <NavLink
            to={"/statistics"}
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Statistics
          </NavLink>
        </div>
        <div className="Relative md:hidden">
          <button onClick={handleDropDown}>
            {!dropDown && <RxHamburgerMenu className="text-2xl" />}
            {dropDown && <RxCross1 className="text-2xl" />}
          </button>
          {dropDown && (
            <div className="absolute right-8">
              <ul className="mt-4 flex flex-col space-y-2 bg-[#FF444A] w-[120px] py-6 text-center rounded-lg text-[#F9E795] font-medium">
                <Link to="/" className="hover:bg-gray-500 hover:py-2">
                  Home
                </Link>
                <Link to="/donation" className="hover:bg-gray-500 hover:py-2">
                  Donation
                </Link>
                <Link to="/statistics" className="hover:bg-gray-500 hover:py-2">
                  Statistics
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

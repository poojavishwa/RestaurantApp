import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {userLogedIn} = useContext(UserContext)

  const cartItems = useSelector((store)=>store.cart.items);

  return (
    <div className="flex  justify-between bg-green-100 shadow-lg">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex"> 
          <li className="px-4">
            Online Status :{onlineStatus?"🟢":"🔴"}
          </li>
            
          <li className="px-4">
            <Link to="/" className="link-style hover:bg-green-300 hover:p-3 hover:text-white">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" className="link-style  hover:bg-green-300 hover:p-3 hover:text-white">
              About Us
            </Link>
          </li >
          <li className="px-4">
            <Link to="/contact" className="link-style  hover:bg-green-300 hover:p-3 hover:text-white">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery" className="link-style  hover:bg-green-300 hover:p-3 hover:text-white">
              Grocery
            </Link>
          </li>
          <li className="px-4">
          <Link to="/cart" className="link-style  hover:bg-green-300 hover:p-3 hover:text-white">
              Cart-({cartItems.length} items)
            </Link>
          </li>
          <button
            className="hover:bg-green-300 hover:p-3 hover:text-white"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4">
            <Link to="/about" className="link-style  hover:bg-green-300 hover:p-3 hover:text-white">
              {userLogedIn}
            </Link>
          </li >
        </ul>
      </div>
    </div>
  );
};

export default Header;

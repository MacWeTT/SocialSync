import { Link } from "react-router-dom";

//Icons
import {
  AiOutlineCompass,
  AiOutlineMessage,
  AiOutlineNotification,
  AiOutlinePlus,
} from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="mr-4 text-2xl">
        SocialSync
      </Link>
      <div className="community-tab">Home</div>
      <div className="search-bar-container">
        <div className="search-bar-icon">
          <FaSearch />
        </div>
        <input
          type="text"
          name="Search SocialSync..."
          id=""
          className="search-bar"
        />
      </div>
      <div className="nav-links">
        <Link to="/explore" className="nav-link">
          <AiOutlineCompass />
        </Link>
        <Link to="/messages" className="nav-link">
          <AiOutlineMessage />
        </Link>
        <Link to="/notifications" className="nav-link">
          <AiOutlineNotification />
        </Link>
        <Link to="/create" className="nav-link">
          <AiOutlinePlus />
        </Link>
      </div>
      <div className="nav-profile_tab">
        <div className="nav-profile_tab-img">
          <img
            src="https://avatars.githubusercontent.com/u/49138395?v=4"
            alt="profile"
            className="rounded-full h-8 w-8"
          />
        </div>
        <div className="nav-profile_tab-name">MacWeTT</div>
      </div>
    </nav>
  );
};

export default Navbar;

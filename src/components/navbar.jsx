import { Link } from "react-router-dom";
import logo from "/Ico.png";
import { BiSearch } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="py-[20px] px-[77px]">
      <nav className="flex  max-w-[1286px] mx-auto justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" />
          <span>Delights at the Table</span>
        </div>

        <ul className="flex items-center gap-[46px]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
        </ul>


        <div className="flex items-center gap-2 bg-[#F5F2F2] rounded-[22.5px] px-5 py-2">
            <BiSearch/>
            <input type="text" className="outline-none bg-[#F5F2F2]  text-[#858585]"  placeholder="Search recipe"/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

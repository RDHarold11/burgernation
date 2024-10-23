import Hero from "./Hero";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="h-[100px] sticky top-0 px-[80px] bg-[#E63945] text-white flex justify-between items-center w-full">
        <div>
          <Link to="/">
            <img
              src="/burgernation.png"
              className=""
              alt="Logo de burgernation"
            />
          </Link>
        </div>
        <div>
          <ul className="flex items-center justify-between gap-6">
            <Link className="title" to="/">
              Home
            </Link>
            <Link className="title" to="/our-menu">
              Our Menu
            </Link>
            <Link className="title">Offers</Link>
            <Link className="title">About</Link>
            <Link className="title">Franchise</Link>
            <Link className="title">Contact</Link>
            <button className="mx-3 bg-[#ffffff] text-[#f5ba25] uppercase rounded-full font-bold px-9 py-4">
              Download APP
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiFillTag, AiFillWindows } from "react-icons/ai";
import { MdStoreMallDirectory } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../public/logo.svg";
import { useState } from "react";

const Sidebar = () => {
  const [navState, setNavState] = useState(false);
  const handleNav = () => {
    if (navState) {
      return setNavState(false);
    }
    setNavState(true);
  };
  return (
    // siderbar
    <div
      className={`flex flex-col gap-y-5 p-5 ${
        !navState ? "absolute" : "fixed w-1/2 h-screen bg-sidebar"
      } sm:sticky sm:top-0 sm:w-4/12 sm:h-screen sm:bg-sidebar sm:p-5 md:w-3/12 lg:w-2/12 z-40`}
    >
      {/* Top  */}
      <div
        className={` flex items-center  ${
          !navState ? "justify-center" : "justify-between"
        } sm:justify-between`}
      >
        {/* Logo  */}
        <div
          className={`sm:flex items-center gap-x-2 ${
            !navState ? "hidden" : "flex"
          }`}
        >
          <Link href={"/"}>
            <Image src={logo} alt="Platinum" className="w-6 h-6" />
          </Link>
          <h2 className="sm:text-lg font-semibold">Platinum</h2>
        </div>
        <button onClick={handleNav} className="h-6 sm:hidden bg-transparent">
          {navState ? <AiOutlineClose /> : <RxHamburgerMenu />}
        </button>
      </div>
      <div className={`${!navState ? "hidden" : "block"} sm:block`}>
        {/* Menu  */}
        <ul className="w-full menu flex flex-col gap-y-2">
          <li>
            <Link
              href="/"
              className="text-black text-sm font-medium flex items-center gap-x-3 rounded-md p-2 hover:bg-light-grey"
            >
              <div className="text-light-black text-xl">
                <FaHome />
              </div>
              <div>Home</div>
            </Link>
          </li>
          <li>
            <Link
              href="/my-business"
              className="text-black text-sm font-medium flex items-center gap-x-3 rounded-md p-2 hover:bg-light-grey"
            >
              <div className="text-light-black text-xl">
                <MdStoreMallDirectory />
              </div>
              <div>My business</div>
            </Link>
          </li>
          <li>
            <Link
              href="/categories"
              className="text-black text-sm font-medium flex items-center gap-x-3 rounded-md p-2 hover:bg-light-grey"
            >
              <div className="text-light-black text-xl">
                <AiFillWindows />
              </div>
              <div>Categories</div>
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-black text-sm font-medium flex items-center gap-x-3 rounded-md p-2 hover:bg-light-grey"
            >
              <div className="text-light-black text-xl">
                <AiFillTag />
              </div>
              <div>Products</div>
            </Link>
          </li>
          <li>
            <Link
              href="/logout"
              className="text-black text-sm font-medium flex items-center gap-x-3 rounded-md p-2 hover:bg-light-grey"
            >
              <div className="text-light-black text-xl">
                <TbLogout />
              </div>
              <div>Logout</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

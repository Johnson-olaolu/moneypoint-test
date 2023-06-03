import React from "react";
import { GiLifeBuoy } from "react-icons/gi";
import { RiKey2Fill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import NavbarStyles from "./navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <div className={NavbarStyles.navbar}>
      <GiLifeBuoy size={48} className={NavbarStyles.lifebouy} />
      <nav className={NavbarStyles.menu}>
        <ul className="">
          <li className={NavbarStyles.active}>Home</li>
          <li className="">
            Services <FaChevronDown />
          </li>
          <li className="">About Us</li>
          <li className="">Blog</li>
          <li className="">Career</li>
        </ul>
        <div className={NavbarStyles.button_menu}>
          <button className={NavbarStyles.contact_us}>Contact Us</button>
          <button className={NavbarStyles.login}>
            <RiKey2Fill size={24} className={NavbarStyles.key} /> Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

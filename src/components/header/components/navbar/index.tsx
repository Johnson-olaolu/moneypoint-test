import React, { useLayoutEffect, useRef } from "react";
import { GiLifeBuoy } from "react-icons/gi";
import { RiKey2Fill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import NavbarStyles from "./navbar.module.scss";
import { gsap, Power3 } from "gsap";

const Navbar: React.FC = () => {
  const navBarRef = useRef<HTMLDivElement>(null);
  const lifeBouyRef = useRef<HTMLDivElement>(null);
  const menuHomeRef = useRef<HTMLLIElement>(null);
  const menuServicesRef = useRef<HTMLLIElement>(null);
  const menuAboutUsRef = useRef<HTMLLIElement>(null);
  const menuBlogRef = useRef<HTMLLIElement>(null);
  const menuCareerRef = useRef<HTMLLIElement>(null);
  const contactUsButtonRef = useRef<HTMLButtonElement>(null);
  const loginButtonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(
        [
          lifeBouyRef.current,
          menuHomeRef.current,
          menuServicesRef.current,
          menuAboutUsRef.current,
          menuBlogRef.current,
          menuCareerRef.current,
          contactUsButtonRef.current,
          loginButtonRef.current,
        ],
        {
          opacity: 0,
          scale: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: Power3.easeOut,
        }
      );
    });

    // tween.play();
    console.log(navBarRef.current);
    // gsap.from()
    return () => ctx.revert();
  }, []);
  return (
    <div ref={navBarRef} className={NavbarStyles.navbar}>
      <div ref={lifeBouyRef} className={NavbarStyles.lifebouy}>
        <GiLifeBuoy size={48} className={NavbarStyles.lifebouy} />
      </div>

      <nav className={NavbarStyles.menu}>
        <ul className="">
          <li ref={menuHomeRef} className={NavbarStyles.active}>
            Home
          </li>
          <li ref={menuServicesRef} className="">
            Services <FaChevronDown />
          </li>
          <li ref={menuAboutUsRef} className="">
            About Us
          </li>
          <li ref={menuBlogRef} className="">
            Blog
          </li>
          <li ref={menuCareerRef} className="">
            Career
          </li>
        </ul>
        <div className={NavbarStyles.button_menu}>
          <button ref={contactUsButtonRef} className={NavbarStyles.contact_us}>
            Contact Us
          </button>
          <button ref={loginButtonRef} className={NavbarStyles.login}>
            <RiKey2Fill size={24} className={NavbarStyles.key} /> Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

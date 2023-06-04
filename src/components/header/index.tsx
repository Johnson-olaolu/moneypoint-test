import React, { useLayoutEffect, useRef } from "react";
import HeaderStyles from "./header.module.scss";
import Navbar from "./components/navbar";
import Asterisk from "../../assets/icons/Asterisk";
import HeaderImg from "../../assets/images/kyle-hinkson-xyXcGADvAwE-unsplash.jpg";
import { gsap } from "gsap";

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const mainText1Ref = useRef<HTMLDivElement>(null);
  const mainText2Ref = useRef<HTMLDivElement>(null);
  const mainText3Ref = useRef<HTMLDivElement>(null);
  const point1Ref = useRef<HTMLDivElement>(null);
  const point2Ref = useRef<HTMLDivElement>(null);
  const arrowDownRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        background: "#0b0f17",
        duration: 1,
      });

      gsap.from([mainText1Ref.current, mainText2Ref.current, mainText3Ref.current], {
        y: 200,
        x: -100,
        // scale: 0,
        fontSize: "1px",
        opacity: 0,
        duration: 1,
        stagger: 0.3,
      });

      gsap.from([point1Ref.current, point2Ref.current, arrowDownRef.current], {
        y: 200,
        x: -200,
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
      });

      gsap.from([arrowDownRef.current], {
        scale: 0,
        opacity: 0,
        duration: 1,
        delay: 0.3,
      });

      gsap.to(imageRef.current, {
        duration: 3,
        "--clip": "100%  at 50% 50%",
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div ref={headerRef} className={HeaderStyles.header}>
      <Navbar />
      <div className={HeaderStyles.jumbotron}>
        <div className={HeaderStyles.jumbotron_section_1}>
          <h2 className={HeaderStyles.main_text}>
            <span ref={mainText1Ref}>Darcy's </span>
            <span ref={mainText2Ref}>insurance </span>
            <span ref={mainText3Ref}>products</span>
          </h2>
        </div>
        <div className={HeaderStyles.jumbotron_section_2}>
          <div className="">
            <div className={HeaderStyles.points}>
              <div ref={point1Ref} className={HeaderStyles.single_point}>
                <div className={HeaderStyles.custom_bullet}>
                  <Asterisk />
                </div>
                <p className="">
                  Our <a href="">plans</a> are saving policyholders 30% - 60% on premiums
                </p>
              </div>
              <div ref={point2Ref} className={HeaderStyles.single_point}>
                <div className={HeaderStyles.custom_bullet}>
                  <Asterisk />
                </div>
                <p className="">We offer a choice of low deductibles and includes no value-added services</p>
              </div>
            </div>
            <div ref={arrowDownRef} className={HeaderStyles.point_down}>
              <i className={HeaderStyles.long_arrow}></i>
            </div>
          </div>

          <div
            ref={imageRef}
            className={HeaderStyles.image}
            style={{
              backgroundImage: `url(${HeaderImg})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;

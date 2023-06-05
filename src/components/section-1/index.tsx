import React, { useLayoutEffect, useRef } from "react";
import Section1Styles from "./section-1.module.scss";
import HomeImg from "../../assets/images/home.jpg";
import DrugImg from "../../assets/images/drugs.jpg";
import HouseImg from "../../assets/images/house.jpg";
import VehicleImg from "../../assets/images/vehicle.jpg";
import lifeBouyImg from "../../assets/images/lifebouy.jpg";
import { gsap } from "gsap";

const Section1: React.FC = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const cardHomeInsuranceRef = useRef<HTMLDivElement>(null);
  const cardHomeInsuranceTextRef = useRef<HTMLDivElement>(null);
  const cardImgPlaceholderRef = useRef<HTMLDivElement>(null);
  const viewServicesRef = useRef<HTMLDivElement>(null);
  const viewServicesTitleRef = useRef<HTMLDivElement>(null);
  const viewServicesTextRef = useRef<HTMLDivElement>(null);
  const viewServicesButtonRef = useRef<HTMLButtonElement>(null);
  const cardVehicleRef = useRef<HTMLDivElement>(null);
  const cardVehicleTextRef = useRef<HTMLDivElement>(null);
  const cardMortgageRef = useRef<HTMLDivElement>(null);
  const cardMortgageTextRef = useRef<HTMLDivElement>(null);
  const cardMedicalRef = useRef<HTMLDivElement>(null);
  const cardMedicalTextRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(section1Ref.current, {
        opacity: 0,
        // x: 200,
        duration: 1,
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top center",
        },
      });
      gsap.from([cardHomeInsuranceRef.current, cardHomeInsuranceTextRef.current], {
        opacity: 0,
        scale: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top center",
        },
      });
      gsap.to(cardImgPlaceholderRef.current, {
        duration: 3,
        "--clip": "100%  at 50% 50%",
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top center",
        },
      });
      gsap.from(viewServicesRef.current, {
        opacity: 0,
        scale: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top center",
        },
      });
      gsap.from([viewServicesTitleRef.current, viewServicesTextRef.current, viewServicesButtonRef.current], {
        opacity: 0,
        scale: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top center",
        },
      });

      gsap.from([cardVehicleRef.current, cardVehicleTextRef.current], {
        opacity: 0,
        scale: 0,
        duration: 1,
        stagger: 0.3,
        delay: 0.3,
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top center",
        },
      });

      gsap.from([cardMortgageRef.current, cardMortgageTextRef.current], {
        opacity: 0,
        scale: 0,
        duration: 1,
        stagger: 0.3,
        delay: 0.6,
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top center",
        },
      });

      gsap.from([cardMedicalRef.current, cardMedicalTextRef.current], {
        opacity: 0,
        scale: 0,
        duration: 1,
        stagger: 0.3,
        delay: 0.9,
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top center",
        },
      });

      // gsap.to(section1Ref.current, {
      //   x: 100,
      //   duration: 2,
      //   ease: "bounce",
      //   delay: 1,
      //   scrollTrigger: {
      //     trigger: section1Ref.current,
      //     markers: true,
      //   },
      // });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div ref={section1Ref} className={Section1Styles.section1}>
      <div className={Section1Styles.grid1}>
        <div ref={cardHomeInsuranceRef} className={Section1Styles.cardHomeInsurance} style={{ backgroundImage: `url(${HomeImg})` }}>
          <span ref={cardHomeInsuranceTextRef} className={Section1Styles.cardInfoText}>
            Home Insurance
          </span>
        </div>
        <div ref={cardImgPlaceholderRef} className={Section1Styles.cardImgPlaceholder} style={{ backgroundImage: `url(${lifeBouyImg})` }}></div>
        <div ref={viewServicesRef} className={Section1Styles.viewServices}>
          <div className={Section1Styles.viewServicesInfo}>
            <h4 ref={viewServicesTitleRef} className={Section1Styles.viewServicesTitle}>
              Best choice
            </h4>
            <p ref={viewServicesTextRef} className={Section1Styles.viewServicesBody}>
              Not all insurance are the same. That's why agency knows that your insurance should be customized to fit your situation.
            </p>
          </div>
          <button ref={viewServicesButtonRef} className={Section1Styles.viewServicesButton}>
            View all services
          </button>
        </div>
      </div>
      <div className={Section1Styles.grid2}>
        <div ref={cardVehicleRef} className={Section1Styles.cardVehicle} style={{ backgroundImage: `url(${VehicleImg})` }}>
          <span ref={cardVehicleTextRef} className={Section1Styles.cardInfoText}>
            Vehicle damage
          </span>
        </div>
        <div ref={cardMortgageRef} className={Section1Styles.cardMortgage} style={{ backgroundImage: `url(${HouseImg})` }}>
          <span ref={cardMortgageTextRef} className={Section1Styles.cardInfoText}>
            Mortgage insurance
          </span>
        </div>
        <div ref={cardMedicalRef} className={Section1Styles.cardMedical} style={{ backgroundImage: `url(${DrugImg})` }}>
          <span ref={cardMedicalTextRef} className={Section1Styles.cardInfoText}>
            Medical expenses
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section1;

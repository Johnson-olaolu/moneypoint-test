import React, { useLayoutEffect, useRef, useState } from "react";
import Section2Styles from "./section-2.module.scss";
import Asterisk from "../../assets/icons/Asterisk";
import { gsap } from "gsap";
import Image1 from "../../assets/images/person1.jpg";
import Image2 from "../../assets/images/person2.jpg";
import ExpertCard from "./components/expert-card";

const experts = [
  {
    name: "George Darcy",
    title: "The agency founder ",
    image: Image1,
    text: `With over twenty years of industry experience, 'Darcy's insurance products' has learned a lot. the one things we know for sure is that we're all about you. If you find searching for insurance fustrating we are here to help`,
  },
  {
    name: "George Darcy",
    title: "The agency founder ",
    image: Image2,
    text: `With over twenty years of industry experience, 'Darcy's insurance products' has learned a lot. the one things we know for sure is that we're all about you. If you find searching for insurance fustrating we are here to help`,
  },
  {
    name: "George Darcy",
    title: "The agency founder ",
    image: Image1,
    text: `With over twenty years of industry experience, 'Darcy's insurance products' has learned a lot. the one things we know for sure is that we're all about you. If you find searching for insurance fustrating we are here to help`,
  },
  {
    name: "George Darcy",
    title: "The agency founder ",
    image: Image2,
    text: `With over twenty years of industry experience, 'Darcy's insurance products' has learned a lot. the one things we know for sure is that we're all about you. If you find searching for insurance fustrating we are here to help`,
  },
  {
    name: "George Darcy",
    title: "The agency founder ",
    image: Image1,
    text: `With over twenty years of industry experience, 'Darcy's insurance products' has learned a lot. the one things we know for sure is that we're all about you. If you find searching for insurance fustrating we are here to help`,
  },
];

const Section2: React.FC = () => {
  const [activeExpert, setActiveExpert] = useState(0);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section2WrapperRef = useRef<HTMLDivElement>(null);
  const section2Info1Ref = useRef<HTMLSpanElement>(null);
  const section2Info2Ref = useRef<HTMLSpanElement>(null);
  const section2Info3Ref = useRef<HTMLSpanElement>(null);
  const section2InfoBulletRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(section2WrapperRef.current, {
        opacity: 0,
        scale: 0,
        duration: 2,
        x: 500,
        y: 500,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top center",
        },
      });

      gsap.from([section2Info1Ref.current, section2Info2Ref.current, section2Info3Ref.current], {
        y: 200,
        x: 100,
        // scale: 0,
        fontSize: "1px",
        opacity: 0,
        duration: 2,
        stagger: 0.3,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top center",
        },
      });

      gsap.from(section2InfoBulletRef.current, {
        scale: 0,
        opacity: 0,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top center",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={section2Ref} className="">
      <div ref={section2WrapperRef} className={Section2Styles.section2}>
        <div className={Section2Styles.expert}>
          <ExpertCard
            image={experts[activeExpert].image}
            text={experts[activeExpert].text}
            name={experts[activeExpert].name}
            title={experts[activeExpert].title}
            sectionRef={section2Ref}
          />
          <div className={Section2Styles.pagination}>
            <div onClick={() => setActiveExpert(0)} className={activeExpert === 0 ? Section2Styles.activeDot : Section2Styles.dot}></div>
            <div onClick={() => setActiveExpert(1)} className={activeExpert === 1 ? Section2Styles.activeDot : Section2Styles.dot}></div>
            <div onClick={() => setActiveExpert(2)} className={activeExpert === 2 ? Section2Styles.activeDot : Section2Styles.dot}></div>
            <div onClick={() => setActiveExpert(3)} className={activeExpert === 3 ? Section2Styles.activeDot : Section2Styles.dot}></div>
            <div onClick={() => setActiveExpert(4)} className={activeExpert === 4 ? Section2Styles.activeDot : Section2Styles.dot}></div>
          </div>
        </div>
        <div className={Section2Styles.info}>
          <div ref={section2InfoBulletRef} className={Section2Styles.custom_bullet}>
            <Asterisk />
          </div>
          <p className="">
            <span ref={section2Info1Ref}> Our </span>
            <span ref={section2Info2Ref}>experts </span>
            <span ref={section2Info3Ref}>say</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;

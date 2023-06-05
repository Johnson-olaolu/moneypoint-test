/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useLayoutEffect, useRef } from "react";
import Section2Styles from "../../section-2.module.scss";
import { gsap } from "gsap";

const ExpertCard: React.FC<{
  name: string;
  image: string;
  title: string;
  text: string;
  sectionRef: any;
}> = (props) => {
  const { name, image, title, text, sectionRef } = props;

  const expertSectionRef = useRef<HTMLDivElement>(null);
  const expertImgRef = useRef<HTMLDivElement>(null);
  const expertNameRef = useRef<HTMLHeadingElement>(null);
  const expertTitleRef = useRef<HTMLHeadingElement>(null);
  const expertTextRef = useRef<HTMLParagraphElement>(null);
  const expertButtonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(expertImgRef.current, {
        duration: 3,
        "--clip": "100%  at 50% 50%",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
        },
      });

      gsap.from([expertNameRef.current, expertTitleRef.current, expertTextRef.current, expertButtonRef.current], {
        opacity: 0,
        scale: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div ref={expertSectionRef} className={Section2Styles.expertSection}>
      <div
        ref={expertImgRef}
        className={Section2Styles.expertImg}
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className={Section2Styles.expertInfo}>
        <h4 ref={expertNameRef} className={Section2Styles.expertName}>
          {name}
        </h4>
        <h6 ref={expertTitleRef} className={Section2Styles.expertTitle}>
          {title}
        </h6>
        <p ref={expertTextRef} className={Section2Styles.expertText}>
          {text}
        </p>
        <button ref={expertButtonRef} className={Section2Styles.expertButton}>
          Get a consultation
        </button>
      </div>
    </div>
  );
};

export default ExpertCard;

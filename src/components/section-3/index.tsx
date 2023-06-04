import React, { useLayoutEffect, useRef } from "react";
import Section3Styles from "./section-3.module.scss";
import Asterisk from "../../assets/icons/Asterisk";
import FamilyImg from "../../assets/images/family.jpg";
import { gsap } from "gsap";

const Section3: React.FC = () => {
  const section3Ref = useRef<HTMLDivElement>(null);
  const supportText1Ref = useRef<HTMLDivElement>(null);
  const supportText2Ref = useRef<HTMLDivElement>(null);
  const supportText3Ref = useRef<HTMLDivElement>(null);
  const bulletPoint1Ref = useRef<HTMLDivElement>(null);
  const bulletPoint2Ref = useRef<HTMLDivElement>(null);
  const section3ButtonRef = useRef<HTMLButtonElement>(null);
  const section3ImageRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: section3Ref.current,
          // pin: true, // pin the trigger element while active
          start: "top center", // when the top of the trigger hits the top of the viewport
          // end: "+=500", // end after scrolling 500px beyond the start
          // scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          markers: true,
          // snap: {
          //   snapTo: "labels", // snap to the closest label in the timeline
          //   duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          //   ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
          // }
        },
      });

      gsap.from(section3Ref.current, {
        opacity: 0,
        // x: 200,
        duration: 1,
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top center",
        },
      });
      gsap.from([supportText1Ref.current, supportText2Ref.current, supportText3Ref.current], {
        y: 200,
        x: -100,
        // scale: 0,
        fontSize: "1px",
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top center",
        },
      });
    });

    gsap.from([bulletPoint1Ref.current, bulletPoint2Ref.current], {
      // scale: 0,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      delay: 0.3,
      scrollTrigger: {
        trigger: section3Ref.current,
        start: "top center",
      },
    });

    gsap.to(section3ImageRef.current, {
      duration: 3,
      "--clip": "100%  at 50% 50%",
      scrollTrigger: {
        trigger: section3Ref.current,
        start: "top center",
      },
    });
    return () => ctx.revert();
  }, []);
  return (
    <div ref={section3Ref} className={Section3Styles.section3}>
      <div className={Section3Styles.supportText}>
        <p>
          <span ref={supportText1Ref}>Support </span>
          <span ref={supportText2Ref}>at every </span>
          <span ref={supportText3Ref} className={Section3Styles.largeText}>
            Step
          </span>
        </p>
      </div>
      <div className={Section3Styles.bulletPoints}>
        <div className={Section3Styles.points}>
          <div ref={bulletPoint1Ref} className={Section3Styles.single_point}>
            <div className={Section3Styles.custom_bullet}>
              <Asterisk />
            </div>
            <p className="">
              Participate in the <a href="">loyalty program</a>. Pay for the service online to get bonuses for our other services. We have a lot of
              bonuses!
            </p>
          </div>
          <div ref={bulletPoint2Ref} className={Section3Styles.single_point}>
            <div className={Section3Styles.custom_bullet}>
              <Asterisk />
            </div>
            <p className="">You can help other people: choose a donation fund and share the link with your friends!</p>
          </div>
        </div>
        <button ref={section3ButtonRef} className={Section3Styles.button}>
          Choose a fund
        </button>
      </div>
      <div
        ref={section3ImageRef}
        className={Section3Styles.image}
        style={{
          backgroundImage: `url(${FamilyImg})`,
        }}
      ></div>
    </div>
  );
};

export default Section3;

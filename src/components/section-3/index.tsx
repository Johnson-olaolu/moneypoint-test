import React from "react";
import Section3Styles from "./section-3.module.scss";
import Asterisk from "../../assets/icons/Asterisk";
import FamilyImg from "../../assets/images/family.jpg";

const Section3 = () => {
  return (
    <div className={Section3Styles.section3}>
      <div className={Section3Styles.supportText}>
        <p>
          Support at every <span>Step</span>
        </p>
      </div>
      <div className={Section3Styles.bulletPoints}>
        <div className={Section3Styles.points}>
          <div className={Section3Styles.single_point}>
            <div className={Section3Styles.custom_bullet}>
              <Asterisk />
            </div>
            <p className="">
              Participate in the <a href="">loyalty program</a>. Pay for the service online to get bonuses for our other services. We have a lot of
              bonuses!
            </p>
          </div>
          <div className={Section3Styles.single_point}>
            <div className={Section3Styles.custom_bullet}>
              <Asterisk />
            </div>
            <p className="">You can help other people: choose a donation fund and share the link with your friends!</p>
          </div>
        </div>
        <button className={Section3Styles.button}>Choose a fund</button>
      </div>
      <div
        className={Section3Styles.image}
        style={{
          backgroundImage: `url(${FamilyImg})`,
        }}
      ></div>
    </div>
  );
};

export default Section3;

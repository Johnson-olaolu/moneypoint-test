import React from "react";
import Section2Styles from "./section-2.module.scss";
import Asterisk from "../../assets/icons/Asterisk";
import Person1Img from "../../assets/images/person1.jpg";

const Section2: React.FC = () => {
  return (
    <div className={Section2Styles.section2}>
      <div className={Section2Styles.expert}>
        <div className={Section2Styles.expertSection}>
          <div
            className={Section2Styles.expertImg}
            style={{
              backgroundImage: `url(${Person1Img})`,
            }}
          ></div>
          <div className={Section2Styles.expertInfo}>
            <h4 className={Section2Styles.expertName}>George Darcy</h4>
            <h6 className={Section2Styles.expertTitle}>The agency founder</h6>
            <p className={Section2Styles.expertText}>
              With over twenty years of industry experience, 'Darcy's insurance products' has learned a lot. the one things we know for sure is that
              we're all about you. If you find searching for insurance fustrating we are here to help
            </p>
            <button className={Section2Styles.expertButton}>Get a consultation</button>
          </div>
        </div>
        <div className={Section2Styles.pagination}>
          <div className={Section2Styles.dot}></div>
          <div className={Section2Styles.activeDot}></div>
          <div className={Section2Styles.dot}></div>
          <div className={Section2Styles.dot}></div>
          <div className={Section2Styles.dot}></div>
        </div>
      </div>
      <div className={Section2Styles.info}>
        <div className={Section2Styles.custom_bullet}>
          <Asterisk />
        </div>
        <span className="">Our experts say</span>
      </div>
    </div>
  );
};

export default Section2;

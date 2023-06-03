import React from "react";
import HeaderStyles from "./header.module.scss";
import Navbar from "./components/navbar";
import Asterisk from "../../assets/icons/Asterisk";
import HeaderImg from "../../assets/images/kyle-hinkson-xyXcGADvAwE-unsplash.jpg";

const Header = () => {
  return (
    <div className={HeaderStyles.header}>
      <Navbar />
      <div className={HeaderStyles.jumbotron}>
        <div className={HeaderStyles.jumbotron_section_1}>
          <h2 className={HeaderStyles.main_text}>Darcy's insurance products</h2>
        </div>
        <div className={HeaderStyles.jumbotron_section_2}>
          <div className="">
            <div className={HeaderStyles.points}>
              <div className={HeaderStyles.single_point}>
                <div className={HeaderStyles.custom_bullet}>
                  <Asterisk />
                </div>
                <p className="">
                  Our <a href="">plans</a> are saving policyholders 30% - 60% on premiums
                </p>
              </div>
              <div className={HeaderStyles.single_point}>
                <div className={HeaderStyles.custom_bullet}>
                  <Asterisk />
                </div>
                <p className="">We offer a choice of low deductibles and includes no value-added services</p>
              </div>
            </div>
            <div className={HeaderStyles.point_down}>
              <i className={HeaderStyles.long_arrow}></i>
            </div>
          </div>

          <div
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

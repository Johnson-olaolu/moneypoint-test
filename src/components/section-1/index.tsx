import React from "react";
import Section1Styles from "./section-1.module.scss";
import HomeImg from "../../assets/images/home.jpg";
import DrugImg from "../../assets/images/drugs.jpg";
import HouseImg from "../../assets/images/house.jpg";
import VehicleImg from "../../assets/images/vehicle.jpg";
import lifeBouyImg from "../../assets/images/lifebouy.jpg";

const Section1: React.FC = () => {
  return (
    <div className={Section1Styles.section1}>
      <div className={Section1Styles.grid1}>
        <div className={Section1Styles.cardHomeInsurance} style={{ backgroundImage: `url(${HomeImg})` }}>
          <span className={Section1Styles.cardInfoText}>Home Insurance</span>
        </div>
        <div className={Section1Styles.cardImgPlaceholder} style={{ backgroundImage: `url(${lifeBouyImg})` }}></div>
        <div className={Section1Styles.viewServices}>
          <div className={Section1Styles.viewServicesInfo}>
            <h4 className={Section1Styles.viewServicesTitle}>Best choice</h4>
            <p className={Section1Styles.viewServicesBody}>
              Not all insurance are the same. That's why agency knows that your insurance should be customized to fit your situation.
            </p>
          </div>
          <button className={Section1Styles.viewServicesButton}>View all services</button>
        </div>
      </div>
      <div className={Section1Styles.grid2}>
        <div className={Section1Styles.cardVehicle} style={{ backgroundImage: `url(${VehicleImg})` }}>
          <span className={Section1Styles.cardInfoText}>Vehicle damage</span>
        </div>
        <div className={Section1Styles.cardMortgage} style={{ backgroundImage: `url(${HouseImg})` }}>
          <span className={Section1Styles.cardInfoText}>Mortgage insurance</span>
        </div>
        <div className={Section1Styles.cardMedical} style={{ backgroundImage: `url(${DrugImg})` }}>
          <span className={Section1Styles.cardInfoText}>Medical expenses</span>
        </div>
      </div>
    </div>
  );
};

export default Section1;

import React from "react";
import FooterStyles from "./footer.module.scss";
import { GiLifeBuoy } from "react-icons/gi";

const Footer: React.FC = () => {
  return (
    <div className={FooterStyles.footer}>
      <div className={FooterStyles.grid}>
        <div className={FooterStyles.gridSection1}>
          <h4 className="">Need Numbers?</h4>
          <div className={FooterStyles.categories}>
            <span className={FooterStyles.categoryActive}>Travel</span>
            <span className={FooterStyles.category}>Health</span>
            <span className={FooterStyles.category}>CASCO</span>
            <span className={FooterStyles.category}>Mortgage</span>
            <span className={FooterStyles.category}>Fire</span>
          </div>
          <div className={FooterStyles.form}>
            <div className={FooterStyles.formControl}>
              <label htmlFor="">Enter the country</label>
              <input type="text" />
            </div>
            <div className={FooterStyles.formControl}>
              <label htmlFor="">Enter the country</label>
              <input type="text" />
            </div>
          </div>
          <button className={FooterStyles.button}>Calculate</button>
        </div>
        <div className={FooterStyles.gridSection2}>
          <div className={FooterStyles.menu}>
            <h6 className={FooterStyles.menuTitle}>Insurance services</h6>
            <ul className="">
              <li className="">Medical expenses</li>
              <li className="">Family health Insurance</li>
              <li className="">Vehicle damage</li>
              <li className="">Property loss</li>
              <li className="">Fire</li>
            </ul>
          </div>
          <div className={FooterStyles.menu}>
            <h6 className={FooterStyles.menuTitle}>Company</h6>
            <ul className="">
              <li className="">About us</li>
              <li className="">Career</li>
              <li className="">Help</li>
              <li className="">FAQ</li>
              <li className="">Blog</li>
            </ul>
          </div>
          <div className={FooterStyles.menu}>
            <h6 className={FooterStyles.menuTitle}>Bonus</h6>
            <ul className="">
              <li className="">Gift certificate</li>
              <li className="">Affiliate program</li>
              <li className="">Trainings</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={FooterStyles.footerInner}>
        <div className="">
          <GiLifeBuoy size={40} />
          <p className="">Darcy's insurance products</p>
        </div>
        <a href="" className="">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;

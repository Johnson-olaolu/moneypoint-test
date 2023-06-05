import React, { useLayoutEffect, useRef } from "react";
import FooterStyles from "./footer.module.scss";
import { GiLifeBuoy } from "react-icons/gi";
import { gsap } from "gsap";

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const footerTitleRef = useRef<HTMLDivElement>(null);
  const footerCategoryTravelRef = useRef<HTMLSpanElement>(null);
  const footerCategoryHealthRef = useRef<HTMLSpanElement>(null);
  const footerCategoryCASCORef = useRef<HTMLSpanElement>(null);
  const footerCategoryMortgageRef = useRef<HTMLSpanElement>(null);
  const footerCategoryFireRef = useRef<HTMLSpanElement>(null);
  const formControl1Ref = useRef<HTMLDivElement>(null);
  const formControl2Ref = useRef<HTMLDivElement>(null);
  const formControlButtonRef = useRef<HTMLButtonElement>(null);
  const menuInsuraceTitleRef = useRef<HTMLHeadingElement>(null);
  const menuInsuraceList1Ref = useRef<HTMLUListElement>(null);
  const menuInsuraceList2Ref = useRef<HTMLUListElement>(null);
  const menuCompanyTitleRef = useRef<HTMLHeadingElement>(null);
  const menuCompanyListRef = useRef<HTMLUListElement>(null);
  const menuBonusTitleRef = useRef<HTMLHeadingElement>(null);
  const menuBonusListRef = useRef<HTMLUListElement>(null);
  const footerInnerLifebouyRef = useRef<HTMLDivElement>(null);
  const footerInnerCompanyTitleRef = useRef<HTMLParagraphElement>(null);
  const footerInnerPrivacyRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        opacity: 0,
        // x: 200,
        duration: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top center",
        },
      });

      gsap.from(
        [
          footerTitleRef.current,
          footerCategoryTravelRef.current,
          footerCategoryHealthRef.current,
          footerCategoryCASCORef.current,
          footerCategoryMortgageRef.current,
          footerCategoryFireRef.current,
          formControl1Ref.current,
          formControl2Ref.current,
          formControlButtonRef.current,
        ],
        {
          opacity: 0,
          duration: 0.8,
          scale: 0,
          stagger: 0.3,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top center",
          },
        }
      );

      gsap.from(
        [
          menuInsuraceTitleRef.current,
          menuInsuraceList1Ref.current,
          menuInsuraceList2Ref.current,
          menuCompanyTitleRef.current,
          menuCompanyListRef.current,
          menuBonusTitleRef.current,
          menuBonusListRef.current,
        ],
        {
          opacity: 0,
          duration: 0.8,
          scale: 0,
          stagger: 0.3,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top center",
          },
        }
      );

      gsap.from([footerInnerLifebouyRef.current, footerInnerCompanyTitleRef.current, footerInnerPrivacyRef.current], {
        opacity: 0,
        duration: 1,
        scale: 0,
        stagger: 0.3,
        delay: 0.9,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top center",
        },
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div ref={footerRef} className={FooterStyles.footer}>
      <div className={FooterStyles.grid}>
        <div className={FooterStyles.gridSection1}>
          <h4 ref={footerTitleRef} className="">
            Need Numbers?
          </h4>
          <div className={FooterStyles.categories}>
            <span ref={footerCategoryTravelRef} className={FooterStyles.categoryActive}>
              Travel
            </span>
            <span ref={footerCategoryHealthRef} className={FooterStyles.category}>
              Health
            </span>
            <span ref={footerCategoryCASCORef} className={FooterStyles.category}>
              CASCO
            </span>
            <span ref={footerCategoryMortgageRef} className={FooterStyles.category}>
              Mortgage
            </span>
            <span ref={footerCategoryFireRef} className={FooterStyles.category}>
              Fire
            </span>
          </div>
          <div className={FooterStyles.form}>
            <div ref={formControl1Ref} className={FooterStyles.formControl}>
              <label htmlFor="">Enter the country</label>
              <input type="text" />
            </div>
            <div ref={formControl2Ref} className={FooterStyles.formControl}>
              <label htmlFor="">Enter the country</label>
              <input type="text" />
            </div>
          </div>
          <button ref={formControlButtonRef} className={FooterStyles.button}>
            Calculate
          </button>
        </div>
        <div className={FooterStyles.gridSection2}>
          <div className={FooterStyles.menu}>
            <h6 ref={menuInsuraceTitleRef} className={FooterStyles.menuTitle}>
              Insurance services
            </h6>
            <ul ref={menuInsuraceList1Ref} className="">
              <li className="">Medical expenses</li>
              <li className="">Family health Insurance</li>
            </ul>
            <ul ref={menuInsuraceList2Ref} className="">
              <li className="">Vehicle damage</li>
              <li className="">Property loss</li>
              <li className="">Fire</li>
            </ul>
          </div>
          <div className={FooterStyles.menu}>
            <h6 ref={menuCompanyTitleRef} className={FooterStyles.menuTitle}>
              Company
            </h6>
            <ul ref={menuCompanyListRef} className="">
              <li className="">About us</li>
              <li className="">Career</li>
              <li className="">Help</li>
              <li className="">FAQ</li>
              <li className="">Blog</li>
            </ul>
          </div>
          <div className={FooterStyles.menu}>
            <h6 ref={menuBonusTitleRef} className={FooterStyles.menuTitle}>
              Bonus
            </h6>
            <ul ref={menuBonusListRef} className="">
              <li className="">Gift certificate</li>
              <li className="">Affiliate program</li>
              <li className="">Trainings</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={FooterStyles.footerInner}>
        <div className="">
          <div ref={footerInnerLifebouyRef}>
            <GiLifeBuoy size={48} className={FooterStyles.lifebouy} />
          </div>
          <p ref={footerInnerCompanyTitleRef} className="">
            Darcy's insurance products
          </p>
        </div>
        <a ref={footerInnerPrivacyRef} href="" className="">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;

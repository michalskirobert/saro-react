import React from "react";
import Facebook from "../../../assets/images/components/footer/Facebook.svg";
import Instagram from "../../../assets/images/components/footer/Instagram.svg";
import Youtube from "../../../assets/images/components/footer/Youtube.svg";
import Rectangle from "../../../assets/images/components/footer/Rectangle.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-page">
        <div className="footer-page_language-button">
          <form onClick={(e) => e.preventDefault()}>
            <button className="language-button__language">
              <img src={Rectangle} className="language-button__rectangle" alt=""/>
              English
            </button>
          </form>
        </div>
        <h2 className="footer-page__contact">Contact us</h2>
        <p className="footer-page__description">
          You can contact us anytime through the Contact Form. You can use
          Japanese, Korean, English or <a href="">even Polsih</a> or you can
          write to us by your own contact@saro.website
        </p>
        <h2 className="footer-page__follow">Follow us</h2>
        <ul className="footer-page__socialMedia">
          <li>
            <a href="#" className="footer-page__facebook">
              <img src={Facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#" className="footer-page__instagram">
              <img src={Instagram} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="#" className="footer-page__youtube">
              <img src={Youtube} alt="youtube" />
            </a>
          </li>
        </ul>
        <div></div>
      </div>
    </>
  );
};

export default Footer;

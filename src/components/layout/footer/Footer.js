import React from "react";
import Facebook from "../../../assets/images/components/footer/Facebook.svg";
import Instagram from "../../../assets/images/components/footer/Instagram.svg";
import Youtube from "../../../assets/images/components/footer/Youtube.svg";
import Rectangle from "../../../assets/images/components/footer/Rectangle.svg";
import ArrowUp from "../../../assets/images/components/footer/ArrowUp.svg";
import ArrowDown from "../../../assets/images/components/footer/ArrowDown.svg";


const Footer = () => {
  return (
    <>
      <div className="footer-page">
        <div className="language-button__language">
          <form onClick={(e) => e.preventDefault()}>
                  <select placeholder="Language">
                  <option>English</option>
                  <option>Japanese</option>
                  </select>
               
          </form>
          <img src={Rectangle} className="language-button__rectangle" />
          <div className="language-button__arrows">
          <img src={ArrowUp}/>
          <img src={ArrowDown}/>
          </div>
          
        </div>
        <div className="footer-page__content">
        <h2>Contact us</h2>
        <p>
          You can contact us anytime through the Contact Form. You can use
          Japanese, Korean, English or even Polsih or you can
          write to us by your own contact@saro.website
        </p>
        <h2>Follow us</h2>
        </div>
        <div className="footer-page__icons">
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
        </div>
      </div>
    </>
  );
};

export default Footer;

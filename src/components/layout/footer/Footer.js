import React from "react";
import Facebook from "../../../assets/images/components/footer/Facebook.svg";
import Instagram from "../../../assets/images/components/footer/Instagram.svg";
import Youtube from "../../../assets/images/components/footer/Youtube.svg";
import ArrowDown from "../../../assets/images/components/footer/ArrowDown.svg";

const Footer = () => {
  return (
    <>
      <section className="footer-page">
        <div className="footer-page__content">

          <select placeholder="Language"
            defaultValue="English">
            <option>English</option>
            <option>Japanese</option>
            <option>Korean</option>
            <option>Chinese</option>
            <option>Polish</option>
          </select>

          <h2>Contact us</h2>
          <p>
            You can contact us anytime through the Contact Form. You can use
            Japanese, Korean, English or even Polsih or you can write to us by
            your own contact@saro.website
          </p>
          <h2>Follow us</h2>
        </div>
        <div className="footer-page__icons">
          <ul className="footer-page__socialMedia">
            <li>
              <a href="https://www.facebook.com/" className="footer-page__facebook">
                <img src={Facebook} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" className="footer-page__instagram">
                <img src={Instagram} alt="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" className="footer-page__youtube">
                <img src={Youtube} alt="youtube" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Footer;

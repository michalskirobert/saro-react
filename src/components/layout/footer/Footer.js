import React from "react";
import Facebook from "../../../assets/images/components/footer/Facebook.svg";
import Instagram from "../../../assets/images/components/footer/Instagram.svg";
import Youtube from "../../../assets/images/components/footer/Youtube.svg";
import Rectangle from "../../../assets/images/components/footer/Rectangle.svg";
import ArrowDown from "../../../assets/images/components/footer/ArrowDown.svg";
import { Dropdown } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <section className="footer-page">
      
        <Dropdown className="footer-page__dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic" className="footer-page__language-button">
          Language         
          <img
          src={Rectangle}
          className="language-button__rectangle"
          alt="rectangle"
        />
                  <img src={ArrowDown} alt="arrowDown" className="arrows__ArrowDown" />
        </Dropdown.Toggle>
      
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">English</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Japanese</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Chinese</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Korean</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      
        <div className="footer-page__content">
          <h2>Contact us</h2>
          <p>
            You can contact us anytime through the Contact Form. You can use
            Japanese, Korean, English or even Polish or you can write to us by
            your own contact@saro.website.
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

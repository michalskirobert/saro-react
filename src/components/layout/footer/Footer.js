import React from "react";
import Facebook from "../../../assets/images/components/footer/Facebook.svg";
import Instagram from "../../../assets/images/components/footer/Instagram.svg";
import Youtube from "../../../assets/images/components/footer/Youtube.svg";
import Rectangle from "../../../assets/images/components/footer/Rectangle.svg";
import arrowUp from "../../../assets/images/components/footer/arrowUp.svg";
import arrowBottom from "../../../assets/images/components/footer/arrowBottom.svg";






const Footer = () => {
  return (
    <>
      <div className="newsletter">
      <div className="newsletter__language-button">
        <form onClick={(e) => e.preventDefault()}>
          <button className="language-button__language"><img src={Rectangle} className="language-button__rectangle"/>English</button>
        </form></div>
        <h2 className="newsletter__contact">Contact us</h2>
        <p className="newsletter__description">You can contact us anytime through the Contact Form.
        You can use Japanese, Korean, English or even  Polsih or you can write to us by your own contact@saro.website</p>
        <h2 className="newsletter__follow">Follow us</h2>
        <ul className="newsletter__socialMedia">
        <li>
        <a href="#" className="newsletter__facebook"><img src={Facebook} /></a></li>
        <li><a href="#" className="newsletter__instagram"><img src={Instagram} /></a></li>
        <li><a href="#" className="newsletter__youtube"><img src={Youtube} /></a></li>
        </ul>
      </div>
    </>
  );
};

export default Footer;

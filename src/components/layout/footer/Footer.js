import React from "react";





const Footer = () => {
  return (
    <>
      <div className="newsletter">
        <form onClick={(e) => e.preventDefault()}>
          <button className="newsletter__language">English</button>
          <h2 className="newsletter__contact">Contact us</h2>
          <p className="newsletter__description">You can contact us anytime through the Contact Form.
          You can use Japanese, Korean, English or even  Polsih or you can write to us by your own contact@saro.website</p>
          <h2 className="newsletter__follow">Follow us</h2>
        </form>
      </div>
    </>
  );
};

export default Footer;

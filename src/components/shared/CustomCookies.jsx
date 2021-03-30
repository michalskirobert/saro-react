import React, { useState, useEffect } from "react";

const CustomCookies = () => {
  const [isCookiesAccepted, setIsCookiesAccepted] = useState(false);

  const handleAcceptCookie = () => {
    localStorage.setItem("cookies", "true");
    setIsCookiesAccepted(true);
  };
  const handleBack = () => {
    window.history.go(-1);
  };
  const checkCookies = () => {
    const cookies = localStorage.getItem("cookies");
    cookies && setIsCookiesAccepted(true);
  };

  useEffect(() => {
    checkCookies();
  }, [isCookiesAccepted]);

  return (
    !isCookiesAccepted && (
      <div className="cookies__wrapper">
        <p className="cookies__info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum beatae
          sit quasi ipsa sequi quas ad earum laudantium, libero maiores
          provident nesciunt eaque, molestiae facilis reprehenderit officia rem.
          Recusandae, saepe!
        </p>
        <div className="cookies__btn__wrapper">
          <button className="cookies__btn accept" onClick={handleAcceptCookie}>
            I understood
          </button>
          <button className="cookies__btn back" onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
    )
  );
};

export default CustomCookies;

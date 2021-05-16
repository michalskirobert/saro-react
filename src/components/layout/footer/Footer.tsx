import React from "react";
import { useDispatch, useSelector } from "react-redux";


const Footer = () => {
  const dispatch = useDispatch();
  const footerElements = useSelector((state) => state.database.init.footer);

  return (
    <>
      <section className={"footer-page"}>
        <div className={"footer-page__content"}>
          <select
            placeholder={"Language"}
            defaultValue={"English"}
            onChange={(e) =>
              console.log(e)
              // dispatch(userActions.changeLanguage(e.target.value))
            }
          >
            {footerElements?.language.map((language, key) => {
              const { value, label } = language;
              return <option {...{ key, value }}>{label}</option>;
            })}
          </select>
          <h2>{footerElements?.header}</h2>
          <p>{footerElements?.details}</p>
          <h2>{footerElements?.socialMedia.header}</h2>
        </div>
        <div className={"footer-page__icons"}>
          <ul className={"footer-page__socialMedia"}>
            {footerElements?.socialMedia.links.map((links, index) => {
              const { link, imgURL, title } = links;
              return (
                <li key={index}>
                  <a href={link} target={"_blank"} rel={"noreferrer"}>
                    <img
                      src={imgURL}
                      alt={title}
                      className={"social-media__icons"}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Footer;

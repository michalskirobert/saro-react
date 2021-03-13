import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import main from "./../../../assets/images/components/hero/main.jpg";
import second from "./../../../assets/images/components/hero/christmas-hero.jpg";
import third from "./../../../assets/images/components/hero/header-banner.jpg";
import another from "./../../../assets/images/components/hero/dialogue.jpg";
import { useSelector, useDispatch } from "react-redux";
import { hero } from "../../../utils/_actions/hero.actions";

const heroData = [
  {
    imageURL: main,
    title: "Welcome",
    subtitle: `Saro is the best`,
    button: "Learn more",
    click: "/learn-more",
  },
  {
    imageURL: second,
    title: "Second picture",
    subtitle: `Second subtitle`,
    button: "",
  },
  {
    imageURL: third,
    title: "Third picture",
    subtitle: `Third subtitle`,
    button: "And another button",
  },
  {
    imageURL: another,
    title: "Another",
    subtitle: `Another subtitle`,
    button: "And another button",
  },
];

const Main = () => {
  const index = useSelector((state) => state.hero);
  const dispatch = useDispatch();

  const checkNumber = (number) => {
    if (number > heroData.length - 1) {
      dispatch(hero(0));
    } else {
      return dispatch(hero(number));
    }
  };

  useEffect(() => {
    let slider = setInterval(() => {
      checkNumber(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  const getBanner = (id) => {
    return dispatch(hero(id));
  };

  const { imageURL, title, subtitle, button, click } = heroData[index];

  return (
    <section className={`hero`} style={{ padding: "0" }}>
      <div className="hero__container">
        <img src={imageURL} alt="Saro free Polish lessons" />
        <div className="hero__content">
          <div className="hero__item">
            <h2 style={{ color: "#deb887" }}>{title}</h2>
            <h3>{subtitle}</h3>
            {button && (
              <Link className="btn hero-btn" to={click}>
                {button}
              </Link>
            )}
            <div className="slidershow">
              {heroData.map((item, id) => {
                return (
                  <button
                    className={`dot ${index === id && "active"}`}
                    onClick={() => getBanner(id)}
                  ></button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;

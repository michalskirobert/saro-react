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

const heroInfoData = {
  title: "Polish learning online",
  subtitle:
    "A customised online course design for you. W Available 24 hours a day. 7 days a week A community to help you find a partner Related content to help you explore not only the language but also the Polish culture",
};

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

  return (
    <section className={`hero`} style={{ padding: "0" }}>
      <div className="hero__container">
        <div className="img__container">
          {heroData.map((item, currentId) => {
            return (
              <>
                <img
                  src={item.imageURL}
                  alt={"img"}
                  key={currentId}
                  className={`${index === currentId ? "active" : "remove"}`}
                ></img>
                <div
                  className={`img__text ${
                    index === currentId ? "active" : "remove"
                  }`}
                >
                  <h2 style={{ color: "#deb887" }}>{item.title}</h2>
                  <h3>{item.subtitle}</h3>
                  {item.button && (
                    <Link className="btn hero-btn" to={item.click}>
                      {item.button}
                    </Link>
                  )}
                </div>
              </>
            );
          })}
        </div>
        <div className="hero__content">
          <div className="hero__item">
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
        <div className="hero__info">
          <h2 className="title">{heroInfoData.title}</h2>
          <p className="subtitle">{heroInfoData.subtitle}</p>
          <button className="btn find-out-btn">Find out more</button>
        </div>
      </div>
    </section>
  );
};

export default Main;

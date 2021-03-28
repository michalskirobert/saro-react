import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useContainer } from "./container";

import { hero } from "../../../store/actions/hero.actions";

const heroInfoData = {
  title: "Polish learning online",
  subtitle:
    "A customised online course design for you. W Available 24 hours a day. 7 days a week A community to help you find a partner Related content to help you explore not only the language but also the Polish culture",
};

const Main = () => {
  const { getHero } = useContainer();

  const index = useSelector((state) => state.hero);
  const heroData = useSelector((state) => state.database.hero);
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
  });

  useEffect(() => {
    getHero();
  }, []);

  const getBanner = (id) => {
    return dispatch(hero(id));
  };

  return (
    <section className="hero" style={{ padding: "0" }}>
      <div className="hero__container">
        <div className="img__container">
          {heroData.map((item, currentId) => {
            return (
              <div key={item.id}>
                <img
                  src={item.imgURL}
                  alt={item.title}
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
                  {item.buttonTitle && (
                    <button className="btn hero-btn">{item.buttonTitle}</button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="hero__content">
          <div className="hero__item">
            <div className="slidershow">
              {heroData.map((item, id) => {
                return (
                  <button
                    key={item.title}
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

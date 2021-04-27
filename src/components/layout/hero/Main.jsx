import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useContainer } from "./container";
import { useContainer as useHomeContainer } from "../../../pages/public/home/container";

import { hero } from "../../../store/actions/hero.actions";

const Main = () => {
  const { getHero } = useContainer();
  const { getEvents, getDictionary } = useHomeContainer();
  const [isReversed] = useState(false);

  const index = useSelector((state) => state.hero);
  const heroData = useSelector((state) => state.database.hero);
  const eventsData = useSelector((state) => state.database.events);
  const dispatch = useDispatch();

  const data = [...heroData, ...eventsData.slice(0, 2)];

  data.map((item, index) => {
    return (item["order"] = index);
  });

  const dataOrdered = isReversed ? data.reverse() : data;

  const checkNumber = (number) => {
    if (number > data.length - 1) {
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
    // eslint-disable-next-line
  });

  useEffect(() => {
    getHero();
    getEvents();
    getDictionary();
    // eslint-disable-next-line
  }, []);

  const getBanner = (id) => {
    return dispatch(hero(id));
  };

  return (
    <section className="hero" style={{ padding: "0" }}>
      <div className="hero__container">
        <div className="img__container">
          {dataOrdered.map((item, currentId) => {
            const {
              id,
              imgURL,
              type,
              title,
              subtitle,
              date,
              time,
              place,
              city,
              content,
              link,
              buttonTitle,
            } = item;
            return (
              <div key={id}>
                <img
                  src={imgURL}
                  alt={title}
                  key={currentId}
                  className={`${index === currentId ? "active" : "remove"}`}
                ></img>
                <div
                  className={`img__text ${
                    index === currentId ? "active" : "remove"
                  }`}
                >
                  <h2 style={{ color: "#deb887" }}>{item.title}</h2>
                  <h3>{subtitle}</h3>
                  {type === "events" && (
                    <>
                      <p>
                        Date: ${date} Time: ${time}
                      </p>
                      <p>
                        Place: {place}, {city}
                      </p>
                      <p>{content}</p>
                      <button className="btn hero-btn">
                        <a href={link}>Learn more</a>
                      </button>
                    </>
                  )}
                  {buttonTitle && (
                    <button className="btn hero-btn">{buttonTitle}</button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="hero__content">
          <div className="hero__item">
            <div className="slidershow">
              {dataOrdered.map((item, id) => {
                return (
                  <button
                    key={item.id}
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

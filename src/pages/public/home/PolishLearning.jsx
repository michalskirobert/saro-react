import React from "react";
import { useSelector } from "react-redux";

const PolsihLearning = () => {
  const homepageData = useSelector(
    (state) => state.database.init.pages.homepage
  );
  return (
    <section className="section__Polish__Learning">
      <div className="polish__Learning__info">
        {homepageData?.map((item) => {
          const { sections } = item;
          return sections
            ? sections.map((item) => {
                const { linkTitle, header, details } = item;
                return linkTitle ? (
                  <>
                    {" "}
                    <h2 className="title">{header}</h2>
                    <p className="subtitle">{details}</p>{" "}
                    <button className="btn find-out-btn"> {linkTitle}</button>
                  </>
                ) : null;
              })
            : null;
        })}
      </div>
    </section>
  );
};

export default PolsihLearning;

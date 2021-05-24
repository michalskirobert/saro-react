import React from "react";
import { useSelector } from "react-redux";
import uuid from "react-uuid";

const PolsihLearning = () => {
  const homepageData = useSelector(
    ({database}: any) => database.init.pages.homepage
  );
  return (
    <section className={"section__Polish__Learning"}>
      <div className={"polish__Learning__info"}>
        {homepageData?.map(({sections}) => {          
          return sections
            ? sections.map(({linkTitle, header, details}) => {                
                return linkTitle ? (
                  <section key={uuid()}>
                    {" "}
                    <h2 className={"title"}>{header}</h2>
                    <p className={"subtitle"}>{details}</p>{" "}
                    <button className={"btn find-out-btn"}> {linkTitle}</button>
                  </section>
                ) : null;
              })
            : null;
        })}
      </div>
    </section>
  );
};

export default PolsihLearning;

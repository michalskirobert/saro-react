import React from "react";
import { useSelector } from "react-redux";

import uuid4 from "react-uuid";

const Introduction = () => {
  const homepageData = useSelector(
    ({database}: any) => database?.init?.pages?.homepage
  );

  return (
    <section className={"introduction"}>
      {homepageData?.map((item) => {
        const { sections } = item;
        return sections ? (
          <section key={uuid4()}>
            {sections?.map((sectionItem) => {
              const { linkTitle, details, header } = sectionItem;
              return linkTitle ? null : (
                <div className={"introduction__welcome"} key={uuid4()}>
                  <h2>{header}</h2>
                  <p>{details}</p>
                </div>
              );
            })}
          </section>
        ) : null;
      })}

      {homepageData?.map((item) => {
        const { subsection } = item;
        return subsection ? (
          <section key={uuid4()}>
            {subsection
              ? subsection?.map((subsectionItem) => {
                  const { details, header, imgURL, className } = subsectionItem;
                  return (
                    <div className={"introduction__cards"} key={uuid4()}>
                      <div className={"card"}>
                        <div className={"text"}>
                          <h2 className={className}>{header} </h2>
                          <p className={className}>{details}</p>
                        </div>
                        <div className={`icon ${className}`}>
                          <img src={imgURL} alt={"icon"}></img>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </section>
        ) : null;
      })}
    </section>
  );
};

export default Introduction;

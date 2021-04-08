import React from "react";
import { useSelector } from "react-redux";

const Introduction = () => {
  const homepageData = useSelector(
    (state) => state.database.init.pages.homepage
  );

  return (
    <section className="introduction">
      {homepageData?.map((item) => {
        const { sections } = item;
        return sections ? (
          <>
            {sections?.map((sectionItem) => {
              const { linkTitle, details, header } = sectionItem;
              return linkTitle ? null : (
                <div className="introduction__welcome">
                  <h2>{header}</h2>
                  <p>{details}</p>
                </div>
              );
            })}
          </>
        ) : null;
      })}

      {homepageData?.map((item) => {
        const { subsection } = item;
        return subsection ? (
          <>
            {subsection
              ? subsection?.map((subsectionItem) => {
                  const { details, header, imgURL } = subsectionItem;
                  return (
                    <>
                      <div className="introduction__cards">
                        <div className="card">
                          <div className="text">
                            <h2 className="">{header} </h2>
                            <p className="">{details}</p>
                          </div>
                          <div className={`icon `}>
                            <img src={imgURL} alt="icon"></img>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              : null}
          </>
        ) : null;
      })}
    </section>
  );
};

export default Introduction;

import React from "react";
import { useSelector } from "react-redux";

const PolsihLearning = () => {
  const sectionData = useSelector((state) => state.database.init.pages);
  return (
    <section className="section__Polish__Learning">
      <div className="polish__Learning__info">
        <h2 className="title">{sectionData?.homepage[0].sections[0].header}</h2>
        <p className="subtitle">
          {sectionData?.homepage[0].sections[0].details}
        </p>
        <button className="btn find-out-btn">
          {" "}
          {sectionData?.homepage[0].sections[0].linkTitle}
        </button>
      </div>
    </section>
  );
};

export default PolsihLearning;

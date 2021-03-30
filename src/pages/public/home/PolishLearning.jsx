import React from "react";

const PolsihLearning = () => {
  const heroInfoData = {
    title: "Polish learning online",
    subtitle:
      "A customised online course design for you. W Available 24 hours a day. 7 days a week A community to help you find a partner Related content to help you explore not only the language but also the Polish culture",
  };

  return (
    <section className="section__Polish__Learning">
      <div className="polish__Learning__info">
        <h2 className="title">{heroInfoData.title}</h2>
        <p className="subtitle">{heroInfoData.subtitle}</p>
        <button className="btn find-out-btn">Find out more</button>
      </div>
    </section>
  );
};

export default PolsihLearning;

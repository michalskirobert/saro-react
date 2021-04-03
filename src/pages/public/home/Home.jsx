import React from "react";

import Hero from "@components/layout/hero/Main";
import Introduction from "./Introduction";
import PartnerNearYou from "./PartnerNearYou";
import PolsihLearning from "./PolishLearning";

const Home = () => {
  return (
    <main>
      <Hero />
      <PolsihLearning />
      <Introduction />
      <PartnerNearYou />
    </main>
  );
};

export default Home;

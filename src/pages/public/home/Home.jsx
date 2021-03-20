import React from "react";

import Hero from "../../../components/layout/hero/Main";
import Introduction from "./Introduction";
import PartnerNearYou from "./PartnerNearYou";

const Home = () => {
  return (
    <main>
      <Hero />
      <Introduction />
      <PartnerNearYou />
    </main>
  );
};

export default Home;

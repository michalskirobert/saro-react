import React from "react";
import Hero from "../../../components/layout/hero/Main";
import News from "./News";
import Blog from "./Blog";
import Introduction from "./Introduction";

const Home = () => {
  return (
    <main>
      <Hero />
      <Introduction />
      <News />
      <Blog />
    </main>
  );
};

export default Home;

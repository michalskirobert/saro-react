import React from "react";
import Hero from "../../../components/layout/hero/Main";
import News from "./News";
import Blog from "./Blog";
import Event from "./Events";

const Home = () => {
  return (
    <main>
      <Hero />
      <Event />
      <News />
      <Blog />
    </main>
  );
};

export default Home;

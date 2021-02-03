import React from "react";
import Hero from "./../../../components/layout/hero/Main";
import News from "./../../../pages/public/home/News";
import Blog from "./../../../pages/public/home/Blog";
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

import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Works from "./Works";
import Achievements from "./Achievements";
// import Team from "./Team";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Works />
      <Achievements />
      {/* <Team /> */}
      <Pricing />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;

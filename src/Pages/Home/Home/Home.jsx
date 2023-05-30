import React from "react";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import OurServices from "../Services/OurServices";
import OurTeam from "../OurTeam/OurTeam";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-16 lg:gap-24">
      <Hero />
      <OurServices />
      <OurTeam />
    </div>
  );
};

export default Home;

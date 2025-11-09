import React from "react";
import Hero from "../components/Hero";
import Help from "../components/Help";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import  NavMenu  from "../components/NavMenu";
import Introduce from "../components/Introduce";
import Boxarea from "../components/Boxarea";

function Home() {
  return (
    <div className="home-section">
        <NavMenu/>
        <Hero/>
        <Help/>
        <Introduce/>
        <Boxarea/>
        <Intro/>
        <Footer/>
    </div>
  );
}

export default Home;

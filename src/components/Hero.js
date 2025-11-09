// import React from "react";
// import "../styles/Hero.css";
// import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

// const Hero = () => {
//   return (
    
//     <section className="fittr-hero">
//       <div className="hero-left">
//         <h1 className="hero-title">
//           Transform Your <span>Fitness Journey</span>
//         </h1>
//         <p className="hero-subtitle">
//           Get personalized fitness and nutrition coaching from certified experts.
//           Start your transformation today with Fittr-style guidance!
//         </p>
//         <button className="hero-btn">Get Started</button>
//       </div>

//       <div className="hero-right">
//         <img
//           src="https://www.fittr.com/static-content/Left_Image_7b7d2358e7.webp"
//           alt="Fitness Hero"
//           className="hero-img"
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import "../styles/Hero.css";
import leftImg from "../Assets/Left_Image_7b7d2358e7.webp";
import rightImg from "../Assets/home_light_2_a0b0e34f11.webp";
import { FaBolt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Left Content */}
      <div className="hero-text">
        <h2 className="hero-title">
          Helping people live<br/>their
        </h2>
        <h1 className="hero-subtitle">
          BEST LIVES
        </h1>
        <p className="hero-subtitle1">
            Health on your mind? We have you covered. With more than 300,000+ <br/> successful transformations, FITTR is leading the health and fitness <br/> revolution in the world!
        </p>
        <button className="hero-btn"><FaBolt className="bolt-icon" />  I want to get healthy</button>
        {/* <p className="subtitle2">DOWNLOAD THE FLEXIFY APP</p> */}
      </div>

      {/* Right Images */}
      <div className="hero-images">
        <img src={leftImg} alt="Left" className="hero-img hero-left" />
        <img src={rightImg} alt="Right" className="hero-img hero-right" />
      </div>
    </section>
  );
};

export default Hero;

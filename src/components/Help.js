import React from "react";
import "../styles/Help.css";

import img1 from "../Assets/PF_Web_CB_Store_copy.avif";
import img2 from "../Assets/07.12.24_Web_Re-Design_RAF_Update.avif";
import img3 from "../Assets/woman-backpack-perks.avif";
import img4 from "../Assets/Home_Page_Content_Block_2024_July_Written_Workout_Guides.avif";

const Help = () => {
  const cards = [
    { image: img1, title: "Shop", desc: "Gear up with the best fitness accessories." },
    { image: img2, title: "Refer & Earn", desc: "Invite friends and earn exciting rewards." },
    { image: img3, title: "Member Perks", desc: "Exclusive benefits for premium members." },
    { image: img4, title: "Workout Guides", desc: "Step-by-step training plans by experts." },
  ];

  return (
    <section className="help-section">
      <h2 className="help-heading">How FLEXIFY Helps You</h2>
      <div className="help-carousel">
        <div className="carousel-track">
          {cards.concat(cards).map((card, index) => (
            <div className="help-card" key={index}>
              <img src={card.image} alt={card.title} className="help-image" />
              <div className="help-content">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Help;

import React, { useState,useRef } from 'react'
import '../styles/Workout.css';
import { Container, Row, Col } from 'react-bootstrap';

import {
    FaFilter, FaThLarge, FaChevronDown,
    FaChevronUp,
    FaDumbbell,
    FaUserFriends,
    FaFire,
    FaRunning,
} from "react-icons/fa";

export const Workout = ({ days = 5, hours = 6 }) => {
    const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };
    const [activeTab, setActiveTab] = useState("collections");
    const [expanded, setExpanded] = useState({
        collections: false,
        specialty: false,
        membership: false,
        difficulty: false,
        training: false,
    });

    const toggle = (key) => {
        setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const workouts = [
  {
    id: 1,
    title: "Upper Body Strength and Core",
    desc: "Develop Functional Strength from the Inside Out",
    time: "30 Min",
    tags: "Upper Body, Core",
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-2000-upper-body-strength-and-core-a174.jpg",
  },
  {
    id: 2,
    title: "No Equipment Upper Body Workout",
    desc: "Great Arms, Shoulders and Upper Back",
    time: "12 Min",
    tags: "Upper Body",
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1981-glute-strength-foundations-for-a-stronger-booty-b653.jpg",
  },
  {
    id: 3,
    title: "Upper Body Strength and Cardio Intervals Combined",
    desc: "Cardio Infused Lifting",
    time: "33 Min",
    tags: "Upper Body",
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-2005-core-pyramid-workout-a148.jpg",
  },
  {
    id: 4,
    title: "Core Pyramid Workout",
    desc: "Weighted Core Rounds that Climb in Intensity",
    time: "39 Min",
    tags: "Core",
    img: "https://d18zdz9g6n5za7.cloudfront.net/video/640/640-2003-total-body-amrap-strength-finisher-ad74.jpg",
  },
];


    return (
        <div>
            <div className="fb-banner">
                <div className="fb-container">
                    <div className="fb-row">
                        {/* Left Column */}
                        <div className="fb-left">
                            <div className="logo-wrap">
                                <span className="logo-fb">FLEXIFY
                                </span>
                            </div>
                            <div className="free-pill">Free Days</div>
                        </div>

                        {/* Right Column */}
                        <div className="fb-right">
                            <div className="countdown-wrap">
                                <div className="count-box">
                                    <div className="count-number">{days}</div>
                                    <div className="count-label">DAYS</div>
                                </div>
                                <div className="count-box">
                                    <div className="count-number">{hours}</div>
                                    <div className="count-label">HOURS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="workout-header">
                <div className="workout-header-left">
                    <h2>Browse Workout Videos</h2>
                    <div className="toggle-container">
                        <button
                            className={`toggle-btn ${activeTab === "filters" ? "active" : ""}`}
                            onClick={() => setActiveTab("filters")}
                        >
                            <FaFilter className="icon" />
                            <span>Filters</span>
                        </button>

                        <button
                            className={`toggle-btn ${activeTab === "collections" ? "active" : ""}`}
                            onClick={() => setActiveTab("collections")}
                        >
                            <FaThLarge className="icon" />
                            <span>Collections</span>
                        </button>
                    </div>
                </div>

                <div className="workout-header-right">

                </div>
            </div>
            <div className="workout-container">
                {/* ===== LEFT SIDEBAR ===== */}
                <aside className="sidebar">
                    <div className="sidebar-item expand">
                        <span>Expand All Filters</span>
                        <FaChevronDown />
                    </div>

                    <div className="sidebar-item" onClick={() => toggle("collections")}>
                        <div className="left">
                            <FaThLarge className="icon" />
                            <span>Flexify Collections</span>
                        </div>
                        {expanded.collections ? <FaChevronUp /> : <FaChevronDown />}
                    </div>

                    <div className="sidebar-item" onClick={() => toggle("specialty")}>
                        <div className="left">
                            <FaDumbbell className="icon" />
                            <span>Specialty Programs</span>
                        </div>
                        {expanded.specialty ? <FaChevronUp /> : <FaChevronDown />}
                    </div>

                    <div className="sidebar-item" onClick={() => toggle("membership")}>
                        <div className="left">
                            <FaUserFriends className="icon" />
                            <span>Membership</span>
                        </div>
                        {expanded.membership ? <FaChevronUp /> : <FaChevronDown />}
                    </div>

                    <div className="sidebar-item" onClick={() => toggle("difficulty")}>
                        <div className="left">
                            <FaFire className="icon" />
                            <span>Difficulty</span>
                        </div>
                        {expanded.difficulty ? <FaChevronUp /> : <FaChevronDown />}
                    </div>

                    <div className="sidebar-item" onClick={() => toggle("training")}>
                        <div className="left">
                            <FaRunning className="icon" />
                            <span>Training Types</span>
                        </div>
                        {expanded.training ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                </aside>

                {/* ===== MAIN CONTENT ===== */}
                <main className="workout-main">
          <div className="workout-top">
            <p>7 Collections</p>
            <h3>Today's Top Ten</h3>
          </div>
          <div className="workout-scroll">
            {workouts.map((w) => (
              <div className="workout-card" key={w.id}>
                <img src={w.img} alt={w.title} />
                <div className="workout-info">
                  <div className="tags">
                    <span className="plus">Plus</span>
                    <span className="free">Free Days</span>
                  </div>
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                  <span className="time">
                    {w.time} • {w.tags}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
        </main>
            </div>
        </div>
    )
}

export default Workout
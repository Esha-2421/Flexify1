import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <div className="logo-circle">Flexify</div>
        </div>

        <button className="footer-app-btn">Download the PF App</button>
      </div>

      <hr className="footer-divider" />

      <div className="footer-links">
        <div className="footer-column">
          <h4>Info</h4>
          <ul>
            <li>Newsroom</li>
            <li>Careers</li>
            <li>FAQs</li>
            <li>Directory</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Partners</h4>
          <ul>
            <li>Franchising</li>
            <li>Investor Relations</li>
            <li>PF Purpose</li>
            <li>PF Media Network</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms and Conditions of Use</li>
            <li>Do Not Sell or Share My Personal Information</li>
            <li>Your State and EU Privacy Rights</li>
            <li>Accessibility</li>
          </ul>
        </div>

        <div className="footer-region">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
            alt="US Flag"
            className="region-flag"
          />
          <span>Region: </span>
          <span className="region-text">US <b>(English)</b></span>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>© 2025 Planet Fitness Franchising, LLC.</p>
        <div className="footer-social">
          <span>Follow us:</span>
          <FaFacebookF />
          <FaInstagram />
          <FaTiktok />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

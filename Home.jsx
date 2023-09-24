import React from "react";
import img1 from "../assets/logo.png";
import img2 from "../assets/user.png";

const Home = () => {
  return (
    <div className="home-container">
      <nav className="nav">
        <div className="left">
          <img src={img1} alt="img" className="web-logo"></img>
          <h2 className="name">Green Vision</h2>
        </div>
        <div className="right">
          <div className="comp">
            <a href="" className="comp-link">
              FAQs
            </a>
          </div>
          <div className="comp">
            <a href="" className="comp-link">
              Resources
            </a>
          </div>
          <div className="comp">
            <a href="" className="comp-link">
              History
            </a>
          </div>
          <div className="comp user-profile">
            <a href="" className="comp-link">
              Profile
            </a>
            <img src={img2} alt="img" className="user-logo"></img>
          </div>
        </div>
      </nav>
      <div className="quote-div">
        <h1 className="quote">
          The only way forward, if we are going to improve the quality of the
          environment, is to get everybody involved.
        </h1>
      </div>
      <div className="btn-div">
        <button className="btn">Find E-Waste Facility Nearby</button>
      </div>
      <div className="shape"></div>
    </div>
  );
};

export default Home;

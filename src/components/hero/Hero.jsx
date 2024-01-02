import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <h2>Building Digital Experiances That Inspire</h2>
          <p>
            Passionate FrontEnd Developer | Transforming Ideas into Seamless and
            Visually Stunning Web Solutions.
          </p>
        </div>
        <div className="hero-img">
          <div>
            {/* <div className="tech-icon">
              <img
                // src="./assets/images/logo192.png"
                alt="image"
                // width="65px"
                // height="65px"
              />
            </div> */}
            <img
              src="./assets/images/boy.avif"
              alt="image"
              width="300px"
              height="450px"
              style={{ borderRadius: "30px" }}
            />
          </div>
          <div className="hero-image-icons">
          <div className="tech-icon">
            <img
              src="./assets/images/html_2_-removebg-preview.png"
              alt="image"
              width="65px"
              height="65px"
            />
          </div>{" "}
          <div className="tech-icon">
            <img
              src="./assets/images/html-icon-removebg-preview.png"
              alt="image"
              width="75px"
              height="70px"
            />
          </div>
          <div className="tech-icon">
            <img
              src="./assets/images/js-icon.webp"
              alt="image"
              width="75px"
              height="70px"
            />
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

import React from "react";
import "./Hero.css";
import Button from "../../Assets/Button";
import { BiDownArrowAlt } from "react-icons/bi";

import logo from "../../images/eight.jpeg";
import logoone from "../../images/yellowgown.jpg";
import logotwo from "../../images/thirtyfive.jpeg";
import logothree from "../../images/first.jpeg";
import logofour from "../../images/fourty.jpeg";
import logofive from "../../images/fourtyfour.jpeg";
import logosix from "../../images/fourtyone.jpeg";
import logoseven from "../../images/thirtynine.jpeg";
import logoeight from "../../images/thirtytwo.jpeg";
import logonine from "../../images/thirtysix.jpeg";
import logoten from "../../images/thirtythree.jpeg";
import logoele from "../../images/twentyeight.jpeg";
import logotwe from "../../images/foutr.jpeg";

const Hero = () => {
  return (
    <div className="content-container">
      <div className="gen-container">
        <div className="content">
          <div className="left">
            <div className="left-p">
              <p>
              
                Ready to level up your fashion game?
                <span data-aos="fade-zoom-in" data-aos-offset="250" data-aos-easing="ease-in-sine" data-aos-duration="600" >Vivy's Fashion House</span>
                <br />
                is your sure bet
              </p>
            </div>
          </div>
          <div className="right-image">
            <img src={logotwe} alt="mask" data-aos="flip-left" data-aos-delay="100"  />
          </div>
        </div>

        <div className="hero-container">
          <div className="hero">
            <div className="slide">
              <img src={logo} alt="logo" />
            </div>
            <div className="slide">
              <img src={logoone} alt="logo" />
            </div>
            <div className="slide">
              <img src={logotwo} alt="logoone" />
            </div>
            <div className="slide">
              <img src={logothree} alt="logothree" />
            </div>
            <div className="slide">
              <img src={logofour} alt="logofour" />
            </div>
            <div className="slide">
              <img src={logofive} alt="logofive" />
            </div>
            <div className="slide">
              <img src={logosix} alt="logosix" />
            </div>

            <div className="slide">
              <img src={logoseven} alt="logoseven" />
            </div>
            <div className="slide">
              <img src={logoeight} alt="logoeight" />
            </div>
            <div className="slide">
              <img src={logonine} alt="logonine" />
            </div>
            <div className="slide">
              <img src={logoten} alt="logoten" />
            </div>
            <div className="slide">
              <img src={logoele} alt="logoeleven" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

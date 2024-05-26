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
        <div className="gen">
          <div className="level-up">
            <div className="level-up-sub">
            <h4>Ready</h4>
            <h4>to level up</h4>
            <h4>your fashion game?</h4>
            <div className="ready">
              <p>
                <span>Vivy's Fashion House </span>
              </p>
              <p>remains your sure bet</p>
            </div>
            </div>
            <div className="latest">
              <div>Latest Collection</div>
              <div>
                <BiDownArrowAlt />
              </div>
            </div>
          </div>

          <div className="background">
            <img src={logotwe} alt="twe" />
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

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHeart,faGlobe,faLevelUpAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faPinterestP,
  faWeb,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
// import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div>
      <div className="bg-black  mt-8">
        <div className="flex flex-col justify-center md:flex-row md:justify-between mx-5 sm:mx-10 md:mx-56 py-10">
          <div className="text-left text-white w-full md:w-1/3">
            <h1 className="text-4xl text-bold " style={{ color: "#4DBCE9" }}>
              Calvino.
            </h1>
            <p className="mt-6">
              In the mean time shall soon find out the cause of this: What was
              the epicurus towards their children.
            </p>
            <div className="mt-4 space-x-4 " style={{ color: "#4DBCE9" }}>
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faPinterestP} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faGlobe} />

            </div>
          </div>
          <div className="text-white space-x-2 md:space-x-4 mt-8">
            <button className=" rounded-full border-2 border-white  px-2 py-1 md:px-10 md:py-2">
              Download CV
            </button>
            <button
              className="rounded-full   px-5 py-2 md:px-10 md:py-2 "
              style={{ backgroundColor: "#4DBCE9" }}>
              Let,s Talk
            </button>
          </div>
        </div>
        <div className=" flex flex-col justify-center md:flex-row md:justify-between mx-5 sm:mx-10 md:mx-56 py-10 text-white text-left">
          <div>
            Copyright ©2021 All rights reserved | This template is made with{" "}
            <FontAwesomeIcon icon={faHeart} style={{ color: "#4DBCE9" }} /> by
            Colorlib
          </div>
          <div className="text-center mt-5 md:mt-0 space-x-4 sm:space-x-6">
            <a href="">Home</a>
            <a href="">Work</a>
            <a href="">Service</a>
            <a href="">blog</a>
            <a href="">Contact</a>
          </div>
        </div>
        {/* <div className=" flex justify-end ">
        <FontAwesomeIcon icon={faLevelUpAlt}  style={{ color: "#4DBCE9" }} />
        </div> */}
      </div>
    </div>
  );
};

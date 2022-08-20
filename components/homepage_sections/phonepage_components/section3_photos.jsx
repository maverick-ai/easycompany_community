import React from "react";
import styles from "../../../styles/Homepage/mobileCSS/section3Photos.module.scss";
import Marquee from "react-fast-marquee";
import Section3PhotosComponent from "./section3_photos_component";

function Section3Photos() {
  return (
    <Marquee loop={0} gradient={false} direction="right">
      <Section3PhotosComponent imgSrc="phone_assets/Section3Photo1.png"  text="Solo or in a group ? Need advice"/>
      <Section3PhotosComponent imgSrc="phone_assets/Section3Photo2.png"  text="Planning a trip to somewhere ?"/>
      <Section3PhotosComponent imgSrc="phone_assets/Section3Photo3.png"  text="Looking for recommendation ?"/>
      <Section3PhotosComponent imgSrc="phone_assets/Section3Photo4.png"  text="Not able to find good restuarants ?"/>
    </Marquee>
  );
}

export default Section3Photos;

import React from "react";
import Button from "./Button";

const About = () => {
   return (
      <div className="about__content">
         <div className="about__content--headline">
            <h2>Meet Our Team</h2>
         </div>

         <div className="about__content--image">
            <img src="" alt="" />
         </div>

         <div className="about__contnet--title">
            <h3>More Than Just Coffee. It's Mood.</h3>
         </div>

         <div className="about__content--row">
            <p>
               We started with a simple question: Why should great taste belong
               only to coffee lovers?
            </p>
         </div>

         <div className="about__content--row">
            <p>
               At Basso, we blend bold coffee flavors with refreshing, creative
               non-coffee drinks — because we believe everyone deserves
               something that fits their vibe. Whether you're craving a creamy
               espresso, a chill matcha, or a fruity cooler that hits just
               right, we’ve got something brewed for you.
            </p>
         </div>

        <div className="about__content--row">
            <p>We’re not a big chain — we’re a passion project. Built for people who want quality, personality, and something a little different with every sip. Our drinks are handcrafted with care, and our goal is simple: make your everyday drink feel like a small moment of joy.</p>
        </div>

        <div className="about__content--row">
            <p>So whether you're here for the caffeine or just here for the flavor — welcome. You're one of us.</p>
        </div>

        <Button text={"Follow Us. Sip With Us"}/>

      </div>
   );
};

export default About;

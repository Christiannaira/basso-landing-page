import React from "react";
import Button from "./Button";
import team from "../assets/hero_team.jpg";

const About = () => {
   return (
      <div className="about__content">
         <div className="about__content--headline">
            <h2>Meet Our Team</h2>
         </div>

         <div className="about__content--image">
            <img src={team} alt="team-image" />
         </div>

         <div className="about__contnet--title">
            <h3>More Than Just Coffee. It's Mood.</h3>
         </div>

         <div className="about__content--row">
            <p>
               We started with a simple question: <br /><span>Why should great taste belong
               only to coffee lovers?</span>
            </p>
         </div>

         <div className="about__content--row">
            <p>
               At <span>Basso</span>, we blend bold coffee flavors with refreshing, creative
               non-coffee drinks because we believe everyone deserves
               something that fits their vibe. Whether you're craving a <span>creamy
               espresso</span>, a <span>chill matcha</span>, or a <span>fruity cooler</span> that hits just
               right, we’ve got something brewed for you.
            </p>
         </div>

        <div className="about__content--row">
            <p>We’re not a big chain, we’re a passion project. <b>Built for people who want quality, personality, and something a little different with every sip</b>. Our drinks are handcrafted with care, and our goal is simple: make your everyday drink feel like a small moment of joy.</p>
        </div>

        <div className="about__content--row">
            <p>So whether you're here for the caffeine or just here for the flavor, welcome. <br /><span>You're one of us.</span></p>
        </div>

        <Button text={"Follow Us. Sip With Us"}/>

      </div>
   );
};

export default About;

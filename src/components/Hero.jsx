import Button from "./Button";
import hero from "../assets/hero_image.jpg";
import logo from "../assets/logo.png";
import drink1 from "../assets/drink1.png";
import drink2 from "../assets/drink2.png";

const Hero = () => {
   return (
      <div className="hero__content">
         <div className="hero__content--logo">
            <img src={logo} alt="basso-logo" />
         </div>

         <div className="hero__content--headline">
            <h1>
               Crave More Than Coffee? <br /> We've Got Your Cup!
            </h1>
            <p>
               Fuel your mood with handcrafted drinks <br /> whether you're a
               coffee lover or not
            </p>
            <Button text={"Follow us for your daily drink fix & fresh drops!"}/>
         </div>

        <div className="hero__content--image">
            <img src={hero} alt="basso-hero-image" />
        </div>

        <img src={drink1} alt="drink icon" className="drink_icon icon1"/>
        <img src={drink2} alt="drink icon" className="drink_icon icon2"/>

      </div>
   );
};

export default Hero;

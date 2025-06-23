import Button from "./Button";

const Hero = () => {
   return (
      <div className="hero__content">
         <div className="hero__content--logo"></div>

         <div className="hero__content--headline">
            <h1>
               Crave More Than Coffee? <br /> We've Got Your Cup
            </h1>
            <p>
               Fuel your mood with handcrafted drinks <br /> whether you're a
               coffee lover or not
            </p>
            <Button text={"Follow us for your daily drink fix & fresh drops!"}/>
         </div>

        <div className="hero__content-image">
            <img src="" alt="" />
        </div>

      </div>
   );
};

export default Hero;

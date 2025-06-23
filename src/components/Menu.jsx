import React from "react";
import Button from "./Button";
import menu from "../assets/menu.jpg";
const Menu = () => {
   return (
      <div className="menu__content">
         <div className="menu__content--headline">
            <h2>
               Tired of the same <span>boring brews</span> <br /> or sugary
               drinks that <span>don’t satisfy</span>?{" "}
            </h2>
         </div>

         <div className="menu__content--image">
            <img src={menu} alt="menu-image" />
         </div>

         <p>
            Our menu blends bold, comforting coffee with refreshing, non-coffee
            options <br /> made to match your vibe — morning, noon, or night.{" "}
         </p>

         <p>Because you deserve a drink that fits you.</p>

         <Button text={"Follow us for your daily drink & fresh drops!"} />
      </div>
   );
};

export default Menu;

import { useState } from "react";
import one from "../assets/01.jpg";
import two from "../assets/02.jpg";
import three from "../assets/03.jpg";
import four from "../assets/04.jpg";
import five from "../assets/05.jpg";
import six from "../assets/06.jpg";
import seven from "../assets/07.jpg";
import eight from "../assets/08.jpg";
import nine from "../assets/09.jpg";

const Gallery = () => {
   const [showImages, setShowImages] = useState(false);
   const [showText, setShowText] = useState("See More");

   console.log(showImages);
   console.log(showText);

   const handleClick = () => {

      setShowImages(!showImages);
      
      if (showText === "See More") {
         setShowText("See Less");
      } else {
         setShowText("See More");
      }

   };

   return (
      <div className="gallery__content">
         <div className="gallery__content--headline">
            <h2>Our Beloved Customers</h2>
         </div>

         <div className="gallery__content--main">
            <h3>Gallery</h3>
            <div className="gallery__content--main--images">
               <div className="row">
                  <img src={one} alt="image-one" />
                  <img src={two} alt="image-two" />
                  <img src={three} alt="image-three" />
               </div>

               <div className="row">
                  <img src={four} alt="image-one" />
                  <img src={five} alt="image-two" />
                  <img src={six} alt="image-three" />
               </div>

               <div className="row">
                  <img src={seven} alt="image-one" />
                  <img src={eight} alt="image-two" />
                  <img src={nine} alt="image-three" />
               </div>
            </div>

            {showImages ? (
               <>
                  <div className="gallery__content--main--images gallery__hidden">
                     <div className="row">
                        <img src={one} alt="image-one" />
                        <img src={two} alt="image-two" />
                        <img src={three} alt="image-three" />
                     </div>

                     <div className="row">
                        <img src={four} alt="image-one" />
                        <img src={five} alt="image-two" />
                        <img src={six} alt="image-three" />
                     </div>

                     <div className="row">
                        <img src={seven} alt="image-one" />
                        <img src={eight} alt="image-two" />
                        <img src={nine} alt="image-three" />
                     </div>
                  </div>
               </>
            ) : (
               <></>
            )}

            <h4 className="gallery__btn" onClick={handleClick}>
               {showText}
            </h4>
         </div>
      </div>
   );
};

export default Gallery;

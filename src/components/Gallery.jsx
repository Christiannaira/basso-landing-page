import { useState, useRef } from "react";
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
  const [showMore, setShowMore] = useState(false);
  const galleryTopRef = useRef(null);
  const galleryBottomRef = useRef(null);

  const handleClick = () => {
    setShowMore((prev) => !prev);

    setTimeout(() => {
      const targetRef = !showMore ? galleryBottomRef : galleryTopRef;
      targetRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="gallery__content" ref={galleryTopRef} id="gallery">
      <div className="gallery__content--headline">
        <h2>Our Beloved Customers</h2>
      </div>

      <div className="gallery__content--main">
        <h3>Gallery</h3>

        <div className="gallery__content--main--images">
          <div className="row">
            <img src={one} alt="customer-1" />
            <img src={two} alt="customer-2" />
            <img src={three} alt="customer-3" />
          </div>

          <div className="row">
            <img src={four} alt="customer-4" />
            <img src={five} alt="customer-5" />
            <img src={six} alt="customer-6" />
          </div>

          <div className="row">
            <img src={seven} alt="customer-7" />
            <img src={eight} alt="customer-8" />
            <img src={nine} alt="customer-9" />
          </div>
        </div>

        {showMore && (
          <div
            className="gallery__content--main--images gallery__hidden"
            ref={galleryBottomRef}
          >
            <div className="row">
              <img src={one} alt="extra-1" />
              <img src={two} alt="extra-2" />
              <img src={three} alt="extra-3" />
            </div>

            <div className="row">
              <img src={four} alt="extra-4" />
              <img src={five} alt="extra-5" />
              <img src={six} alt="extra-6" />
            </div>

            <div className="row">
              <img src={seven} alt="extra-7" />
              <img src={eight} alt="extra-8" />
              <img src={nine} alt="extra-9" />
            </div>
          </div>
        )}

        <h4 className="gallery__btn" onClick={handleClick}>
          {showMore ? "See Less" : "See More"}
        </h4>
      </div>
    </div>
  );
};

export default Gallery;

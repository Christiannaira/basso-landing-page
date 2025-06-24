import one from "../assets/01.jpg";
import two from "../assets/02.jpg";
import three from "../assets/03.jpg";
import four from "../assets/04.jpg";
import five from "../assets/05.jpg";
import six from "../assets/06.jpg";
import seven from "../assets/07.jpg";
import eight from "../assets/08.jpg";
import nine from "../assets/09.jpg";
import ten from "../assets/10.jpg";

const Gallery = () => {
  return (
    <div className='gallery__content'>
      
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
                  <img src={one} alt="image-one" />
                  <img src={two} alt="image-two" />
                  <img src={three} alt="image-three" />
                </div>

                 <div className="row">
                  <img src={one} alt="image-one" />
                  <img src={two} alt="image-two" />
                  <img src={three} alt="image-three" />
                </div>
                
              </div>
            </div>

    </div>
  )
}

export default Gallery

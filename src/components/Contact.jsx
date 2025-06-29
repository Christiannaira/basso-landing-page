import location from "../assets/location.jpg";

const Contact = () => {
   return (
      <div className="contact__content">
         <div className="contact__content--headline">
            <h2>Where To Find Us?</h2>
         </div>

         <div className="contact__content--location">
            <div className="row--image">
               <img src={location} alt="basso-image" />
            </div>

            <div className="row--map">
               <div>
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d343.4150399926088!2d123.76173108519555!3d13.143615071904076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSawangan%20Food%20Park%2C%20Legazpi%2C%20Philippines!5e0!3m2!1sen!2sph!4v1750843776759!5m2!1sen!2sph" // Your specific embed URL
                   
                     style={{ border: 0 }}
                     allowFullScreen
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     title="Embedded Google Map" // Important for accessibility
                  ></iframe>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;

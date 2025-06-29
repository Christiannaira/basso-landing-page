import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className='footer__content'>
      
        <div className="footer__content--logo">
            <div className="footer__content--image">
                <img src={logo} alt="basso-logo" />
            </div>
        </div>

        <div className="footer__content--copyright">
            <p>Copyright@2025. All Rights Reserved by Basso.</p>
        </div>

    </div>
  )
}

export default Footer

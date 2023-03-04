import React from "react";
import "./styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__address">
        <a href="#">
          <img src="/brand_logo.png" alt="" />
        </a>
        <p>Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos, Nigeria</p>
        <p>© 2022 Hernalytics</p>
      </div>
      <div className="footer__links">
        <div className="footer__list">
          <h4>About</h4>
          <p>Our Story</p>
          <p>Blog</p>
          <p>About Hernalytics</p>
          <p>Videos</p>
        </div>
        <div className="footer__list">
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <div className="footer__list">
          <h4>Let's Chat!</h4>
          <p>hernalytics@gmail.com</p>
          <p>+234 801 234 5678</p>
          <div className="social__links">
            <a href="#" className="link">
              <img src="/instagramm.png" alt="instagram" />
            </a>
            <a href="#" className="link">
              <img src="/twitter.png" alt="twitter" />
            </a>
            <a href="#" className="link">
              <img src="/watsapp.png" alt="whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

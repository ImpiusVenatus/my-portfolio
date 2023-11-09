import React from 'react';
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container">
          <h1 className="footer_title">Sadman Hossain</h1>

          <ul className="footer_list">
            <li>
              <a href="#about" className="footer_link">About</a>
            </li>

            <li>
              <a href="#portfolio" className="footer_link">Projects</a>
            </li>

            <li>
              <a href="#testimonials" className="footer_link">Testimonials</a>
            </li>
          </ul>
          
          <div className="footer_social">
            <a href="https://www.facebook.com/profile.php?id=100006365620176" 
              className="footer_social_link" 
              target="_blank" 
              rel="noreferrer">
                <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://www.instagram.com/impius_venatus/" 
              className="footer_social_link" 
              target="_blank" 
              rel="noreferrer">
                <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://www.twitter.com" 
              className="footer_social_link" 
              target="_blank" 
              rel="noreferrer">
                <i className="bx bxl-twitter"></i>
            </a>
          </div>

          <span className="footer_copy">&#169; Sadman Hossain, All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer
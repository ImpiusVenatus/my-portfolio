import React from 'react';

function Social() {
  return (
    <div className="home_social">
        <a href="https://www.instagram.com/impius_venatus/" 
        className="home_social_icon" 
        target="_blank" 
        rel="noreferrer">
            <i className="uil uil-instagram"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100006365620176" 
        className="home_social_icon" 
        target="_blank" 
        rel="noreferrer">
            <i className="uil uil-facebook"></i>
        </a>
        <a href="https://github.com/ImpiusVenatus" 
        className="home_social_icon" 
        target="_blank" 
        rel="noreferrer">
            <i className="uil uil-github-alt"></i>
        </a>
    </div>
  )
}

export default Social;
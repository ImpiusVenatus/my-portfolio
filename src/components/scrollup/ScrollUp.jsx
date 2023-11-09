import React from 'react';
import "./scrollup.css";

function Scrollup() {
    window.addEventListener("scroll", function () {
        const scrollup = this.document.querySelector(".scrollup");
        // When the scroll is higher than 560 viewport height, add the show-scroll class to a tag with scroll-topp class
        if(this.scrollY >= 560) scrollup.classList.add("show_scroll");
        else scrollup.classList.remove("show_scroll");
    });

  return (
    <a href="#home" className="scrollup">
        <i className="uil uil-arrow-up scrollup_icon"></i>
    </a>
  )
}

export default Scrollup;
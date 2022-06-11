import React from "react";
import './LinkList.css'


const LinkList = ()=> {
  return (
    <div className = "col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right nav-wrapper">
      <div className = "primary-nav">
        <ul>
          <li><a href = "index.html">Home</a></li>
          <li><a href = "portfolio.html">Portfolio</a></li>
          <li><a href = "contact.html">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default LinkList
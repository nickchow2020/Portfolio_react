import React from "react";
import { Link } from "react-router-dom"
import './LinkList.css'


const LinkList = ()=> {
  return (
    <div className = "col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right nav-wrapper">
      <div className = "primary-nav">
        <ul>
          <li><Link to= "/">Home</Link></li>
          <li><Link to = "/portfolio">Portfolio</Link></li>
          <li><Link to = "/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default LinkList
import React from "react";
import MediaLogo from "./MediaLogo";
import ContactInfo from "./ContactInfo";
import FooterNav from "./FooterNav";


const Footer = ()=>{
  return (
    <div className = "footer">
			<div className = "container-fluid">
				<MediaLogo />
				<ContactInfo />
				<FooterNav />
			</div>
		</div>
  )
}

export default Footer
import React from "react"
import Logo from "./Logo"
import './Nav.css'

import LinkList from "./LinkList"
const Nav = ()=> {
  return (
		<div className = "navigation">
			<div className = "container-fluid">
				<div className = "row nav-wrapper">
					<Logo />
					<LinkList />
				</div>
			</div>
		</div>
  )
}


export default Nav
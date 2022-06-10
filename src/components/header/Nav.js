import React from "react"
import Logo from "./Logo"

import LinkList from "./LinkList"
const Nav = ()=> {
  return (
		<div className = "navigation">
			<div className = "container-fluid">
				<div className = "row">
					<Logo />
					<LinkList />
				</div>
			</div>
		</div>
  )
}


export default Nav